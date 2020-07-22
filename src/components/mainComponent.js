import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Explore from "./explore/exploreComponent";
import Home from "./home/homeComponent";
import Messages from "./messages/messagesComponent";
import Navigation from "./navigation/navigationComponent";
import ProfileView from "./profile/profileViewComponent";
import Story from "./stories/storyComponent";
class MainComponent extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/messages" component={Messages} />
          <Route path="/you" component={ProfileView} />
          <Route path="/stories" component={Story} />
        </Switch>
      </div>
    );
  }
}
export default MainComponent;
