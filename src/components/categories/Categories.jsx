import React from "react";
import { v4 as uuid } from "uuid";

import Category from "./Category";

export default function Categories({ categories, searchByCategory }) {
  return (
    <>
      <div className="categories-grid">
        {categories.map((category) => {
          return (
            <Category
              key={uuid()}
              category={category}
              searchByCategory={searchByCategory}
            />
          );
        })}
      </div>
    </>
  );
}
