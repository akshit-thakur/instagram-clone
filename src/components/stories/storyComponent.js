/*All story clicks redirect here, the main story page*/
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { ViewStory } from "./viewStoryComponent";
import { selectStory } from "../../redux/actionCreators";
class Story extends Component {
  render() {
    return (
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="h2">Stories</div>
          <img
            className="offset-10"
            src="icons/camera.svg"
            alt="add new story"
            width={30}
            height={30}
          />
          <img
            src="icons/settings.svg"
            alt="Settings"
            width={30}
            height={30}
            className="mx-auto"
          />
        </div>
        <div className="row flex-nowrap people-scroller mt-5">
          {this.props.stories
            .filter(
              (story) => story.profileId !== this.props.loggedInProfile.id
            )
            .map((story) => (
              <div className="mx-5">
                <img
                  src={story.avatar}
                  width={70}
                  height={70}
                  alt={story.name}
                  className="rounded-circle story-circle"
                  onClick={() => this.props.selectStory(story)}
                />
                <br />
                <center>
                  <h5>{story.name}</h5>
                </center>
              </div>
            ))}
        </div>
        <hr />
        <ViewStory
          story={this.props.selectedStory}
          loggedInId={this.props.loggedInProfile.id}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  stories: state.stories,
  selectedStory: state.utility.selectedStory,
  loggedInProfile: state.utility.loggedInProfile,
});

const mapDispatchToProps = (dispatch) => ({
  selectStory: (story) => dispatch(selectStory(story)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Story));
