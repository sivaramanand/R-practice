import React, { useState } from "react";

const DyanamicDropdown = () => {
  const items = {
    select: ["--select--"],
    coffee: ["coffee1", "coffee2", "coffee3"],
    tea: ["tea1", "tea2", "tea3"],
    milk: ["milk1", "milk2", "milk3"],
  };

  const [selectedCategory, setSelectedCategory] = useState("select");
  const [secondSelection, setSecondSelection] = useState(["--select--"]);
  const [finalSelected, setFinalSelected] = useState("");

  const handleCategoryChange = (e) => {
   setSelectedCategory(e.target.value);
    setSecondSelection(items[e.target.value]);
  };
  const setSecondaryCategory=(e)=>{
    console.log(e)
    setFinalSelected(e.target.value)

  }
  return (
    <div>
      <select
        onChange={(e) => handleCategoryChange(e)}
        value={selectedCategory}
      >
        {Object.keys(items).map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSecondaryCategory(e)}>
        {secondSelection.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <div>{selectedCategory}</div>
      <div>{finalSelected}</div>
    </div>
  );
};

export default DyanamicDropdown;
