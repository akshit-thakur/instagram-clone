import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ACCOUNT } from "../shared/account";
import Explore from "./explore/exploreComponent";
import Home from "./home/homeComponent";
import Messages from "./messages/messagesComponent";
import NavDropdown from "./navigation/navDropdown";
import Navigation from "./navigation/navigationComponent";
import OwnProfile from "./profile/ownProfileComponent";
import Search from "./search/searchComponent";
import IgTv from "./profile/igtvComponent";
import Saved from "./profile/savedComponent";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: ACCOUNT,
    };
  }
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/messages" component={Messages} />
          <Route path="/you" component={OwnProfile} />
          <Route path="/nav" component={NavDropdown} />
        </Switch>
      </div>
    );
  }
}
