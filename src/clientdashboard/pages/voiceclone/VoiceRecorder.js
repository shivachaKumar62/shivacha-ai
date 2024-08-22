



// import React, { useState, useEffect } from "react";
// import { Modal, Button } from "antd";
// import { ReactMic } from "react-mic";
// import { CiStop1 } from "react-icons/ci";
// import { MdRefresh } from "react-icons/md";
// import "./voiceclone.css";
// import OwnVoice from "../../customcomponent/OwnVoice";
// const VoiceRecorder = ({
//   handleSubmit,
//   handleStop,
//   handleCancel,
//   setAudioPart,
// }) => {
//   const [isRecording, setIsRecording] = useState(false);
//   const [audioBlob, setAudioBlob] = useState(null);
//   const [timer, setTimer] = useState(0);
//   const [listenAudio, setListenAudio] = useState(null);
//   const intervalRef = React.useRef(null);
//   const [stopClone, setStopClone] = useState(false);

//   useEffect(() => {
//     if (isRecording) {
//       intervalRef.current = setInterval(() => {
//         setTimer((prevTimer) => prevTimer + 1);
//       }, 1000);
//     } else {
//       clearInterval(intervalRef.current);
//     }

//     return () => clearInterval(intervalRef.current);
//   }, [isRecording]);

//   const startRecording = () => {
//     setIsRecording(true);

//     setTimer(0);
//   };

//   const stopRecording = () => {
//     setIsRecording(false);
//     setStopClone(true);
//   };
//   const handleRetake = () => {
//     setIsRecording(false);
//     setStopClone(false);
//   };

//   const onStop = (recordedBlob) => {
//     console.log(recordedBlob, "recordedBlob");
//     setAudioPart(recordedBlob);
//     setAudioBlob(recordedBlob);
//     handleStop(URL.createObjectURL(recordedBlob.blob));
//     setListenAudio(URL.createObjectURL(recordedBlob.blob));
//   };

//   return (
//     <>
//       <ReactMic record={isRecording} onStop={onStop} mimeType="audio/wav" />
//       {!stopClone && (
//         <div className="flex justify-between w-full items-center">
//           {!isRecording ? (
//             <button
//               type="button"
//               onClick={startRecording}
//               className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
//             >
//               Start Recording
//             </button>
//           ) : (
//             <div className="flex justify-between items-center w-full px-3">
//               <div className="flex gap-2 items-center">
//                 <div className="bg-[#E8E8E8] w-[14px] h-[14px] rounded-full "></div>
//                 <p className="text-sm font-worksans font-semibold text-[#565656]">
//                   {`${Math.floor(timer / 60)
//                     .toString()
//                     .padStart(2, "0")}:${(timer % 60)
//                     .toString()
//                     .padStart(2, "0")}`}
//                 </p>
//               </div>
//               <img
//                 src={process.env.PUBLIC_URL + "/image/clientimage/sound.gif"}
//                 alt="gif"
//                 className="w-[155px] h-[64px]"
//               />

//               <div className="flex gap-3">
//                 <button
//                   className="flex gap-2 text-[#565656] items-center font-worksans font-medium text-base bg-white hover:bg-[#E8E8E8] border px-3 h-[44px] rounded-lg"
//                   onClick={handleRetake}
//                 >
//                   <span>
//                     <MdRefresh />
//                   </span>
//                   Retake
//                 </button>
//                 <button
//                   className="bg-[#FF4439] hover:bg-[#E7362C] rounded-lg text-white font-worksans font-medium text-base px-3 h-[42px] flex gap-2 items-center"
//                   onClick={stopRecording}
//                 >
//                   <span className="bg-white block text-[12px]">
//                     <CiStop1 />
//                   </span>
//                   Stop
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//       {stopClone && (
//         <div className="flex justify-between w-full items-center">
//           <button
//             className="flex gap-2 text-[#565656] items-center font-worksans font-medium text-base bg-white hover:bg-[#E8E8E8] border px-3 h-[44px] rounded-lg"
//             onClick={handleRetake}
//           >
//             <span>
//               <MdRefresh />
//             </span>
//             Retake
//           </button>
//           <OwnVoice audioSrc={listenAudio} />
//           <button
//             type="submit"
//             onClick={handleSubmit}
//             className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
//           >
//             Continue
//           </button>
//         </div>
//       )}
//     </>
//   );
// };

