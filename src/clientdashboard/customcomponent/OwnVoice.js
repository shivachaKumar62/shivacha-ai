import React, { useState, useRef } from "react";
import { IoIosPlay } from "react-icons/io";
import { FaRegCirclePause } from "react-icons/fa6";
const OwnVoice = ({ audioSrc, audioId }) => {
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const audioRef = useRef(new Audio(audioSrc));

  const handlePlayPause = () => {
    if (playingAudioId === audioId) {
      audioRef.current.pause();
      setPlayingAudioId(null);
    } else {
      if (playingAudioId !== null) {
        document.getElementById(playingAudioId).pause();
      }
      audioRef.current.play();
      setPlayingAudioId(audioId);
    }
  };

  const handleEnded = () => {
    setPlayingAudioId(null);
  };

  return (
    <div
      className="w-[116px] h-[48px] gap-3 rounded-[6px] text-[#565656] flex justify-center items-center bg-[#E8E8E8] px-1 py-1 cursor-pointer"
      onClick={handlePlayPause}
    >
      <span>
        {playingAudioId === audioId ? (
          <FaRegCirclePause className="text-xl" />
        ) : (
          <IoIosPlay className="text-xl" />
        )}
      </span>
      <span>Listen</span>
      <audio
        ref={audioRef}
        id={audioId}
        src={audioSrc}
        onEnded={handleEnded}
        preload="auto"
      />
    </div>
  );
};

export default OwnVoice;
