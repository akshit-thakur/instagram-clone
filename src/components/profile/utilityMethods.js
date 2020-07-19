import React from "react";
import FeedGallery from "./feedGalleryComponent";
import FeedTimeline from "./feedTimelineComponent";
import IgTv from "./igtvComponent";
import Saved from "./savedComponent";
import Tagged from "./taggedComponent";
import { OwnProfile } from "./ownProfileHeader";

export const ChooseTop = ({ follow, post, profile }) => {
  //if(active profile id and clicked profile id are same)
  return <OwnProfile follow={follow} post={post} profile={profile} />;
  //else if(clicked profile has active as follower)
  // return <followingProfileHeader />;
  //else if(profile.isPublic)
  // return <publicProfileHeader />;
  //else
  // return <privateProfileHeader />;
};

export const ChooseComponent = ({ activeState, profile, posts }) => {
  if (activeState === "posts")
    return <FeedGallery posts={posts} profile={profile} />;
  else if (activeState === "postsExpanded")
    return <FeedTimeline posts={posts} profile={profile} />;
  else if (activeState === "igtv") return <IgTv />;
  else if (activeState === "saved") return <Saved />;
  else return <Tagged />;
};

export const changeClasses = (className) => {
  document.querySelector("#posts").classList.remove("active");
  document.querySelector("#igtv").classList.remove("active");
  if (document.querySelector("#saved") !== null)
    //for own profile only, we have saved tab
    document.querySelector("#saved").classList.remove("active");
  document.querySelector("#tagged").classList.remove("active");
  document.querySelector(className).classList.add("active");
};
