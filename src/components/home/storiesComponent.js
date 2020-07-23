/**
 * Home Page Story Component
 * Not to be confused with main story component
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

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
  render() {
    return (
      <div className="mb-5">
        <div className="card">
          <div className="card-header">
            <a href="/stories" className="unstyled text-dark">
              <button className="btn">
                <h2>Stories</h2>
              </button>
            </a>
          </div>
          <div className="card-body row story-box fixed">
            <StoryDisplay stories={this.props.stories} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.stories,
  };
};

export default withRouter(connect(mapStateToProps)(Stories));
