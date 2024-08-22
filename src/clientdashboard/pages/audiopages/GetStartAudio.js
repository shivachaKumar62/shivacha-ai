// import React, { useState, useEffect, useRef } from "react";
// import { Slider } from "antd";
// import { IoShareSocialOutline } from "react-icons/io5";
// import { CiVolumeHigh } from "react-icons/ci";
// import { FiEdit } from "react-icons/fi";
// import { RiDeleteBin5Line } from "react-icons/ri";
// import { toast } from "react-toastify";
// import { postRequest } from "../../../api";
// import { getTokenFromCookie } from "../../../getTokenFromCookie";

// const GetStartAudio = () => {
//   const formatter = (value) => `${value}%`;
//   const [audioFile,setAudioFile]= useState()
//   const [showGif, setShowGif] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);
//   const [timerGif, setTimerGif] = useState(false);
//   const [formData, setFormData] = useState({
//     voice: "",
//     accent: "",
//     text: "",
//     accentStrength: 0,
//   });
//   const [errors, setErrors] = useState({});
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

//   useEffect(() => {
//     validateForm();
//   }, [formData]);

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.voice) newErrors.voice = "Please select a voice.";
//     if (!formData.accent) newErrors.accent = "Please select an accent.";
//     if (!formData.text) newErrors.text = "Please enter text to convert.";
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleGenerate = async (event) => {
//     const token = getTokenFromCookie();
//     if (validateForm()) {
//       setShowGif(true);
//       setTimerGif(true);

//       event.preventDefault();
//       if (!formData.voice) {
//         toast.warning("Please fill the required fields!");
//         return;
//       }
//       if (!formData.accent) {
//         toast.warning("Please fill the required fields!");
//         return;
//       }
//       if (!formData.voice) {
//         toast.warning("Please fill the required fields!");
//         return;
//       }

//       try {
//         const response = await postRequest(
//           "/synthesize",
//           {
//             text: formData.text,
//             language: formData.accent,
//             temperature: formData.accentStrength / 100,
//             speaker: formData.voice,
//           },
//           token
//         );
// setAudioFile(response.data)
        
//          console.log(response, "jkjkjk");
        
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };

//   useEffect(() => {
//     if (showGif) {
//       const timeout = setTimeout(() => {
//         setTimerGif(false);
//       }, 5000);

//       return () => clearTimeout(timeout);
//     }
//   }, [showGif]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSliderChange = (value) => {
//     setFormData({ ...formData, accentStrength: value });
//   };

