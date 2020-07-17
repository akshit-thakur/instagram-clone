import React, { Component } from "react";
import baseUrl from "../../shared/baseUrl";
import FOLLOWERS from "../../shared/followers";
import POSTS from "../../shared/posts";
import { ChooseComponent, changeClasses } from "./utilityMethods";

// const Top = (props) => {
//   return (
//     <div className="col-12 row">
//       <div className="col-lg-2 mr-4">
//         <img
//           src={props.profile.avatar}
//           width={200}
//           height={200}
//           alt={props.profile.name}
//           className="rounded-circle"
//         />
//       </div>
//       <div className="col-lg-4 ml-5 shadow">
//         <div className="row p-3">
//           <h3>{props.profile.name}</h3>
//           <img
//             src="icons/edit.png"
//             alt="edit"
//             width={30}
//             height={30}
//             className="ml-auto"
//           />
//           <img
//             src="icons/camera.png"
//             alt="post"
//             width={30}
//             height={30}
//             className="ml-auto"
//           />
//           <img
//             src="icons/settings.png"
//             alt="settings"
//             width={30}
//             height={30}
//             className="ml-auto"
//           />
//         </div>
//         <div className="scrollable">{props.profile.about}</div>
//       </div>
//       <div className="col-lg-2 ml-5 shadow">
//         {props.follow.followers.length} followers <hr />
//         {props.follow.following.length} following <hr />
//         {props.posts.length} posts <hr />
//         Story Highlights
//       </div>
//       <div className="col-lg-2 ml-5 shadow">
//         <div className="row">{props.profile.extra.location}</div>
//         <hr />
//         <div className="row">{props.profile.extra.email}</div>
//         <hr />
//         <div className="row">{props.profile.extra.social}</div>
//         <hr />
//         <div className="row">{props.profile.extra.mentioned}</div>
//       </div>
//     </div>
//   );
// };
// class OwnProfile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       profile: {
//         id: "1",
//         name: "ABC",
//         avatar: `profile/1.jpg`,
//         link: "localhost:3000/profile/1.html",
//         about:
//           "Phasellus lacus justo, sodales sed maximus et, condimentum et neque. Quisque sed purus vel quam ullamcorper luctus. Nunc vel augue sapien. Suspendisse dignissim ipsum quis nunc vestibulum venenatis. Mauris non diam et mauris fringilla hendrerit. Proin id porta lectus. Curabitur vel porta eros. Sed suscipit malesuada tellus, id fringilla libero porttitor id. Proin imperdiet orci eget felis commodo, eu fermentum nibh elementum. Aenean sagittis nibh a risus imperdiet interdum. Suspendisse eget leo et metus consequat tempor sed nec eros. ",
//         followers: FOLLOWERS,
//         extra: {
//           location: "Atlantis",
//           email: "dummy@business.com",
//           social: "Facebook",
//           mentioned: "other account",
//         },
//       },
//       posts: POSTS,
//       active: "posts", //tab
//     };
//   }
//   render() {
//     return (
//       <div>
//         <>
//           <div className="container">
//             <Top
//               follow={
//                 this.state.profile.followers.filter(
//                   (profile) => profile.id === this.state.profile.id
//                 )[0]
//               }
//               posts={this.state.posts.filter(
//                 (post) => post.profile.id === this.state.profile.id
//               )}
//               profile={this.state.profile}
//             />
//             <div className="mx-auto my-5">
//               <ul className="nav nav-tabs ">
//                 <li className="nav-item mx-auto">
//                   <a
//                     id="posts"
//                     className="nav-link h4 text-dark active"
//                     href={`${baseUrl}/you`}
//                     onClick={() => {
//                       changeClasses("#posts");
//                       if (this.state.active !== "posts")
//                         this.setState({ active: "posts" });
//                       else this.setState({ active: "postsExpanded" });
//                     }}
//                   >
//                     <img
//                       src={
//                         this.state.active === "posts"
//                           ? `icons/feed,gallery.png`
//                           : `icons/gallery,timeline.png`
//                       }
//                       alt="Gallery Feed"
//                       width={30}
//                     />
//                     Posts
//                   </a>
//                 </li>
//                 <li className="nav-item mx-auto">
//                   <a
//                     id="igtv"
//                     className="nav-link h4 text-secondary"
//                     href={`${baseUrl}/you/igtv`}
//                     onClick={() => {
//                       changeClasses("#igtv");
//                       this.setState({ active: "igtv" });
//                     }}
//                   >
//                     <img src="icons/igtv.png" alt="IGTV" width={30} />
//                     IGTV
//                   </a>
//                 </li>
//                 <li className="nav-item mx-auto">
//                   <a
//                     id="saved"
//                     className="nav-link h4 text-secondary"
//                     href={`${baseUrl}/you/saved`}
//                     onClick={() => {
//                       changeClasses("#saved");
//                       this.setState({ active: "saved" });
//                     }}
//                   >
//                     <img src="icons/save.png" alt="Saved" width={30} />
//                     Saved
//                   </a>
//                 </li>
//                 <li className="nav-item mx-auto">
//                   <a
//                     id="tagged"
//                     className="nav-link h4 text-secondary"
//                     href={`${baseUrl}/you/tagged`}
//                     onClick={() => {
//                       changeClasses("#tagged");
//                       this.setState({ active: "tagged" });
//                     }}
//                   >
//                     <img src="icons/tagged.png" alt="Tagged" width={30} />
//                     Tagged
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <ChooseComponent
//             activeState={this.state.active}
//             profile={this.state.profile}
//             posts={this.state.posts}
//           />
//         </>
//       </div>
//     );
//   }
// }

