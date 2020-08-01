import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setActiveProfile,
  setActiveTabExplore,
  toggleExploreView,
  addFollowRequest,
  deleteFollowRequest,
} from "../../redux/actionCreators";
import ExpandedView from "./expandedViewComponent";
import View from "./viewComponent";

const changeClasses = (activeClass) => {
  document
    .querySelector("#ownPosts")
    .classList.remove("active", "text-dark", "disabled");
  document
    .querySelector("#otherPosts")
    .classList.remove("active", "text-dark", "disabled");
  document
    .querySelector("#igtv")
    .classList.remove("active", "text-dark", "disabled");
  document
    .querySelector("#reels")
    .classList.remove("active", "text-dark", "disabled");
  document.querySelector("#ownPosts").classList.add("text-secondary");
  document.querySelector("#otherPosts").classList.add("text-secondary");
  document.querySelector("#igtv").classList.add("text-secondary");
  document.querySelector("#reels").classList.add("text-secondary");
  document
    .querySelector(`#${activeClass}`)
    .classList.add("active", "text-dark", "disabled");
  document.querySelector(`#${activeClass}`).classList.remove("text-secondary");
};

const ChooseComponent = ({ active, isExpanded }) => {
  if (isExpanded) return <ExpandedView active={active} />;
  else return <View active={active} />;
};
const FollowButton = (props) => {
  if (props.person.pendingRequests.includes(props.loggedInId))
    return (
      <button
        className="btn shadow text-dark text-weight-bold"
        onClick={() =>
          props.deleteFollowRequest({
            person: props.person.id,
            requester: props.loggedInId,
          })
        }
      >
        <img src="icons/follow.svg" alt="follow" width={30} />
        Requested
      </button>
    );
  else
    return (
      <button
        className="btn shadow text-dark text-weight-bold"
        onClick={() =>
          props.addFollowRequest({
            person: props.person.id,
            requester: props.loggedInId,
          })
        }
      >
        <img src="icons/follow.svg" alt="follow" width={30} />
        Follow
      </button>
    );
};
class Explore extends Component {
  render() {
    const PeopleYouMayKnow = () => {
      //find not followed and follow mutuals
      let peopleToDisplay = [];
      const loggedIn = this.props.loggedInProfile;
      const accountList = this.props.accounts;
      for (let followers of loggedIn.followers) {
        let tempPerson = accountList.filter(
          (person) => person.id === followers
        )[0];
        for (let followersOfFollower of tempPerson.followers) {
          if (
            followersOfFollower !== loggedIn.id &&
            loggedIn.followers.includes(followersOfFollower) === false
          )
            peopleToDisplay.push(followersOfFollower);
        }
      }
      return (
        <div className="row flex-nowrap people-scroller mt-5">
          {peopleToDisplay.map((personId) => {
            const person = accountList.filter(
              (account) => account.id === personId
            )[0];
            return (
              <div className="shadow col-2 people-card">
                <center>
                  <img
                    src={person.avatar}
                    alt={person.name}
                    className="rounded-circle"
                    width={80}
                    height={80}
                  />
                  <br />
                  <h4>{person.name}</h4>
                  <br />
                  <FollowButton
                    person={person}
                    loggedInId={loggedIn.id}
                    addFollowRequest={this.props.addFollowRequest}
                    deleteFollowRequest={this.props.deleteFollowRequest}
                  />
                </center>
              </div>
            );
          })}
        </div>
      );
    };
    return (
      <div className="container">
        <h3>People You May Know</h3>
        <PeopleYouMayKnow />
        <div className="row my-5">
          <ul className="nav nav-tabs col-11">
            <li className="nav-item">
              <a
                id="ownPosts"
                className="nav-link unstyled mx-auto active disabled text-dark"
                onClick={() => {
                  changeClasses("ownPosts"); //might coz error
                  this.props.setActiveTabExplore("ownPosts");
                }}
                href="#ownPosts"
              >
                Posts you may like
              </a>
            </li>
            <li className="nav-item">
              <a
                id="otherPosts"
                className="nav-link unstyled text-secondary mx-auto"
                href="#otherPosts"
                onClick={() => {
                  changeClasses("otherPosts");
                  this.props.setActiveTabExplore("otherPosts");
                }}
              >
                Posts your friends like
              </a>
            </li>
            <li className="nav-item">
              <a
                id="igtv"
                href="#igtv"
                onClick={() => {
                  changeClasses("igtv");
                  this.props.setActiveTabExplore("igtv");
                }}
                className="nav-link unstyled text-secondary mx-auto"
              >
                IgTv
              </a>
            </li>
            <li className="nav-item">
              <a
                id="reels"
                className="nav-link unstyled text-secondary mx-auto"
                href="#reels"
                onClick={() => {
                  changeClasses("reels");
                  this.props.setActiveTabExplore("reels");
                }}
              >
                Reels
              </a>
            </li>
          </ul>
          <div className="row col">
            <img
              src="icons/feedgrid.svg"
              alt="gallery"
              className="mx-1"
              width={30}
              height={30}
              onClick={() => this.props.toggleExploreView(false)}
            />
            <img
              src="icons/feedtimeline.svg"
              alt="gallery"
              className="mx-1"
              width={30}
              height={30}
              onClick={() => this.props.toggleExploreView(true)}
            />
          </div>
        </div>
        <ChooseComponent
          active={this.props.activeTabExplore}
          isExpanded={this.props.isExploreExpanded}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedInProfile: state.utility.loggedInProfile,
  activeTabExplore: state.utility.activeTabExplore,
  accounts: state.accounts,
  isExploreExpanded: state.utility.isExploreExpanded,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTabExplore: (newTab) => dispatch(setActiveTabExplore(newTab)),
    toggleExploreView: (isExploreExpanded) =>
      dispatch(toggleExploreView(isExploreExpanded)),
    setActiveProfile: (person) => dispatch(setActiveProfile(person)),
    addFollowRequest: (info) => dispatch(addFollowRequest(info)),
    deleteFollowRequest: (info) => dispatch(deleteFollowRequest(info)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
