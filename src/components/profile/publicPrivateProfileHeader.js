import React from "react";
import { baseUrl } from "../../shared/baseUrl";
import { InfoHeader } from "./utilityMethods";
export const PublicPrivateProfileHeader = (props) => {
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
          <button className="btn shadow text-dark text-weight-bold mx-5">
            <img src="icons/follow request.svg" alt="follow icon" width={30} />
            Follow
          </button>
          <img
            src="icons/messages.svg"
            alt="message"
            width={30}
            height={30}
            className="mt-2"
          />
          <img
            src="icons/alert.svg"
            alt="report"
            width={20}
            height={20}
            className="mt-2 ml-auto dropdown-toggle caret-off"
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
        <div className="scrollable mt-2">{props.profile.about}</div>
      </div>
      <InfoHeader
        follow={props.follow}
        profile={props.profile}
        posts={props.posts}
      />
    </div>
  );
};
