import React from "react";

const ProgressBar = ({
  bgcolor,
  progress,
  height,
  width,
  text,
  value,
  
}) => {
  const Parentdiv = {
    height: height,
    width: width,
    backgroundColor: "whitesmoke",
    borderRadius: 40,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: progress === 100 ? "#4BB543" : bgcolor,
    borderRadius: 40,
    textAlign: "right",
  };

  const progresstext = {
    padding: 4,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div className=" my-[20px]">
      <div className="flex justify-between mb-[16px] items-center ">
        <span className="text-[#212B36]  font-semibold font-worksans text-xs">
          {text}
        </span>
        <span
          className="font-worksans font-semibold text-base "
          style={{
            background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {value ? `${value}` : ""}
        </span>
      </div>
      <div style={{ ...Parentdiv,width:"197px" }}>
        <div style={Childdiv}>
          <span style={progresstext}></span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
