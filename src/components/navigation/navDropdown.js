import React from "react";

const NavDropdown = () => {
  return (
    <div className="dropdown-menu dropdown-toggle">
      <a class="dropdown-item" href="newPost.js">
        New Post
      </a>
      <a class="dropdown-item" href="newStory.js">
        New Story
      </a>
      <a class="dropdown-item" href="settings.js">
        Settings
      </a>
      <a className="dropdown-item" href="logout.js">
        Logout
      </a>
    </div>
  );
};
export default NavDropdown;
