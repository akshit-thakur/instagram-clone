import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectStory } from "../../redux/actionCreators";
import Posts from "../post/postComponent";
import { ViewStory } from "../viewStoryComponent";
import { Footer } from "./footerComponent";
const StoryDisplay = (props) => {
  return props.stories.map((story) => (
    <div className="col-3 offset-1 mb-5">
      <img
        src={story.avatar}
        alt={story.name}
        className="justify-content-center rounded-circle"
        width={70}
        height={70}
      />
      <center>{story.name}</center>
    </div>
  ));
};
class Home extends Component {
  render() {
    const storiesToDisplay = this.props.stories.filter(
      (story) => story.profileId !== this.props.loggedInProfile.id
    );
    return (
      <>
        {/* Story Modal */}
        <div className="modal bg-white col-lg-10 offset-lg-1" id="storyModal">
          <div className="h2">
            Stories
            <button type="button" className="close" data-dismiss="modal">
              &times;
            </button>
            <img
              className="offset-10"
              src="icons/search.svg"
              alt="Search"
              width={30}
              height={30}
            />
            <img
              src="icons/uploadstory.svg"
              alt="add new story"
              width={30}
              height={30}
              className="ml-2"
            />
            <img
              src="icons/settings.svg"
              alt="Settings"
              width={30}
              height={30}
              className="ml-2"
            />
          </div>
          <div className="row flex-nowrap people-scroller mt-5">
            {storiesToDisplay.map((story) => (
              <div className="mx-5">
                <img
                  src={story.avatar}
                  width={50}
                  height={50}
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
          <ViewStory
            story={this.props.selectedStory}
            loggedInId={this.props.loggedInProfile.id}
          />
        </div>
        <div className="row offset-1">
          <div className="col-8">
            <Posts />
          </div>
          <div className="col-3">
            <div className="mb-5">
              <div className="card">
                <div className="card-header">
                  <h2>Stories</h2>
                </div>
                <div
                  className="card-body row story-box fixed"
                  data-toggle="modal"
                  data-target="#storyModal"
                >
                  <StoryDisplay stories={storiesToDisplay} />
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
