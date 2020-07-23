import React from "react";
import { baseUrl } from "../../shared/baseUrl";
import FeedGallery from "./feedGalleryComponent";
import FeedTimeline from "./feedTimelineComponent";
import { OwnProfileHeader } from "./ownProfileHeader";

export const changeClasses = (className) => {
  document.querySelector("#posts").classList.remove("active");
  document.querySelector("#igtv").classList.remove("active");
  if (document.querySelector("#saved") !== null)
    //for own profile only, we have saved tab
    document.querySelector("#saved").classList.remove("active");
  document.querySelector("#tagged").classList.remove("active");
  document.querySelector(className).classList.add("active");
};

export const InfoHeader = (props) => {
  return (
    <>
      <div className="col-lg-2 ml-5 shadow">
        {props.follow.followers.length} followers <hr />
        {props.follow.following.length} following <hr />
        {props.posts.length} posts <hr />
        Story Highlights
      </div>
      <div className="col-lg-2 ml-5 shadow">
        <div className="row">{props.profile.extra.location}</div>
        <hr />
        <div className="row">{props.profile.extra.email}</div>
        <hr />
        <div className="row">{props.profile.extra.social}</div>
        <hr />
        <div className="row">{props.profile.extra.mentioned}</div>
      </div>
    </>
  );
};

export const ChooseTop = ({ follow, posts, profile }) => {
  //if(active profile id and clicked profile id are same)
  return <OwnProfileHeader follow={follow} posts={posts} profile={profile} />;
  //else if(clicked profile has active as follower)
  // return (
  //   <FollowingProfileHeader follow={follow} posts={posts} profile={profile} />
  // );
  // else if(profile.isPublic)
  // return (<PublicPrivateProfileHeader follow={follow} posts={posts} profile={profile}/>);
  //else
  // return <privateProfileHeader />;
};

export const ChooseNav = ({ profile, switchNav, active }) => {
  if (profile.isPublic === false) return <div></div>;
  console.log(active);
  return (
    <div className="mx-auto my-5">
      <ul className="nav nav-tabs ">
        <li className="nav-item mx-auto">
          <a
            id="posts"
            className="nav-link h4 text-dark active"
            href={`${baseUrl}/you`}
            onClick={() => {
              changeClasses("#posts");
              if (active !== "posts") switchNav("posts");
              else switchNav("postsExpanded");
            }}
          >
            <img
              src={
                active === "postsExpanded"
                  ? `icons/gallery,timeline.png`
                  : `icons/feed,gallery.png`
              }
              alt="Gallery Feed"
              width={30}
            />
            Posts
          </a>
        </li>
        <li className="nav-item mx-auto">
          <a
            id="igtv"
            className="nav-link h4 text-secondary"
            href={`${baseUrl}/igtv`}
            onClick={() => {
              changeClasses("#igtv");
              if (active !== "igtv") switchNav("igtv");
              else switchNav("igtvExpanded");
            }}
          >
            <img src="icons/igtv.png" alt="IGTV" width={30} />
            IGTV
          </a>
        </li>
        {
          //if(active profile id and clicked profile id are same)
        }
        <li className="nav-item mx-auto">
          <a
            id="saved"
            className="nav-link h4 text-secondary"
            href={`${baseUrl}/saved`}
            onClick={() => {
              changeClasses("#saved");
              if (active !== "saved") switchNav("saved");
              else switchNav("savedExpanded");
            }}
          >
            <img src="icons/save.png" alt="Saved" width={30} />
            Saved
          </a>
        </li>
        {/*endif*/}
        <li className="nav-item mx-auto">
          <a
            id="tagged"
            className="nav-link h4 text-secondary"
            href={`${baseUrl}/tagged`}
            onClick={() => {
              changeClasses("#tagged");
              if (active !== "tagged") switchNav("tagged");
              else switchNav("taggedExpanded");
            }}
          >
            <img src="icons/tagged.png" alt="Tagged" width={30} />
            Tagged
          </a>
        </li>
      </ul>
    </div>
  );
};

export const ChooseComponent = ({
  activeState,
  profile,
  posts,
  igtv,
  saved,
  tagged,
}) => {
  let postsToPass = posts;
  if (activeState === "igtv" || activeState === "igtvExpanded")
    postsToPass = igtv;
  else if (activeState === "saved" || activeState === "savedExpanded")
    postsToPass = saved;
  else if (activeState === "tagged" || activeState === "taggedExpanded")
    postsToPass = tagged;

  if (
    activeState === "posts" ||
    activeState === "igtv" ||
    activeState === "saved" ||
    activeState === "tagged"
  )
    return <FeedGallery posts={postsToPass} />;
  else
    return (
      <FeedTimeline
        posts={postsToPass.filter((post) => post.profile.id === profile.id)}
      />
    );
};
