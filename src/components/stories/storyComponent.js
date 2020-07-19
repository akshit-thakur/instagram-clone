/*All story clicks redirect here, the main story page*/
import React, { Component } from "react";
import STORIES from "../../shared/stories";
import { ViewStory } from "./viewStoryComponent";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: STORIES,
      selected: undefined,
    };
  }
  render() {
    return (
      <div className="col-lg-10 offset-lg-1">
        <div className="row">
          <div className="h2">Stories</div>
          <img
            className="offset-10"
            src="icons/camera.png"
            alt="add new story"
            width={30}
            height={30}
          />
          <img
            src="icons/settings.png"
            alt="Settings"
            width={30}
            height={30}
            className="mx-auto"
          />
        </div>
        <div className="row flex-nowrap people-scroller mt-5">
          {this.state.stories.map((story) => (
            <div className="mx-5">
              <img
                src={story.avatar}
                width={70}
                height={70}
                alt={story.name}
                className="rounded-circle story-circle"
                onClick={() => this.setState({ selected: story })}
              />
              <br />
              <center>
                <h5>{story.name}</h5>
              </center>
            </div>
          ))}
        </div>
        <hr />
        <ViewStory story={this.state.selected} />
      </div>
    );
  }
}

export default Story;