//   return (
//     <div>
//       {showDeleteModal && (
//         <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
//           <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
//             <div className="flex justify-center items-center mb-[38px]">
//               <img
//                 src={
//                   process.env.PUBLIC_URL + "./image/clientimage/deleteicon.png"
//                 }
//                 className="w-[48px] h-[48px]"
//                 alt="icon"
//               />
//             </div>
//             <div className="flex justify-center items-center mb-[16px]">
//               <p className="font-worksans text-xl font-semibold text-[#212121]">
//                 Delete Audio
//               </p>
//             </div>
//             <div>
//               <p className="text-center font-inter font-medium text-base text-[#565656]">
//                 Are you sure you want to delete this Audio?
//               </p>
//               <p className="text-center font-inter font-medium text-base text-[#565656]">
//                 This Action can't be undone.
//               </p>
//             </div>
//             <div className="flex justify-center items-center gap-5 mt-[41px]">
//               <button
//                 onClick={() => setShowDeleteModal(false)}
//                 className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
//               >
//                 Cancel
//               </button>
//               <button className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white">
//                 Delete
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       <div className="bg-white py-[24px] px-[16px]">
//         <h1
//           style={{
//             background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//           }}
//           className="font-medium font-worksans text-xl pb-[16px]"
//         >
//           Audio
//         </h1>
//         <p className="text-[#565656] font-worksans font-normal text-base">
//           Craft lifelike voices, Clone your Accent, and Discover
//           community-featured ones, all while seamlessly integrating avatar and
//           text-to-speech technologies to create captivating video content.
//         </p>
//       </div>
//       <div
//         className={`${
//           showGif ? "grid grid-cols-2 px-[55px] gap-8 " : "w-[440px]"
//         } mx-auto mt-[24px] rounded-[16px]`}
//       >
//         <div className="px-[16px] py-[16px] bg-white">
//           <div className="mb-4">
//             <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
//               Select Voice
//             </label>
//             <select
//               name="voice"
//               value={formData.voice}
//               onChange={handleChange}
//               className="w-full border-2 px-2 py-2  mb-1 rounded-md  font-worksans font-normal text-lg text-[#565656]"
//             >
//               <option value="">Select a voice</option>
//               <option value="Rogger.wav">Rogger</option>
//               <option value="Nisha.wav">Nisha</option>
//               <option value="Hitesh.wav">Hitesh</option>
//               <option value="Amelia.wav">Amelia</option>
//             </select>
//             {errors.voice && (
//               <p className="text-red-500 text-sm">{errors.voice}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
//               Select your Accent
//             </label>
//             <select
//               name="accent"
//               value={formData.accent}
//               onChange={handleChange}
//               className="w-full mb-1 border-2 px-2 py-2 rounded-md font-worksans font-normal text-lg text-[#565656]"
//             >
//               <option value="">Select an accent</option>
//               <option value="hi">Hindi</option>
//               <option value="en">English</option>
//             </select>
//             {errors.accent && (
//               <p className="text-red-500 text-sm">{errors.accent}</p>
//             )}
//           </div>
//           <div className="mb-4">
//             <label className="font-worksans font-normal text-base text-[#212121]">
//               Accent Strength
//             </label>
//             <Slider
//               value={formData.accentStrength}
//               onChange={handleSliderChange}
//               tooltip={{ formatter }}
//             />
//             <div className="flex justify-between items-center leading-3">
//               <span className="font-worksans font-normal text-xs text-[#565656]">
//                 Low
//               </span>
//               <span className="font-worksans font-normal text-xs text-[#565656]">
//                 High
//               </span>
//             </div>
//           </div>
//           <div className="mt-6">
//             <p className="mb-3 font-worksans font-normal text-base text-[#212121]">
//               Enter text to convert to audio format
//             </p>
//             <textarea
//               name="text"
//               value={formData.text}
//               onChange={handleChange}
//               className="border-2 w-full px-[8px] py-[16px] font-worksans font-normal text-xs text-[#565656] h-[196px]"
//               placeholder="Enter text to convert to audio format"
//             />
//             <div className="flex justify-between items-center">
//               <span className="text-xs font-worksans font-normal text-[#565656]">{`${formData.text.length}/250`}</span>
//               <span className="text-xs font-worksans font-normal text-[#565656]">
//                 Total Remaining Characters: {250 - formData.text.length}
//               </span>
//             </div>
//             {errors.text && (
//               <p className="text-red-500 text-sm pt-1">{errors.text}</p>
//             )}
//           </div>
//           <button
//             onClick={handleGenerate}
//             className="w-full text-center bg-blue-500 py-2 text-white rounded-[12px] mt-4"
//           >
//             Generate
//           </button>
//           <button className="w-full text-center bg-white py-2 text-[#565656] border-2 border-[#565656] rounded-[12px] mt-4">
//             Use Voice
//           </button>
//         </div>
//         {showGif &&
//           (timerGif ? (
//             <img src={process.env.PUBLIC_URL + "./image/audio/Graphic.gif"} />
//           ) : (
//             <div className="px-[16px] py-[16px] rounded-[16px] bg-white h-[423px]">
//               <div className="flex justify-end">
//                 <IoShareSocialOutline className="text-2xl text-[#565656] cursor-pointer" />
//               </div>
//               <div className="flex justify-center mb-[48px]">
//                 <CiVolumeHigh className="text-5xl text-[#000000]" />
//               </div>
//               <div>
//                 <p className="text-[#212121] mb-[12px] font-worksans font-normal text-base">
//                   Audio duration
//                 </p>
//                 <audio controls className="w-full">
//                   <source
//                     src={audioFile}
//                     type="audio/mpeg"
//                   />
//                 </audio>

//                 <p className="font-worksans font-semibold text-xl text-[#000000] mt-[40px]">
//                   Makle
//                 </p>
//                 <p className="font-worksans font-normal text-base pb-[4px] pt-[6px] text-[#000000]">
//                   Male with English Accent
//                 </p>
//                 <p className="font-worksans font-normal text-sm text-[#565656]">
//                   A Young and Epic voice, perfect and excited to record Audio
//                 </p>
//               </div>
//               <div className="flex justify-between items-center my-[24px]">
//                 <div className="flex gap-2 items-center cursor-pointer">
//                   <CiVolumeHigh className="text-[#556655]" />
//                   <p>Use this</p>
//                 </div>
//                 <div
//                   className="flex gap-2 items-center cursor-pointer"
//                   onClick={() => setShowGif(false)}
//                 >
//                   <FiEdit className="text-[#556655]" />
//                   <p>Edit</p>
//                 </div>
//                 <div
//                   className="flex gap-2 items-center cursor-pointer"
//                   onClick={() => setShowDeleteModal(true)}
//                 >
//                   <RiDeleteBin5Line className="text-[#556655]" />
//                   <p>Delete</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default GetStartAudio;






