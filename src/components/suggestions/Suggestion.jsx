import React from "react";
import RandomColor from "random-color";

export default function Suggestion({ suggestion, searchGif }) {
  const style = {
    backgroundColor: RandomColor().hexString(),
  };
  const suggestionClickHandler = (e) => {
    searchGif(suggestion);
  };
  return (
    <div onClick={suggestionClickHandler} style={style} className="suggestion">
      <p>{suggestion}</p>
    </div>
  );
}
