import React from "react";
import { v4 as uuid } from "uuid";

import Suggestion from "./Suggestion";

export default function Suggestions({ suggestions, searchGif }) {
  return (
    <div className="suggestions">
      {suggestions.map((suggestion) => {
        return (
          <Suggestion
            key={uuid()}
            suggestion={suggestion}
            searchGif={searchGif}
          />
        );
      })}
    </div>
  );
}
