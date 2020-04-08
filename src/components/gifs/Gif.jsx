import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default class Gif extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
    };
  }
  render() {
    return (
      <CopyToClipboard text={this.props.gif.media[0].tinygif.url}>
        <div className="gif">
          <div className="icons">Link copied to clipboard!</div>
          <img
            alt={this.props.gif.title}
            src={this.props.gif.media[0].tinygif.url}
          ></img>
        </div>
      </CopyToClipboard>
    );
  }
}
