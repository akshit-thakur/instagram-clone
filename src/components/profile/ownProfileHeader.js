import React from "react";
import { InfoHeader } from "./utilityMethods";

export const OwnProfileHeader = (props) => {
  return (
    <div className="col-12 row">
      <div className="col-lg-2 mr-4">
        <img
          src={props.profile.avatar}
          width={200}
          height={200}
          alt={props.profile.name}
          className="rounded-circle"
        />
      </div>
      <div className="col-lg-4 ml-5 shadow">
        <div className="row p-3">
          <h3>{props.profile.name}</h3>
          <img
            src="icons/edit.png"
            alt="edit"
            width={30}
            height={30}
            className="ml-auto"
          />
          <img
            src="icons/camera.png"
            alt="post"
            width={30}
            height={30}
            className="ml-auto"
          />
          <img
            src="icons/settings.png"
            alt="settings"
            width={30}
            height={30}
            className="ml-auto"
          />
        </div>
        <div className="scrollable">{props.profile.about}</div>
      </div>
      <InfoHeader
        follow={props.follow}
        profile={props.profile}
        posts={props.posts}
      />
    </div>
  );
};
