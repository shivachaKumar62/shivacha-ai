import React from "react";

const AudioPlayer = ({ src }) => {
  return (
    <div>
      <audio controls src={src}></audio>
    </div>
  );
};

export default AudioPlayer;
