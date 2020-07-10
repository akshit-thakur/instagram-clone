import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div class="row">
        <img src="icons/like.png" alt="likes" height={20} width={20} />
        {this.props.stats.likes}
        <img src="icons/comment.png" alt="likes" height={20} width={20} />
        {this.props.stats.comments}
        <img src="icons/alert.png" alt="report here" height={30} width={30} />
        <img src="icons/save.png" alt="report here" width={50} />
      </div>
    );
  }
}
