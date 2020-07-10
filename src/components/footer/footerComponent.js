import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div id="footer" className="base-3">
        <div className="flex-row">
          <a className="unstyled text-dark" href="#footer">
            About
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Help
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Press
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            API
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Jobs
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Privacy
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Terms
          </a>
          <br />
          <a className="unstyled text-dark" href="#footer">
            Locations
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Top Accounts
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Hashtags
          </a>
          <a className="unstyled ml-1 text-dark" href="#footer">
            Language
          </a>
          <br />© 2020 Instaclone by Akshit
        </div>
      </div>
    );
  }
}
