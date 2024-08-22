// import React, { useRef, useState } from "react";
// import { IoPlay, IoPause } from "react-icons/io5";
// import "./css/audio.css"
// const CustomAudioPlayer = ({audioFile}) => {
//   const audioRef = useRef(null);
//   const [isPlaying, setIsPlaying] = useState(false);

//   const togglePlayPause = () => {
//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     } else {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   return (
//     <div className="custom-audio-player">
//       <audio ref={audioRef}>
//         <source
//           src={process.env.PUBLIC_URL + `./image/audio/${audioFile}.wav`}
//           type="audio/mpeg"
//         />
//       </audio>
//       <button onClick={togglePlayPause} className="play-pause-button">
//         {isPlaying ? <IoPause /> : <IoPlay />}
//       </button>
//       {/* Add other custom controls here */}
//     </div>
//   );
// };

// export default CustomAudioPlayer;



import React, { useRef, useState, useEffect } from "react";
import { IoPlay, IoPause } from "react-icons/io5";
import "./css/audio.css";

const CustomAudioPlayer = ({ audioFile }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsPlaying(true);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  // Effect to handle the case where the audio file changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); // Load the new audio file
      setIsPlaying(false);
    }
  }, [audioFile]);

  return (
    <div className="custom-audio-player">
      <audio
        ref={audioRef}
        src={`${process.env.PUBLIC_URL}/image/audio/${audioFile}`}
      ></audio>
      <button onClick={togglePlayPause} className="play-pause-button ">
        {isPlaying ? (
          <IoPause className="text-[#565656] block pl-[1px] text-base" />
        ) : (
          <IoPlay className="text-[#565656] block pl-[2px] text-base" />
        )}
      </button>
      {/* Add other custom controls here */}
    </div>
  );
};

export default CustomAudioPlayer;
