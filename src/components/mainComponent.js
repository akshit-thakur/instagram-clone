import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { ACCOUNT } from "../shared/account";
import Explore from "./explore/exploreComponent";
import Home from "./home/homeComponent";
import Messages from "./messages/messagesComponent";
import Navigation from "./navigation/navigationComponent";
import OwnProfile from "./profile/ownProfileComponent";
import Story from "./stories/storyComponent";
class MainComponent extends Component {
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
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/messages" component={Messages} />
          <Route path="/you" component={OwnProfile} />
          <Route path="/stories" component={Story} />
        </Switch>
      </div>
    );
  }
}
export default MainComponent;