// export default OwnProfile;

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
        <div className="row p-3">
          <h3>{props.profile.name}</h3>
          <button className="btn shadow text-dark text-weight-bold mx-5">
            <img src="icons/follow request.png" alt="follow icon" width={30} />
            Follow
          </button>
          <img
            src="icons/messages.png"
            alt="message"
            width={30}
            height={30}
            className="mt-2"
          />
          <img
            src="icons/alert.png"
            alt="report"
            width={20}
            height={20}
            className="mt-2 ml-auto dropdown-toggle caret-off"
            data-toggle="dropdown"
          />
          <div class="dropdown-menu">
            <a class="dropdown-item" type="button">
              Report
            </a>
            <div className="dropdown-divider"></div>
            <a class="dropdown-item" type="button">
              Block
            </a>
          </div>
        </div>
        <div className="scrollable mt-2">{props.profile.about}</div>
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
class OwnProfile extends Component {
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
            <div className="mx-auto my-5">
              <ul className="nav nav-tabs ">
                <li className="nav-item mx-auto">
                  <a
                    id="posts"
                    className="nav-link h4 text-dark active"
                    href={`${baseUrl}/you`}
                    onClick={() => {
                      changeClasses("#posts");
                      if (this.state.active !== "posts")
                        this.setState({ active: "posts" });
                      else this.setState({ active: "postsExpanded" });
                    }}
                  >
                    <img
                      src={
                        this.state.active === "posts"
                          ? `icons/feed,gallery.png`
                          : `icons/gallery,timeline.png`
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
                    href={`${baseUrl}/you/igtv`}
                    onClick={() => {
                      changeClasses("#igtv");
                      this.setState({ active: "igtv" });
                    }}
                  >
                    <img src="icons/igtv.png" alt="IGTV" width={30} />
                    IGTV
                  </a>
                </li>
                <li className="nav-item mx-auto">
                  <a
                    id="tagged"
                    className="nav-link h4 text-secondary"
                    href={`${baseUrl}/following/tagged`}
                    onClick={() => {
                      changeClasses("#tagged");
                      this.setState({ active: "tagged" });
                    }}
                  >
                    <img src="icons/tagged.png" alt="Tagged" width={30} />
                    Tagged
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ChooseComponent
            activeState={this.state.active}
            profile={this.state.profile}
            posts={this.state.posts}
          />
        </>
      </div>
    );
  }
}

export default OwnProfile;
