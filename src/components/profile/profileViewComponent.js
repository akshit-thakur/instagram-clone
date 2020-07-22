/*selects the type of profile to display*/
import React, { Component } from "react";
import { FOLLOWERS } from "../../shared/followers";
import { POSTS } from "../../shared/posts";
import { ChooseComponent, ChooseNav, ChooseTop } from "./utilityMethods";

const PublicOrPrivateSelector = (props) => {
  if (props.profile.isPublic === true)
    return (
      <ChooseComponent
        activeState={props.active}
        profile={props.profile}
        posts={props.posts}
      />
    );
  else
    return (
      <div className="my-5 mx-5 row col-lg-10 offset-lg-2 font-weight-bold ">
        This account is private. Send them a follow request to see what they're
        sharing
      </div>
    );
};
class ProfileView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        //of person clicked
        id: "1",
        name: "ABC",
        avatar: `profile/1.jpg`,
        link: "localhost:3000/profile/1.html",
        isPublic: true,
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
    // this.state = {
    //   profile: {
    //     id: "2",
    //     name: "DEF",
    //     avatar: `profile/2.jpg`,
    //     link: "localhost:3000/profile/2.html",
    //     isPublic: false,
    //     about:
    //       "Phasellus lacus justo, sodales sed maximus et, condimentum et neque. Quisque sed purus vel quam ullamcorper luctus. Nunc vel augue sapien. Suspendisse dignissim ipsum quis nunc vestibulum venenatis. Mauris non diam et mauris fringilla hendrerit. Proin id porta lectus. Curabitur vel porta eros. Sed suscipit malesuada tellus, id fringilla libero porttitor id. Proin imperdiet orci eget felis commodo, eu fermentum nibh elementum. Aenean sagittis nibh a risus imperdiet interdum. Suspendisse eget leo et metus consequat tempor sed nec eros. ",
    //     followers: FOLLOWERS,
    //     extra: {
    //       location: "Atlantis",
    //       email: "dummy@business.com",
    //       social: "Facebook",
    //       mentioned: "other account",
    //     },
    //   },
    //   posts: POSTS,
    //   active: "posts", //tab
    // };
  }
  render() {
    const switchNav = (activeTab) => {
      this.setState({ active: activeTab });
    };
    return (
      <>
        <div className="container">
          <ChooseTop
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
          <ChooseNav
            profile={this.state.profile}
            switchNav={switchNav}
            active={this.state.active}
          />
        </div>
        <PublicOrPrivateSelector
          active={this.state.active}
          profile={this.state.profile}
          posts={this.state.posts.filter(
            (post) => post.profile.id === this.state.profile.id
          )}
        />
      </>
    );
  }
}
export default ProfileView;
