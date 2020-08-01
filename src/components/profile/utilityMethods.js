import React from "react";
import { baseUrl } from "../../shared/baseUrl";
import FeedGallery from "./feedGalleryComponent";
import FeedTimeline from "./feedTimelineComponent";
import { ViewStory } from "../viewStoryComponent";

//CSS to show active tab in profile navigation
const changeClasses = (className) => {
  document.querySelector("#posts").classList.remove("active");
  document.querySelector("#igtv").classList.remove("active");
  if (document.querySelector("#saved") !== null)
    //for own profile only, we have saved tab
    document.querySelector("#saved").classList.remove("active");
  document.querySelector("#tagged").classList.remove("active");
  document.querySelector(className).classList.add("active");
};

//extra info(last 2 boxes of top)
const DisplayInfo = ({ profile, posts }) => {
  return (
    <>
      <div className="col-lg-2 ml-5 shadow">
        {profile.followers.length} followers <hr />
        {profile.following.length} following <hr />
        {posts.length} posts <hr />
        Story Highlights
      </div>
      <div className="col-lg-2 ml-5 shadow">
        <div className="row">{profile.extra.location}</div>
        <hr />
        <div className="row">{profile.extra.email}</div>
        <hr />
        <div className="row">{profile.extra.social}</div>
        <hr />
        <div className="row">{profile.extra.mentioned}</div>
      </div>
    </>
  );
};

//for loggedInProfile
const OwnProfileHeader = ({ profile }) => {
  return (
    <div className="col-lg-4 ml-5 shadow">
      <div className="row p-3">
        <h3>{profile.name}</h3>
        <img
          src="icons/edit.svg"
          alt="edit"
          width={30}
          height={30}
          className="ml-auto"
        />
        <img
          src="icons/camera.svg"
          alt="post"
          width={30}
          height={30}
          className="ml-auto"
        />
        <img
          src="icons/settings.svg"
          alt="settings"
          width={30}
          height={30}
          className="ml-auto"
        />
      </div>
      <div className="scrollable">{profile.about}</div>
    </div>
  );
};

//for people in account.following array
const FollowingProfileHeader = ({ profile }) => {
  return (
    <div className="col-lg-4 ml-5 shadow">
      <div className="row p-3">
        <h3>{profile.name}</h3>
        <div className="dropdown ml-auto">
          <button
            className="btn shadow text-dark text-weight-bold ml-auto dropdown-toggle caret-off"
            data-toggle="dropdown"
            data-target="followingDropdown"
          >
            <img src="icons/follow.svg" alt="follow icon" width={25} />
            Following
          </button>
          <div class="dropdown-menu" id="followingDropdown">
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Add to close friends
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Mute
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Take a break
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Unfollow
            </a>
          </div>
        </div>
        <img
          src="icons/messages.svg"
          alt="message"
          width={30}
          height={30}
          className="mt-2 ml-auto"
        />
        <div className="dropdown ml-auto">
          <img
            src="icons/alert.svg"
            alt="report"
            width={20}
            height={20}
            className="mt-2 ml-auto dropdown-toggle caret-off"
            data-toggle="dropdown"
            data-target="reportDropdown"
          />
          <div class="dropdown-menu" id="reportDropdown">
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Report
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item" type="button" href={`${baseUrl}`}>
              Block
            </a>
          </div>
        </div>
      </div>
      <div className="scrollable mt-2">{profile.about}</div>
    </div>
  );
};

//for non private profiles
const DisplayMessageIcon = ({ isPublic }) => {
  if (isPublic)
    return (
      <img
        src="icons/messages.svg"
        alt="message"
        width={30}
        height={30}
        className="mt-2"
      />
    );
  else return <></>;
};

//if not following
const PublicPrivateProfileHeader = ({ profile }) => {
  return (
    <div className="col-lg-4 ml-5 shadow">
      <div className="row p-3">
        <h3>{profile.name}</h3>

        <button className="btn shadow text-dark text-weight-bold mx-5">
          <img src="icons/follow.svg" alt="follow icon" width={30} />
          Follow
        </button>
        <DisplayMessageIcon isPublic={profile.isPublic} />
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
      <div className="scrollable mt-2">{profile.about}</div>
    </div>
  );
};

