import React from "react";

const TextInput = ({ value, onChange }) => {
  return (
    <div>
      <label>Speechify this Text</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows="2"
      />
    </div>
  );
};

export default TextInput;
