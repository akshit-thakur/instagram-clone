/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleSearchBox } from "../redux/actionCreators";
import { baseUrl } from "../shared/baseUrl";
class Navigation extends Component {
  render() {
    const NewPostModal = () => {
      return (
        <div
          id="newPost"
          className="modal modal-body modal-align col-8 bg-white"
          role="dialog"
        >
          <div className="h3">
            New Post
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <hr />
          <img
            src="posts/7.jpg"
            alt="your post here"
            className="col-12"
            height={500}
            width={500}
          />
          <hr />
          <div className="row">
            <button className="btn btn-secondary text-white offset-10 mt-3">
              Select
            </button>
            <button className="btn btn-primary text-white ml-4 mt-3">
              Upload
            </button>
          </div>
        </div>
      );
    };
    const NewStoryModal = () => {
      return (
        <div
          id="newStory"
          className="modal modal-body modal-align col-8 bg-white"
          role="dialog"
        >
          <div className="h3">
            New Story
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
          </div>
          <hr />
          <img
            src="posts/7.jpg"
            alt="your post here"
            className="col-12"
            height={500}
            width={500}
          />
          <hr />
          <div className="row">
            <button className="btn btn-secondary text-white offset-10 mt-3">
              Select
            </button>
            <button className="btn btn-primary text-white ml-4 mt-3">
              Upload
            </button>
          </div>
        </div>
      );
    };
    const NavList = () => {
      return (
        <ul className="navbar list-unstyled">
          <input
            type="text"
            placeholder="Search"
            size={10}
            className={`${
              this.props.isSearchBoxVisible ? "visible" : "invisible"
            }`}
          />
          <li className="nav-item" onClick={() => this.props.toggleSearchBox()}>
            <a className="nav-link ">
              <img
                src={`icons/search.svg`}
                alt="search"
                title="search"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="/">
              <img src={`icons/home.svg`} alt="home" title="home" width={30} />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="/explore">
              <img
                src={`icons/explore.svg`}
                alt="explore"
                title="explore"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="/messages">
              <img
                src={`icons/messages.svg`}
                alt="messages"
                title="messages"
                width={30}
              />
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link "
              href="/account/:accountId"
              data-toggle="dropdown"
            >
              <img
                src={`icons/notification.png`}
                alt="notifications"
                width={30}
              />
            </a>
            <div className="dropdown-menu">
              <span>notifications</span>
            </div>
          </li>
          <li className="nav-item dropdown list-unstyled">
            <a
              className="nav-link dropdown-toggle caret-off"
              data-toggle="dropdown"
            >
              <img src={`icons/profile.svg`} alt="profile" width={30} />
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                href={`/${this.props.loggedInProfile.id}`}
              >
                Profile
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                type="button"
                data-toggle="modal"
                data-target="#newPost"
              >
                New Post
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                type="button"
                href="#newStory"
                data-toggle="modal"
                data-target="#newStory"
              >
                New Story
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" type="button" href={`${baseUrl}`}>
                Settings
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" type="button" href={`${baseUrl}`}>
                Logout
              </a>
            </div>
          </li>
        </ul>
      );
    };
    return (
      <>
        <nav className="navbar navbar-default navbar-fixed-top offset-lg-1 col-lg-10 shadow-sm mb-5 rounded">
          <a className="navbar-brand" href="/">
            <img src="icons/logo.png" alt="Instagram" height={40} />
          </a>
          <NavList />
        </nav>
        <NewPostModal />
        <NewStoryModal />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isSearchBoxVisible: state.utility.isSearchBoxVisible,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  toggleSearchBox: () => dispatch(toggleSearchBox()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
