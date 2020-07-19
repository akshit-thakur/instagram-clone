import React from "react";

export const ViewStory = (props) => {
  if (props.story)
    return (
      <div className="shadow-lg mt-5 col-12 ">
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
          {/*TODO: if active profile is same as story poster name*/}
          <div className="col-1">
            <img src="icons/views.png" alt="views" width={35} height={35} />
            {props.story.views}
          </div>
          <div className="col-2 offset-2">
            <img src="icons/comment.png" width={40} height={40} alt="Comment" />
            <img src="icons/messages.png" width={40} height={40} alt="Share" />
            <img src="icons/alert.png" width={30} height={30} alt="Report" />
          </div>
          <h6>{props.story.time}</h6>
        </div>
        <img
          src={props.story.story}
          alt="post"
          className="offset-3 story-img"
        />
      </div>
    );
  else return <div></div>;
};