import React, { useState, useEffect, useRef } from "react";
import { Slider } from "antd";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { toast } from "react-toastify";
import { postRequest } from "../../../api";
import { getTokenFromCookie } from "../../../getTokenFromCookie";

const GetStartAudio = () => {
  const formatter = (value) => `${value}%`;
  const [audioFile, setAudioFile] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [timerGif, setTimerGif] = useState(false);
  const [formData, setFormData] = useState({
    voice: "",
    accent: "",
    text: "",
    accentStrength: 0,
  });
  const [errors, setErrors] = useState({});
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

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.voice) newErrors.voice = "Please select a voice.";
    if (!formData.accent) newErrors.accent = "Please select an accent.";
    if (!formData.text) newErrors.text = "Please enter text to convert.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
// const handleGenerate = async (event) => {
//   event.preventDefault();
//   const token = getTokenFromCookie();

//   if (validateForm()) {
//     setShowGif(true);
//     setTimerGif(true);

//     try {
//       const response = await postRequest(
//         "/synthesize",
//         {
//           text: formData.text,
//           language: formData.accent,
//           temperature: formData.accentStrength / 100,
//           speaker: formData.voice,
//         },
//         token
//       );

//       // Ensure response is correctly handled as binary data
      
//         // Assuming response.data is a binary string, convert it to a Uint8Array
//         const audioBlob = new Blob([response.data], { type: "audio/wav" });
//         const audioUrl = URL.createObjectURL(audioBlob);
//         setAudioFile(audioUrl);
        
      
//     } catch (error) {
//       toast.error(error.response?.data?.message || "An error occurred.");
//     }
//   }
// };

