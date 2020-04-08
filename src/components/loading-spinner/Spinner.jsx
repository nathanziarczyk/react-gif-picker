import React from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";

export default function Spinner(props) {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: light-blue;
  `;
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={50} color={"#123abc"} />
    </div>
  );
}