// export default VoiceRecorder;






import React, { useState, useEffect } from "react";
import { ReactMic } from "react-mic";
import { CiStop1 } from "react-icons/ci";
import { MdRefresh } from "react-icons/md";
import "./voiceclone.css";
import OwnVoice from "../../customcomponent/OwnVoice";
const VoiceRecorder = ({
  handleSubmit,
  handleStop,
  handleCancel,
  setAudioPart,
  setAudioFile,
  audioFile,
}) => {
  const [isRecording, setIsRecording] = useState(false);

  const [timer, setTimer] = useState(0);
  const [listenAudio, setListenAudio] = useState(null);
  const intervalRef = React.useRef(null);
  const [stopClone, setStopClone] = useState(false);

  useEffect(() => {
    if (isRecording) {
      intervalRef.current = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRecording]);

  const startRecording = () => {
    setIsRecording(true);
    setTimer(0);
  };

  const stopRecording = () => {
    setIsRecording(false);
    setStopClone(true);
  };

  const handleRetake = () => {
    setIsRecording(false);
    setStopClone(false);
  };

  const onStop = (recordedBlob) => {
    

    // Convert Blob to File
    const wavFile = new File([recordedBlob.blob], "recording.wav", {
      type: "audio/wav",
    });

    // Set the audio file state with the File object
    setAudioFile(wavFile);

    // Optional: To listen to the recorded audio
    setListenAudio(URL.createObjectURL(recordedBlob.blob));

    // Optional: Call any additional handlers
    handleStop(URL.createObjectURL(recordedBlob.blob));
  };

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();

  //   // Ensure you have the audio file to send
  //   if (audioFile) {
  //     const formData = new FormData();
  //     formData.append("file", audioFile);

  //     try {
  //       const response = await fetch("/your-backend-endpoint", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       const result = await response.json();
  //       console.log(result);

  //       // Handle the response from the backend here
  //     } catch (error) {
  //       console.error("Error uploading the audio file:", error);
  //     }
  //   } else {
  //     console.log("No audio file to upload");
  //   }
  // };

  return (
    <>
      <ReactMic
        record={isRecording}
        onStop={onStop}
        mimeType="audio/wav" 
      />
      {!stopClone && (
        <div className="flex justify-between w-full items-center">
          {!isRecording ? (
            <button
              type="button"
              onClick={startRecording}
              className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
            >
              Start Recording
            </button>
          ) : (
            <div className="flex justify-between items-center w-full px-3">
              <div className="flex gap-2 items-center">
                <div className="bg-[#E8E8E8] w-[14px] h-[14px] rounded-full "></div>
                <p className="text-sm font-worksans font-semibold text-[#565656]">
                  {`${Math.floor(timer / 60)
                    .toString()
                    .padStart(2, "0")}:${(timer % 60)
                    .toString()
                    .padStart(2, "0")}`}
                </p>
              </div>
              <img
                src={process.env.PUBLIC_URL + "/image/clientimage/sound.gif"}
                alt="gif"
                className="w-[155px] h-[64px]"
              />

              <div className="flex gap-3">
                <button
                  className="flex gap-2 text-[#565656] items-center font-worksans font-medium text-base bg-white hover:bg-[#E8E8E8] border px-3 h-[44px] rounded-lg"
                  onClick={handleRetake}
                >
                  <span>
                    <MdRefresh />
                  </span>
                  Retake
                </button>
                <button
                  className="bg-[#FF4439] hover:bg-[#E7362C] rounded-lg text-white font-worksans font-medium text-base px-3 h-[42px] flex gap-2 items-center"
                  onClick={stopRecording}
                >
                  <span className="bg-white block text-[12px]">
                    <CiStop1 />
                  </span>
                  Stop
                </button>
              </div>
            </div>
          )}
        </div>
      )}
      {stopClone && (
        <div className="flex justify-between w-full items-center">
          <button
            className="flex gap-2 text-[#565656] items-center font-worksans font-medium text-base bg-white hover:bg-[#E8E8E8] border px-3 h-[44px] rounded-lg"
            onClick={handleRetake}
          >
            <span>
              <MdRefresh />
            </span>
            Retake
          </button>
          <OwnVoice audioSrc={listenAudio} />
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
          >
            Continue
          </button>
        </div>
      )}
    </>
  );
};

export default VoiceRecorder;
