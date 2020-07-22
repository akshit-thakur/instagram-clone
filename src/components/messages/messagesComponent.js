import React, { Component } from "react";
import { MESSAGES } from "../../shared/messages";
import { baseUrl } from "../../shared/baseUrl";

class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: MESSAGES,
      profile: {
        id: "1",
        name: "ABC",
        avatar: `profile/1.jpg`,
        link: "localhost:3000/profile/1.html",
      },
      active: undefined,
      isInfoClicked: false,
    };
  }
  render() {
    const LeftPanel = (props) => {
      console.log(props.messages);
      return (
        <div className="card col-3">
          Search
          <hr />
          {props.messages.map((message) => {
            let otherPerson = message.persons.filter(
              (person) => person.id !== props.profileId
            )[0];
            console.log(otherPerson);
            return (
              <div
                className="row mt-2 mb-3"
                onClick={() =>
                  this.setState({ active: message, isInfoClicked: false })
                }
              >
                <div className="col-lg-3 col-1">
                  <img
                    src={otherPerson.avatar}
                    alt={otherPerson.name}
                    className="rounded-circle"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="col-lg-9 col text-dark font-weight-normal">
                  {otherPerson.name}
                </div>
              </div>
            );
          })}
        </div>
      );
    };

    const ChooseComponent = () => {
      if (this.state.isInfoClicked)
        return (
          <div id="chat-info">
            Mute
            <hr />
            Delete
            <hr />
            Report
            <hr />
            Block
            <hr />
          </div>
        );
      else
        return (
          <>
            <div className="col-12 row message-container">
              {this.state.active.chat.map((message) => {
                if (message.sender === this.state.profile.id)
                  return <div className="card offset-7">{message.text}</div>;
                else return <div className="card col-5">{message.text}</div>;
              })}
            </div>
            <hr />
            <b className="card">
              <i>Type your msg</i>
            </b>
          </>
        );
    };
    const MainWindow = (props) => {
      if (props.active !== undefined) {
        const otherPerson = props.active.persons.filter(
          (person) => person.id !== props.profileId
        )[0];
        return (
          <div className="card col">
            {console.log(props.active)}
            <div className="row">
              <div className="col-10">
                <h5 className="p-2">{otherPerson.name}</h5>
                <h6 className="p-2">Active Now</h6>
              </div>
              <img
                src="icons/info.png"
                className="mx-auto my-auto"
                alt="Info"
                width={50}
                height={50}
                onClick={() =>
                  this.setState({ isInfoClicked: !this.state.isInfoClicked })
                }
              />
            </div>
            <hr />
            <ChooseComponent />
          </div>
        );
      } else return <div className="card col"></div>;
    };

    return (
      <div className="col-lg-10 offset-1 ">
        <div className="row h3">
          Messages
          <div className="offset-10">
            <img
              src="icons/edit.png"
              className="m-1"
              alt="New Post"
              width={30}
            />
            <img
              src="icons/settings.png"
              alt="Settings"
              width={30}
              className="m-1 dropdown-toggle caret-off"
              data-toggle="dropdown"
            />
            <div class="dropdown-menu">
              <a
                class="dropdown-item"
                href={`${baseUrl}/messages`}
                type="button"
              >
                Message Settings
              </a>
            </div>
          </div>
        </div>
        <div className="row message-main-container">
          <LeftPanel
            messages={this.state.messages.filter((message) =>
              message.persons.find(
                (person) => person.id === this.state.profile.id
              )
            )}
            profileId={this.state.profile.id}
          />
          <MainWindow
            profileId={this.state.profile.id}
            active={this.state.active}
          />
        </div>
      </div>
    );
  }
}
export default Messages;
