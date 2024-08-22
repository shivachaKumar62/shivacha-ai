// import React, { useState, useEffect } from "react";
// import { IoPlayCircleOutline } from "react-icons/io5";
// import { FaRegCirclePause } from "react-icons/fa6";
// const AudioPlayer = ({
//   audioData,
//   audioId,
//   playingAudioId,
//   setPlayingAudioId,
// }) => {
//   const [audioUrl, setAudioUrl] = useState(null);
//   const [audioElement, setAudioElement] = useState(null);
  

//   useEffect(() => {
//     if (audioData) {
      
//       const audioBlob = new Blob(
//         [
//           new Uint8Array(
//             atob(audioData)
//               .split("")
//               .map((c) => c.charCodeAt(0))
//           ),
//         ],
//         { type: "audio/wav" }
//       );
//       const url = URL.createObjectURL(audioBlob);
      
//       setAudioUrl(url);
//       const audio = new Audio(url);
//       setAudioElement(audio);

//       return () => {
//         if (audio) {
//           audio.pause();
//           URL.revokeObjectURL(url);
//         }
//       };
//     }
//   }, [audioData]);

//   const handlePlayPause = () => {
    
//     if (playingAudioId === audioId) {
//       audioElement.pause();
//       setPlayingAudioId(null);
//     } else {
//       if (playingAudioId) {
//         const prevAudioElement = document.getElementById(playingAudioId);
//         if (prevAudioElement) {
//           prevAudioElement.pause();
//         }
//       }
//       audioElement.play();
//       setPlayingAudioId(audioId);
//     }
  
//   };

//   return (
//     <div
//       className="w-[30px] h-[30px] rounded-2xl flex justify-center items-center bg-[#E8E8E8] px-1 py-1 cursor-pointer"
//       onClick={handlePlayPause}
//     >
//       {playingAudioId === audioId ? (
//         <FaRegCirclePause className="text-xl" />
//       ) : (
//         <IoPlayCircleOutline className="text-xl" />
//       )}
//     </div>
//   );
// };

// export default AudioPlayer;


import React, { useState, useEffect } from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import { FaRegCirclePause } from "react-icons/fa6";

const AudioPlayer = ({
  audioData,
  audioId,
  playingAudioId,
  setPlayingAudioId,
}) => {
  const [audioElement, setAudioElement] = useState(null);

  useEffect(() => {
    if (audioData) {
      const audioBlob = new Blob(
        [
          new Uint8Array(
            atob(audioData)
              .split("")
              .map((c) => c.charCodeAt(0))
          ),
        ],
        { type: "audio/wav" }
      );
      const url = URL.createObjectURL(audioBlob);
      const audio = new Audio(url);
      setAudioElement(audio);

      const handleEnded = () => setPlayingAudioId(null);
      audio.addEventListener("ended", handleEnded);

      return () => {
        audio.pause();
        audio.removeEventListener("ended", handleEnded);
        URL.revokeObjectURL(url);
      };
    }
  }, [audioData, setPlayingAudioId]);

  const handlePlayPause = () => {
    if (playingAudioId === audioId) {
      audioElement.pause();
      setPlayingAudioId(null);
    } else {
      if (playingAudioId && audioElement) {
        const prevAudioElement = document.getElementById(
          `audio-${playingAudioId}`
        );
        if (prevAudioElement) {
          prevAudioElement.pause();
        }
      }
      audioElement.play();
      setPlayingAudioId(audioId);
    }
  };

  useEffect(() => {
    if (audioElement && playingAudioId !== audioId) {
      audioElement.pause();
    }
  }, [playingAudioId, audioElement, audioId]);

  return (
    <div
      className="w-[30px] h-[30px] rounded-2xl flex justify-center items-center bg-[#E8E8E8] px-1 py-1 cursor-pointer"
      onClick={handlePlayPause}
    >
      {playingAudioId === audioId ? (
        <FaRegCirclePause className="text-xl" />
      ) : (
        <IoPlayCircleOutline className="text-xl" />
      )}
    </div>
  );
};

export default AudioPlayer;
