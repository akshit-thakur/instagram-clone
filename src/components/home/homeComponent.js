import React, { Component } from "react";
import Footer from "../footer/footerComponent";
import Posts from "../post/postComponent";
import Stories from "./storiesComponent";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="row offset-1">
          <div className="col-8 base-1">
            <Posts />
          </div>
          <div className="col-3 base-1t">
            <Stories />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
