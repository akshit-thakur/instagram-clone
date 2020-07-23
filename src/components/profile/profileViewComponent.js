/*selects the type of profile to display*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ChooseComponent, ChooseNav, ChooseTop } from "./utilityMethods";
import { setActiveTabProfile } from "../../redux/actionCreators";

const PublicOrPrivateSelector = (props) => {
  if (props.profile.isPublic === true)
    return (
      <ChooseComponent
        activeState={props.active}
        profile={props.profile}
        posts={props.posts}
        igtv={props.igtv}
        saved={props.saved}
        tagged={props.tagged}
      />
    );
  else
    return (
      <div className="my-5 mx-5 row col-lg-10 offset-lg-2 font-weight-bold ">
        This account is private. Send them a follow request to see what they're
        sharing
      </div>
    );
};
class ProfileView extends Component {
  render() {
    console.log(this.props);
    return (
      <>
        <div className="container">
          <ChooseTop
            follow={
              this.props.followers.filter(
                (profile) => profile.id === this.props.loggedInProfile.id
              )[0]
            }
            posts={this.props.posts.filter(
              (post) => post.profile.id === this.props.loggedInProfile.id
            )}
            profile={this.props.loggedInProfile}
          />
          <ChooseNav
            profile={this.props.loggedInProfile}
            switchNav={this.props.setActiveTabProfile}
            active={this.props.activeTabProfile}
          />
        </div>
        <PublicOrPrivateSelector
          active={this.props.activeTabProfile}
          profile={this.props.loggedInProfile}
          posts={this.props.posts.filter(
            (post) => post.profile.id === this.props.loggedInProfile.id
          )}
          igtv={this.props.igtv.filter(
            (post) => post.profile.id === this.props.loggedInProfile.id
          )}
          saved={this.props.saved.filter(
            (post) => post.profile.id === this.props.loggedInProfile.id
          )}
          tagged={this.props.tagged.filter(
            (post) => post.profile.id === this.props.loggedInProfile.id
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTabProfile: state.utility.activeTabProfile,
  followers: state.followers,
  loggedInProfile: state.utility.loggedInProfile,
  posts: state.posts,
  igtv: state.igtv,
  saved: state.saved,
  tagged: state.tagged,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTabProfile: (newTab) => dispatch(setActiveTabProfile(newTab)),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileView)
);
