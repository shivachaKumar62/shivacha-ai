import React, { useRef, useState } from "react";
import { IoPlay, IoPause } from "react-icons/io5";
import "./css/audio.css"
const CustomAudioPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="custom-audio-player">
      <audio ref={audioRef}>
        <source
          src={process.env.PUBLIC_URL + "./image/audio/Rogger.wav"}
          type="audio/mpeg"
        />
      </audio>
      <button onClick={togglePlayPause} className="play-pause-button">
        {isPlaying ? <IoPause /> : <IoPlay />}
      </button>
      {/* Add other custom controls here */}
    </div>
  );
};

export default CustomAudioPlayer;
