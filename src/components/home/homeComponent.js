import React, { Component } from "react";
import Footer from "../footer/footerComponent";
import Posts from "../post/postComponent";
import Stories from "../stories/storiesComponent";

class Home extends Component {
  render() {
    return (
      <div className="container row col-lg-8 offset-lg-2">
        <div className="col-8 base-1">
          <Posts />
        </div>
        <div className="col base-1t">
          <Stories />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
