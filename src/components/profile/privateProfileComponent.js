import React, { Component } from "react";
import FOLLOWERS from "../../shared/followers";
import POSTS from "../../shared/posts";

const Top = (props) => {
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
        <div className="row">
          <h3>{props.profile.name}</h3>
          <button className="btn shadow text-dark text-weight-bold">
            <img src="icons/follow request.png" alt="follow icon" /> Follow
          </button>
        </div>
        <div className="scrollable">{props.profile.about}</div>
      </div>
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
    </div>
  );
};
class PrivateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        id: "2",
        name: "DEF",
        avatar: `profile/2.jpg`,
        link: "localhost:3000/profile/2.html",
        about:
          "Phasellus lacus justo, sodales sed maximus et, condimentum et neque. Quisque sed purus vel quam ullamcorper luctus. Nunc vel augue sapien. Suspendisse dignissim ipsum quis nunc vestibulum venenatis. Mauris non diam et mauris fringilla hendrerit. Proin id porta lectus. Curabitur vel porta eros. Sed suscipit malesuada tellus, id fringilla libero porttitor id. Proin imperdiet orci eget felis commodo, eu fermentum nibh elementum. Aenean sagittis nibh a risus imperdiet interdum. Suspendisse eget leo et metus consequat tempor sed nec eros. ",
        followers: FOLLOWERS,
        extra: {
          location: "Atlantis",
          email: "dummy@business.com",
          social: "Facebook",
          mentioned: "other account",
        },
      },
      posts: POSTS,
      active: "posts", //tab
    };
  }
  render() {
    return (
      <div>
        <>
          <div className="container">
            <Top
              follow={
                this.state.profile.followers.filter(
                  (profile) => profile.id === this.state.profile.id
                )[0]
              }
              posts={this.state.posts.filter(
                (post) => post.profile.id === this.state.profile.id
              )}
              profile={this.state.profile}
            />
          </div>
          <div className="my-5 mx-5 row col-lg-10 offset-lg-2 font-weight-bold ">
            This account is private. Send them a follow request to see what
            they're sharing
          </div>
        </>
      </div>
    );
  }
}

export default PrivateProfile;
