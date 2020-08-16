import React from "react";
import { baseUrl } from "../shared/baseUrl";

const ShowViews = (props) => {
  if (props.loggedInId === props.story.profileId)
    return (
      <div className="col-1">
        <img src="icons/views.svg" alt="views" width={20} height={20} />
        {props.story.views.length}
      </div>
    );
  else return <div className="col-1"></div>;
};

export const ViewStory = (props) => {
  console.log(props);
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

          <ShowViews story={props.story} loggedInId={props.loggedInId} />
          <div className="col-2 offset-2">
            <img
              src="icons/comment.svg"
              width={20}
              height={20}
              alt="Comment"
              className="mx-1"
            />
            <img
              src="icons/messages.svg"
              width={20}
              height={20}
              alt="Share"
              className="mx-1"
            />
            <img
              src="icons/alert.svg"
              width={20}
              height={20}
              alt="Report"
              className="dropdown-toggle caret-off mx-1"
              data-toggle="dropdown"
            />
            <div className="dropdown-menu">
              <a className="dropdown-item" type="button" href={`${baseUrl}`}>
                Report
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" type="button" href={`${baseUrl}`}>
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
