import React, { Component } from "react";
import { baseUrl } from "../../shared/baseUrl";
import { setNavigationModalTrigger } from "../../redux/actionCreators";
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
          <li className="nav-item">
            <a className="nav-link " href={`${baseUrl}`}>
              <img
                src={`icons/search.png`}
                alt="search"
                title="search"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="/">
              <img src={`icons/home.png`} alt="home" title="home" width={30} />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link" href="/explore">
              <img
                src={`icons/explore.png`}
                alt="explore"
                title="explore"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="/messages">
              <img
                src={`icons/messages.png`}
                alt="messages"
                title="messages"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link " href="/you">
              <img src={`icons/profile.png`} alt="profile" width={30} />
            </a>
          </li>
          <li className="nav-item dropdown list-unstyled">
            <a
              className="nav-link dropdown-toggle caret-off"
              data-toggle="dropdown"
              href={`${baseUrl}`}
            >
              <img src={`icons/navDropdown.png`} alt="dropdown" width={30} />
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
});

const mapDispatchToProps = (dispatch) => ({
  setNavigationModalTrigger: () => dispatch(setNavigationModalTrigger()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
