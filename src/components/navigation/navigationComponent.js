import React, { Component } from "react";

const NavList = (props) => {
  return props.list.map((item) => (
    <li className="nav-item ">
      <a className="nav-link ml-2" href={`${item}Component.js`}>
        <img src={`icons/${item}.png`} alt={item} title={item} width={30} />
      </a>
    </li>
  ));
};

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navItems: [
        "search",
        "home",
        "explore",
        "messages",
        "notifications",
        "profile",
        "navDropdown",
      ],
    };
  }
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top col-lg-8 offset-lg-2 shadow-sm p-3 mb-5 rounded">
        <a className="navbar-brand" href="index.js">
          <img src="icons/logo.png" alt="Instagram" height={40} />
        </a>

        <ul className="nav navbar-nav navbar-right flex-row">
          <NavList list={this.state.navItems} toggle={this.state.toggle} />
        </ul>
      </nav>
    );
  }
}

export default Navigation;