//the name,following/report,about section
const DisplayAbout = ({ active, profile }) => {
  if (active.id === profile.id) return <OwnProfileHeader profile={active} />;
  else if (profile.following.includes(active.id))
    return <FollowingProfileHeader profile={active} />;
  else return <PublicPrivateProfileHeader profile={active} />;
};

//displayed only on own profile
const DisplaySaved = (props) => {
  if (props.show)
    return (
      <li className="nav-item mx-auto">
        <a
          id="saved"
          className="nav-link h4 text-secondary"
          href={`${baseUrl}/account/:accountId`}
          onClick={() => {
            changeClasses("#saved");
            if (props.active !== "saved") props.switchNav("saved");
            else props.switchNav("savedExpanded");
          }}
        >
          <img src="icons/save.svg" alt="Saved" width={30} />
          Saved
        </a>
      </li>
    );
  else return <></>;
};

export const ChooseTop = ({
  posts,
  profile,
  activeProfile,
  stories,
  selectStory,
  selectedStory,
}) => {
  return (
    <>
      <div className="modal bg-white col-lg-10 offset-lg-1" id="storyModal">
        <div className="h2">
          Stories
          <button type="button" className="close" data-dismiss="modal">
            &times;
          </button>
        </div>
        <div className="row flex-nowrap people-scroller mt-5">
          {stories.map((story) => (
            <div className="mx-5">
              <img
                src={story.avatar}
                width={50}
                height={50}
                alt={story.name}
                className="rounded-circle story-circle"
                onClick={() => selectStory(story)}
              />
              <br />
              <center>
                <h5>{story.name}</h5>
              </center>
            </div>
          ))}
        </div>
        <hr />
        <ViewStory story={selectedStory} loggedInId={profile.id} />
      </div>
      <div className="col-12 row">
        <div
          className="col-lg-2 mr-4"
          data-toggle="modal"
          data-target="#storyModal"
        >
          <img
            src={activeProfile.avatar}
            width={200}
            height={200}
            alt={activeProfile.name}
            className={`${
              stories === undefined ? "" : "story-circle"
            } rounded-circle`}
          />
        </div>
        <DisplayAbout profile={profile} active={activeProfile} />
        <DisplayInfo profile={activeProfile} posts={posts} />
      </div>
    </>
  );
};

export const ChooseNav = ({ profile, activeProfile, switchNav, active }) => {
  if (profile.isPublic === false) return <div></div>;
  return (
    <div className="mx-auto my-5">
      <ul className="nav nav-tabs ">
        <li className="nav-item mx-auto">
          <a
            id="posts"
            className="nav-link h4 text-dark active"
            onClick={() => {
              changeClasses("#posts");
              if (active !== "posts") switchNav("posts");
              else switchNav("postsExpanded");
            }}
          >
            <img
              src={
                active === "postsExpanded"
                  ? `icons/feedtimeline.svg`
                  : `icons/feedgrid.svg`
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
            onClick={() => {
              changeClasses("#igtv");
              if (active !== "igtv") switchNav("igtv");
              else switchNav("igtvExpanded");
            }}
          >
            <img src="icons/igtv.svg" alt="IGTV" width={30} />
            IGTV
          </a>
        </li>
        <DisplaySaved
          switchNav={switchNav}
          active={active}
          show={activeProfile.id === profile.id}
        />
        <li className="nav-item mx-auto">
          <a
            id="tagged"
            className="nav-link h4 text-secondary"
            onClick={() => {
              changeClasses("#tagged");
              if (active !== "tagged") switchNav("tagged");
              else switchNav("taggedExpanded");
            }}
          >
            <img src="icons/tagged.svg" alt="Tagged" width={30} />
            Tagged
          </a>
        </li>
      </ul>
    </div>
  );
};

export const ChooseComponent = ({
  activeState,
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
    return <FeedGallery posts={postsToPass} activeState={activeState} />;
  else return <FeedTimeline posts={postsToPass} activeState={activeState} />;
};
