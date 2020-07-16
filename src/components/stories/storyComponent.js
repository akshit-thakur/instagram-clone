/*All story clicks redirect here, the main story page*/
import React, { Component } from "react";
import STORIES from "../../shared/stories";

class Story extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: STORIES.stories,
    };
  }
  render() {
    return <></>;
  }
}

export default Story;
