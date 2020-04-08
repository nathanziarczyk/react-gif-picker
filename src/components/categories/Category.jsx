import React from "react";

export default function Category({ category, searchByCategory }) {
  const divStyle = {
    backgroundImage: `url(${category.image})`,
  };
  const handleCategoryClick = () => {
    searchByCategory(category.path);
  };

  return (
    <div
      style={divStyle}
      onClick={handleCategoryClick}
      className="categories-grid-item"
    >
      <p>{category.name}</p>
    </div>
  );
}
