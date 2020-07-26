import React, { Component } from "react";
import { connect } from "react-redux";
import { toggleInfoClicked, activateChat } from "../../redux/actionCreators";
import { baseUrl } from "../../shared/baseUrl";
import { withRouter } from "react-router-dom";
class Messages extends Component {
  render() {
    const LeftPanel = (props) => {
      return (
        <div className="card col-3">
          <input
            type="text"
            placeholder="Search messages"
            className="mx-5 mt-3"
          />
          <hr />
          {props.messages.map((message) => {
            let otherPerson = message.persons.filter(
              (person) => person.id !== props.profileId
            )[0];
            return (
              <div
                className="row mt-2 mb-3"
                onClick={() => this.props.activateChat(message)}
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
      if (this.props.isInfoClicked)
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
              {this.props.activeChat.chat.map((message) => {
                if (message.sender === this.props.loggedInProfile.id)
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
                src="icons/info.svg"
                className="mx-auto my-auto"
                alt="Info"
                width={50}
                height={50}
                onClick={() => this.props.toggleInfoClicked()}
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
              src="icons/edit.svg"
              className="m-1"
              alt="New Post"
              width={30}
            />
            <img
              src="icons/settings.svg"
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
            messages={this.props.messages.filter((message) =>
              message.persons.find(
                (person) => person.id === this.props.loggedInProfile.id
              )
            )}
            profileId={this.props.loggedInProfile.id}
          />
          <MainWindow
            profileId={this.props.loggedInProfile.id}
            active={this.props.activeChat}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  messages: state.messages,
  loggedInProfile: state.utility.loggedInProfile,
  activeChat: state.utility.activeChat,
  isInfoClicked: state.utility.isInfoClicked,
});

const mapDispatchToProps = (dispatch) => ({
  toggleInfoClicked: () => dispatch(toggleInfoClicked()),
  activateChat: (message) => dispatch(activateChat(message)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Messages)
);
