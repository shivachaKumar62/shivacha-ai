// src/SelectBox.js
import React from "react";
import Select from "react-select";
import "./selectbox.css"
const customStyles = {
  control: (provided) => ({
    ...provided,
    width:"124px",
    borderRadius: "12px",
    borderColor: "#0096FF", // Tailwind blue-500
    padding: "5px",
    cursor: "pointer",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#ffffff", // Background color of the dropdown
    borderRadius: "12px",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3b82f6"
      : state.isFocused
      ? "#e0f2fe"
      : "#ffffff",
    color: state.isSelected ? "#ffffff" : "#212121",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "12px",
  }),
};

const SelectBox = ({ options }) => {
  const formattedOptions = options.map((option) => ({
    value: option,
    label: option,
  }));

  return (
    <Select
      options={formattedOptions}
      styles={customStyles}
      defaultValue={formattedOptions[0]}
    />
  );
};

export default SelectBox;
