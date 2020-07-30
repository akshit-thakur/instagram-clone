import React from "react";
import { baseUrl } from "../../shared/baseUrl";

const DecideToDisplay = (props) => {
  if (props.loggedInId === props.story.profileId)
    return (
      <div className="col-1">
        <img src="icons/views.svg" alt="views" width={35} height={35} />
        {props.story.views}
      </div>
    );
  else return <div className="col-1"></div>;
};

export const ViewStory = (props) => {
  if (props.story)
    return (
      <div className="shadow-lg mt-5 col-lg-8 offset-lg-2 bg-white">
        <div className="row p-2">
          <div className="col-1">
            <img
              src={props.story.avatar}
              width={50}
              height={50}
              alt={props.story.name}
              className="rounded-circle"
            />
          </div>
          <div className="col-5 h6 ml-0">{props.story.name}</div>

          <DecideToDisplay story={props.story} loggedInId={props.loggedInId} />
          <div className="col-2 offset-2">
            <img src="icons/comment.svg" width={40} height={40} alt="Comment" />
            <img src="icons/messages.svg" width={40} height={40} alt="Share" />
            <img
              src="icons/alert.svg"
              width={30}
              height={30}
              alt="Report"
              className="dropdown-toggle caret-off"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu">
              <a class="dropdown-item" type="button" href={`${baseUrl}`}>
                Report
              </a>
              <div className="dropdown-divider"></div>
              <a class="dropdown-item" type="button" href={`${baseUrl}`}>
                Block
              </a>
            </div>
          </div>
          <h6>{props.story.time}</h6>
        </div>
        <img src={props.story.story} alt="post" className="story-img" />
      </div>
    );
  else return <div></div>;
};
