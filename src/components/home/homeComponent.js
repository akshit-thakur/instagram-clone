import React from "react";
import { Footer } from "../footer/footerComponent";
import Posts from "../post/postComponent";
import Stories from "./storiesComponent";

export const Home = () => {
  return (
    <div>
      <div className="row offset-1">
        <div className="col-8">
          <Posts />
        </div>
        <div className="col-3">
          <Stories />
          <Footer />
        </div>
      </div>
    </div>
  );
};
