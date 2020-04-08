import React from "react";
import Masonry from "react-masonry-css";
import { v4 as uuid } from "uuid";

import Gif from "./Gif";
export default class Gifs extends React.Component {
  componentDidMount = () => {
    const gifs = document.querySelectorAll(".gif");
    gifs.forEach((gif) => {
      gif.addEventListener("click", (e) => {
        const icons = e.target.previousSibling;
        if (icons === null) return false;
        icons.classList.add("fadeIn");
        setTimeout(() => {
          icons.classList.add("fadeOut");
          icons.classList.remove("fadeIn");
          icons.classList.remove("fadeOut");
        }, 1500);
      });
    });
  };

  render() {
    const breakpointColumnsObj = {
      default: 2,
      500: 1,
    };

    return (
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {this.props.gifs.map((gif) => {
          return <Gif key={uuid()} gif={gif} />;
        })}
      </Masonry>
    );
  }
}
