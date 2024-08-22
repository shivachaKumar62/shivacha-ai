import React from "react";

const Slider = ({ value, onChange, min, max, step }) => {
  return (
    <div>
      <label>Speed</label>
      <input
        type="range"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  );
};

export default Slider;