const handleGenerate = async (event) => {
  event.preventDefault();
  const token = getTokenFromCookie();

  if (validateForm()) {
    // setShowGif(true);
    setTimerGif(true);

    try {
      const response = await postRequest(
        "/synthesize",
        {
          text: formData.text,
          language: formData.accent,
          temperature: formData.accentStrength / 100,
          speaker: formData.voice,
        },
        token
      );

      // Assuming response.data is binary data (ArrayBuffer)
      const audioBlob = new Blob([response.data], { type: "audio/wav" });
      const audioUrl = URL.createObjectURL(audioBlob);
      setAudioFile(audioUrl);
    } catch (error) {
      toast.error(error.response?.data?.message || "An error occurred.");
    } finally {
      setShowGif(false);
      setTimerGif(false);
    }
  }
};



  useEffect(() => {
    if (showGif) {
      const timeout = setTimeout(() => {
        setTimerGif(false);
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [showGif]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSliderChange = (value) => {
    setFormData({ ...formData, accentStrength: value });
  };

  return (
    <div>
      {showDeleteModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
            <div className="flex justify-center items-center mb-[38px]">
              <img
                src={
                  process.env.PUBLIC_URL + "./image/clientimage/deleteicon.png"
                }
                className="w-[48px] h-[48px]"
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <p className="font-worksans text-xl font-semibold text-[#212121]">
                Delete Audio
              </p>
            </div>
            <div>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                Are you sure you want to delete this Audio?
              </p>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                This Action can't be undone.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-[41px]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
              >
                Cancel
              </button>
              <button className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white py-[24px] px-[16px]">
        <h1
          style={{
            background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="font-medium font-worksans text-xl pb-[16px]"
        >
          Audio
        </h1>
        <p className="text-[#565656] font-worksans font-normal text-base">
          Craft lifelike voices, Clone your Accent, and Discover
          community-featured ones, all while seamlessly integrating avatar and
          text-to-speech technologies to create captivating video content.
        </p>
      </div>
      <div
        className={`${
          showGif ? "grid grid-cols-2 px-[55px] gap-8 " : "w-[440px]"
        } mx-auto mt-[24px] rounded-[16px]`}
      >
        <div className="px-[16px] py-[16px] bg-white">
          <div className="mb-4">
            <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
              Select Voice
            </label>
            <select
              name="voice"
              value={formData.voice}
              onChange={handleChange}
              className="w-full border-2 px-2 py-2  mb-1 rounded-md  font-worksans font-normal text-lg text-[#565656]"
            >
              <option value="">Select a voice</option>
              <option value="Rogger.wav">Rogger</option>
              <option value="Nisha.wav">Nisha</option>
              <option value="Hitesh.wav">Hitesh</option>
              <option value="Amelia.wav">Amelia</option>
            </select>
            {errors.voice && (
              <p className="text-red-500 text-sm">{errors.voice}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
              Select your Accent
            </label>
            <select
              name="accent"
              value={formData.accent}
              onChange={handleChange}
              className="w-full mb-1 border-2 px-2 py-2 rounded-md font-worksans font-normal text-lg text-[#565656]"
            >
              <option value="">Select an accent</option>
              <option value="hi">Hindi</option>
              <option value="en">English</option>
            </select>
            {errors.accent && (
              <p className="text-red-500 text-sm">{errors.accent}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="font-worksans font-normal text-base text-[#212121]">
              Accent Strength
            </label>
            <Slider
              value={formData.accentStrength}
              onChange={handleSliderChange}
              tooltip={{ formatter }}
            />
            <div className="flex justify-between items-center leading-3">
              <span className="font-worksans font-normal text-xs text-[#565656]">
                Low
              </span>
              <span className="font-worksans font-normal text-xs text-[#565656]">
                High
              </span>
            </div>
          </div>
          <div className="mt-6">
            <p className="mb-3 font-worksans font-normal text-base text-[#212121]">
              Enter text to convert to audio format
            </p>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="border-2 w-full px-[8px] py-[16px] font-worksans font-normal text-xs text-[#565656] h-[196px]"
              placeholder="Enter text to convert to audio format"
            />
            <div className="flex justify-between items-center">
              <span className="text-xs font-worksans font-normal text-[#565656]">{`${formData.text.length}/250`}</span>
              <span className="text-xs font-worksans font-normal text-[#565656]">
                Total Remaining Characters: {250 - formData.text.length}
              </span>
            </div>
            {errors.text && (
              <p className="text-red-500 text-sm pt-1">{errors.text}</p>
            )}
          </div>
          <button
            onClick={handleGenerate}
            className="w-full text-center bg-blue-500 py-2 text-white rounded-[12px] mt-4"
          >
            Generate
          </button>
          <button className="w-full text-center bg-white py-2 text-[#565656] border-2 border-[#565656] rounded-[12px] mt-4">
            Use Voice
          </button>
        </div>
        {audioFile && (
          <div>
            <h3>Generated Audio:</h3>
            <audio controls src={audioFile} />
          </div>
        )}
        {showGif &&
          (timerGif ? (
            <img src={process.env.PUBLIC_URL + "./image/audio/Graphic.gif"} />
          ) : (
            <div className="px-[16px] py-[16px] rounded-[16px] bg-white h-[423px]">
              <div className="flex justify-end">
                <IoShareSocialOutline className="text-2xl text-[#565656] cursor-pointer" />
              </div>
              <div className="flex justify-center mb-[48px]">
                <CiVolumeHigh className="text-5xl text-[#000000]" />
              </div>
              {/* <div>
                <p className="text-[#212121] mb-[12px] font-worksans font-normal text-base">
                  Audio duration
                </p>
                <audio ref={audioRef} controls className="w-full">
                  <source src={audioFile} type="audio/wav" />
                </audio>

                <p className="font-worksans font-semibold text-xl text-[#000000] mt-[40px]">
                  Makle
                </p>
                <p className="font-worksans font-normal text-base pb-[4px] pt-[6px] text-[#000000]">
                  Male with English Accent
                </p>
                <p className="font-worksans font-normal text-sm text-[#565656]">
                  A Young and Epic voice, perfect and excited to record Audio
                </p>
              </div> */}
              {/* {audioFile && (
                <div>
                  <p>Audio URL:</p>
                  <a href={audioFile} target="_blank" rel="noopener noreferrer">
                    {audioFile}
                  </a>
                  <audio controls  >
                    <source src={audioFile} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )} */}
              {/* {audioFile && (
                <div>
                  <h3>Generated Audio:</h3>
                  <audio controls src={audioFile} />
                </div>
              )} */}

              <div className="flex justify-between items-center my-[24px]">
                <div className="flex gap-2 items-center cursor-pointer">
                  <CiVolumeHigh className="text-[#556655]" />
                  <p>Use this</p>
                </div>
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => setShowGif(false)}
                >
                  <FiEdit className="text-[#556655]" />
                  <p>Edit</p>
                </div>
                <div
                  className="flex gap-2 items-center cursor-pointer"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <RiDeleteBin5Line className="text-[#556655]" />
                  <p>Delete</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default GetStartAudio;
