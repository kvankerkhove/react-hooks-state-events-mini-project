import React from "react";

function CategoryFilter({ selectedCategory, categories, handleSelectClick }) {
  const renderCategoryButton = categories.map((category) => {
    return <button onClick={handleSelectClick} key={category} className={selectedCategory === category ? 'selected' : null}>{category}</button>
  })
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderCategoryButton}
    </div>
  );
}

export default CategoryFilter;
