/**
 * Home Page Story Component
 * Not to be confused with main story component
 */

import React, { Component } from "react";
import { STORIES } from "../../shared/stories";

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
      <center>
        <h6>{story.name}</h6>
      </center>
    </div>
  ));
};

class Stories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: STORIES,
    };
  }
  render() {
    return (
      <div className="base-2 mb-5">
        <div className="card">
          <div className="card-header">
            <a href="/stories" className="unstyled text-dark">
              <button className="btn">
                <h2>Stories</h2>
              </button>
            </a>
          </div>
          <div className="card-body row story-box fixed">
            <StoryDisplay stories={this.state.stories} />
          </div>
        </div>
      </div>
    );
  }
}
export default Stories;
