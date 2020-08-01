import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import Explore from "./explore/exploreComponent";
import Home from "./home/homeComponent";
import Messages from "./messagesComponent";
import Navigation from "./navigationComponent";
import ProfileView from "./profile/profileViewComponent";

class MainComponent extends Component {
  render() {
    const ProfileWithId = ({ match }) => {
      return (
        <ProfileView
          activeProfile={
            this.props.accounts.filter(
              (acc) => acc.id === match.params.accountId
            )[0]
          }
        />
      );
    };
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/explore" component={Explore} />
          <Route path="/messages" component={Messages} />
          <Route path="/:accountId" component={ProfileWithId} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
});

export default withRouter(connect(mapStateToProps)(MainComponent));
