import React, { Component } from "react";
import { baseUrl } from "../../shared/baseUrl";
import {
  setNavigationModalTrigger,
  toggleSearchBox,
} from "../../redux/actionCreators";
import { connect } from "react-redux";
class Navigation extends Component {
  render() {
    const NewPostModal = () => {
      return <div></div>;
    };
    const NewStoryModal = () => {
      return <div></div>;
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
          <li
            className="nav-item"
            onClick={() => {
              this.props.toggleSearchBox();
            }}
          >
            <a className="nav-link " href={`${baseUrl}`}>
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

          <li className="nav-item ">
            <a className="nav-link " href="/you">
              <img src={`icons/profile.svg`} alt="profile" width={30} />
            </a>
          </li>
          <li className="nav-item dropdown list-unstyled">
            <a
              className="nav-link dropdown-toggle caret-off"
              data-toggle="dropdown"
              href={`${baseUrl}`}
            >
              <img src={`icons/dropdown.svg`} alt="dropdown" width={30} />
            </a>
            <div className="dropdown-menu">
              <a
                className="dropdown-item"
                type="button"
                href={`${baseUrl}`}
                onClick={() => this.props.setNewPostModal()}
              >
                New Post
              </a>
              <div className="dropdown-divider"></div>
              <a
                className="dropdown-item"
                type="button"
                href={`${baseUrl}`}
                onClick={() => this.props.setNewStoryModal()}
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
        <NewPostModal isSet={this.props.isNewPostModal} />
        <NewStoryModal isSet={this.props.isNewStoryModal} />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isNewStoryModal: state.utility.isNewStoryModal,
  isSearchBoxVisible: state.utility.isSearchBoxVisible,
});

const mapDispatchToProps = (dispatch) => ({
  setNavigationModalTrigger: () => dispatch(setNavigationModalTrigger()),
  toggleSearchBox: () => dispatch(toggleSearchBox()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
