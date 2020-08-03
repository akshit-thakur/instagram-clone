/*selects the type of profile to display*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  setActiveTabProfile,
  selectStory,
  addFollowRequest,
  deleteFollowRequest,
  deleteFollower,
} from "../../redux/actionCreators";
import { ChooseComponent, ChooseNav, ChooseTop } from "./utilityMethods";

const PublicOrPrivateSelector = (props) => {
  if (
    props.activeProfile.isPublic ||
    props.activeProfile.followers.include(props.profile.id)
  )
    return (
      <ChooseComponent
        activeState={props.active}
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
    return (
      <>
        <div className="container">
          <ChooseTop
            profile={this.props.loggedInProfile}
            activeProfile={this.props.activeProfile}
            posts={this.props.posts.filter(
              (post) => post.profile.id === this.props.activeProfile.id
            )}
            stories={this.props.stories.filter(
              (profile) => profile.profileId === this.props.activeProfile.id
            )}
            selectStory={this.props.selectStory}
            selectedStory={this.props.selectedStory}
            addFollowRequest={this.props.addFollowRequest}
            deleteFollowRequest={this.props.deleteFollowRequest}
            deleteFollower={this.props.deleteFollower}
          />
          <ChooseNav
            profile={this.props.loggedInProfile}
            activeProfile={this.props.activeProfile}
            switchNav={this.props.setActiveTabProfile}
            active={this.props.activeTabProfile}
          />
        </div>
        <PublicOrPrivateSelector
          active={this.props.activeTabProfile}
          profile={this.props.loggedInProfile}
          activeProfile={this.props.activeProfile}
          posts={this.props.posts.filter(
            (post) =>
              post.profile.id === this.props.activeProfile.id &&
              post.category === "post"
          )}
          igtv={this.props.posts.filter(
            (post) =>
              post.profile.id === this.props.activeProfile.id &&
              post.category === "igtv"
          )}
          saved={this.props.posts.filter((post) =>
            post.savedBy.includes(this.props.activeProfile.id)
          )}
          tagged={this.props.posts.filter((post) =>
            post.tagged.includes(this.props.activeProfile.id)
          )}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  activeTabProfile: state.utility.activeTabProfile,
  loggedInProfile: state.utility.loggedInProfile,
  selectedStory: state.utility.selectedStory,
  posts: state.posts,
  stories: state.stories,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveTabProfile: (newTab) => dispatch(setActiveTabProfile(newTab)),
  selectStory: (story) => dispatch(selectStory(story)),
  addFollowRequest: (info) => dispatch(addFollowRequest(info)),
  deleteFollowRequest: (info) => dispatch(deleteFollowRequest(info)),
  deleteFollower: (info) => dispatch(deleteFollower(info)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ProfileView)
);
