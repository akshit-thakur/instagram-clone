import React, { Component } from "react";

class Navigation extends Component {
  render() {
    const NavList = () => {
      return (
        <ul className="nav navbar-nav navbar-right flex-row">
          <li className="nav-item ">
            <a className="nav-link ml-2" href="/search">
              <img
                src={`icons/search.png`}
                alt="search"
                title="search"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link ml-2" href="/">
              <img src={`icons/home.png`} alt="home" title="home" width={30} />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link ml-2" href="/explore">
              <img
                src={`icons/explore.png`}
                alt="explore"
                title="explore"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link ml-2" href="/messages">
              <img
                src={`icons/messages.png`}
                alt="messages"
                title="messages"
                width={30}
              />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link ml-2" href="/you">
              <img src={`icons/profile.png`} alt="profile" width={30} />
            </a>
          </li>

          <li className="nav-item ">
            <a className="nav-link ml-2" href="/nav">
              <img src={`icons/navDropdown.png`} alt="dropdown" width={30} />
            </a>
          </li>
        </ul>
      );
    };
    return (
      <nav className="navbar navbar-default navbar-fixed-top col-lg-8 offset-lg-2 shadow-sm p-3 mb-5 rounded">
        <a className="navbar-brand" href="/">
          <img src="icons/logo.png" alt="Instagram" height={40} />
        </a>
        <NavList />
      </nav>
    );
  }
}

export default Navigation;
