import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setActiveTabExplore,
  toggleExploreView,
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

class Explore extends Component {
  render() {
    const PeopleYouMayKnow = ({ people, profileId, account }) => {
      //find not followed and follow mutuals
      let peopleToDisplay = [];
      for (let followers of account.followers) {
        let tempPerson = people.filter((person) => person.id === followers)[0];
        for (let followersOfFollower of tempPerson.followers) {
          if (
            account.followers.includes(followersOfFollower) === false &&
            followersOfFollower !== profileId
          )
            peopleToDisplay.push(followersOfFollower);
        }
      }
      return (
        <div className="row flex-nowrap people-scroller mt-5">
          {peopleToDisplay.map((personId) => {
            const person = this.props.accounts.filter(
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
                  <button className="btn shadow text-dark text-weight-bold">
                    Follow
                  </button>
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
        <PeopleYouMayKnow
          people={this.props.followers}
          profileId={this.props.loggedInProfile.id}
          account={
            this.props.followers.filter(
              (account) => account.id === this.props.loggedInProfile.id
            )[0]
          }
        />
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
              src="icons/feed,gallery.png"
              alt="gallery"
              className="mx-1"
              width={30}
              height={30}
              onClick={() => this.props.toggleExploreView(false)}
            />
            <img
              src="icons/gallery,timeline.png"
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

const mapStateToProps = (state) => {
  return {
    loggedInProfile: state.loggedInProfile,
    activeTabExplore: state.activeTabExplore,
    accounts: state.accounts,
    followers: state.followers,
    isExploreExpanded: state.isExploreExpanded,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setActiveTabExplore: (newTab) => dispatch(setActiveTabExplore(newTab)),
    toggleExploreView: (isExploreExpanded) =>
      dispatch(toggleExploreView(isExploreExpanded)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
