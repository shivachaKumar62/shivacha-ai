import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { Select } from "antd";
import CustomAudioPlayer from "../../customcomponent/CustomAudioPlayer";
import { postRequest, deleteRequest } from "../../../api";
import { getTokenFromCookie } from "../../../getTokenFromCookie";
import { IoShareSocialOutline } from "react-icons/io5";
import { CiVolumeHigh } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import franc from "franc";
import langmap from "langmap";
const GenerateAudio = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [responseAudio, setResponseAudio] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showResponeModal, setShowResponseModal] = useState(false);
  const [volumeDeleteModal, setVolumeDeleteModal] = useState(true);
  const [deleteId,setDeleteId] = useState()
  const [timerGif, setTimerGif] = useState(false);
  const [language, setLanguage] = useState("");
  const [formData, setFormData] = useState({
    voice: "",
    accent: "",
    text: "",
    accentStrength: 0,
  });
  const [errors, setErrors] = useState({});
  const audioRef = useRef(null);
 


  // start transtaltion
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default target language is Spanish

  const handleLanguageChange = (e) => {
    setTargetLanguage(e.target.value);
  };

  
  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=hi|${targetLanguage}`
      );
      const translatedText = response.data.responseData.translatedText;
      setFormData((prevFormData) => ({
        ...prevFormData,
        text: translatedText,
      }));
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

     

  // end transtaltion

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (value, name) => {
    setAudioFile(value);
    setFormData({ ...formData, [name]: value });
  };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//  const temperature = ((formData.accentStrength / 100) * 1.5)?.toFixed(2);
  
//     const token = getTokenFromCookie();

//     if (validateForm()) {
//       setShowGif(true);

//       try {
//         const response = await postRequest(
//           "/synthesize",
//           {
//             text: formData.text,
//             language: formData.accent,
//             temperature: parseFloat(temperature),
//             speaker: formData.voice,
//           },
//           token
//         );
//         if (response.status === 200) {
//           setShowGif(false);
//           setShowResponseModal(true);
// console.log(response,'hhh')
//           const audioBlob = new Blob(
//             [
//               new Uint8Array(
//                 atob(response?.data?.audio_data)
//                   .split("")
//                   .map((c) => c.charCodeAt(0))
//               ),
//             ],
//             { type: "audio/wav" }
//           );
//           const url = URL.createObjectURL(audioBlob);
          
//           const audio = new Audio(url);
          
//           setResponseAudio(audio);
//         }

       
 
      
//       } catch (error) {
//         toast.error(error.response?.data?.message );
//       } finally {
//         setShowGif(false);
//         setTimerGif(false);
//       }
//     }
//   };
  
const handleSubmit = async (event) => {
  event.preventDefault();
  const temperature = ((formData.accentStrength / 100) * 1.5)?.toFixed(2);

  const token = getTokenFromCookie();

  if (validateForm()) {
    setShowGif(true);

    try {
      const response = await postRequest(
        "/synthesize",
        {
          text: formData.text,
          language: formData.accent,
          temperature: parseFloat(temperature),
          speaker: formData.voice,
        },
        token
      );

      if (response.status === 200) {
        setDeleteId(response?.data?.audio_id)
        setShowGif(false);
        setShowResponseModal(true);
        console.log(response, "hhh");

        // Decode base64 audio data
        const binaryString = atob(response.data.audio_data);
        const binaryLength = binaryString.length;
        const bytes = new Uint8Array(binaryLength);
        for (let i = 0; i < binaryLength; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        const audioBlob = new Blob([bytes], { type: "audio/wav" });
        const url = URL.createObjectURL(audioBlob);

        setResponseAudio(url);
        setFormData({
          voice: "",
          accent: "",
          text: "",
          accentStrength: 0,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setShowGif(false);
      setTimerGif(false);
    }
  }
};
const handleSaveGenerate = () => {
    //  setShowResponseModal(false);
    setVolumeDeleteModal((data) => !data);
  };
  const handleDelete = async () => {
    try {
      await deleteRequest(`/single_audio/${deleteId}`);
      toast.success("Audio deleted successfully");
      setShowDeleteModal(false);
    } catch (error) {
      toast.error("Failed to delete Audio");
    }
  };
  const handleDeleteGenerate = () => {
    setShowResponseModal(false);
    setVolumeDeleteModal((data) => !data);
    setShowDeleteModal(true);
    
  };

  return (
    <div>
      {/* translation api start */}
      {showDeleteModal && (
        <div className="fixed  inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
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
              <button
                className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* translation api end */}
      {showResponeModal && (
        <div className="fixed inset-0 w-[100%] z-40 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-[16px] w-[50%] H-[315px] px-[40px] py-[32px]">
            <div
              className="flex justify-end  cursor-pointer"
              onClick={() => setShowResponseModal(false)}
            >
              <span>
                <RxCross1 />
              </span>
            </div>
            <div className="flex justify-center  cursor-pointer">
              <span>
                <CiVolumeHigh className="text-black text-5xl" />
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="font-worksans font-normal text-base text-[#212121] pb-[12px] block">
                Audio duration
              </span>
              <audio controls src={responseAudio} className="w-full" />
            </div>
            <div className="bg-[#E8E8E8] rounded-[8px] mt-[20px] grid grid-cols-2 ">
              <div
                className={`flex gap-2 ${
                  volumeDeleteModal ? "bg-white rounded-[8px]  shadow-md" : ""
                } py-[8px] my-1 mx-2 items-center justify-center cursor-pointer`}
                onClick={handleSaveGenerate}
              >
                <CiVolumeHigh className="text-[#556655]" />
                <p>Save this</p>
              </div>

              <div
                className={`flex gap-2 ${
                  !volumeDeleteModal ? "bg-white rounded-[8px] shadow-md" : ""
                } items-center py-[8px] my-1 mx-2 justify-center cursor-pointer`}
                onClick={handleDeleteGenerate}
              >
                <RiDeleteBin5Line className="text-[#556655]" />
                <p>Delete</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img src={process.env.PUBLIC_URL + "./image/audio/Graphic.gif"} />
        </div>
      )}
      {/* <div className="bg-white mb-[24px] rounded-[12px] px-[16px] py-[24px]">
        <p
          style={{
            background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="font-medium font-worksans text-xl"
        >
          Audio Generator
        </p>
        <p className="font-worksans font-normal pt-2 text-base text-[#565656]">
          Transform your ideas into captivating narratives with our
          state-of-the-art voice over technology.
        </p>
      </div> */}
      <div className="w-full  bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto p-6 border rounded-lg shadow-md"
        >
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <label className="block text-[#565656] text-base font-normal font-worksans mb-[12px]">
                Enter the prompt
              </label>
              {/* <div className="flex items-center gap-4 mb-[10px]">
                <Select
                  showSearch
                  style={{ width: "100%", height: "40px" }}
                  value={targetLanguage}
                  placeholder="Select Voice"
                  onChange={(value) => setTargetLanguage(value)}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "es", label: "Spanish" },
                    { value: "fr", label: "French" },
                    { value: "de", label: "German" },
                    { value: "zh", label: "Chinese" },
                    { value: "hi", label: "Hindi" },
                    { value: "en", label: "English" },
                  ]}
                />
                <button
                  onClick={translateText}
                  className=" px-4 py-2 bg-blue-500 text-white font-bold rounded"
                >
                  Translate
                </button>
              </div> */}
            </div>
            {/* <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              className="w-full border focus:outline-none bg-[#F2F2F2] border-gray-300 p-2 rounded-lg"
              rows="4"
              placeholder=" Type your script and let us bring your vision to life! "
            /> */}
            <textarea
              // ref={textareaRef}
              name="text"
              maxLength={250}
              value={formData.text}
              onChange={handleChange}
              // onInput={adjustTextareaHeight}
              className="w-full border focus:outline-none bg-[#F2F2F2] text-[#565656] font-worksans font-normal text-base border-gray-300 p-4 rounded-lg"
              placeholder="Hello {Name} Welcome to Shivacha Ai."
              rows={2} // Start with a single row
              style={{ overflow: "hidden" }} // Hide scrollbar
            />
            <div className="flex justify-between items-center">
              <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
                {formData.text.length} / 250
              </p>
              <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
                Total Remaining Quota: {250 - formData.text.length}
              </p>
            </div>
            {/* {errors.text && (
              <p className="text-red-500 text-sm">{errors.text}</p>
            )} */}
          </div>
          <div className="grid grid-cols-1">
            <div className="">
              <label className="block text-[#212121] text-base  font-normal font-worksans  mb-[12px]">
                Accent Strength
              </label>
              <input
                name="accentStrength"
                type="range"
                min="0"
                max="100"
                value={formData.accentStrength}
                onChange={handleChange}
                className="w-full text-[#565656]"
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
          </div>
          <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
            <div className="">
              {/* <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
                Select Voice
              </label> */}
              <div className="flex rounded-[12px] bg-[#E8E8E8] px-4 py-3 justify-between">
                <Select
                  showSearch
                  style={{ width: "90%", height: "52px" }}
                  placeholder="Select Voice"
                  onChange={(value) => handleSelectChange(value, "voice")}
                  filterOption={(input, option) =>
                    (option?.label ?? "")
                      .toLowerCase()
                      .includes(input.toLowerCase())
                  }
                  options={[
                    { value: "Rogger.wav", label: "Rogger" },
                    { value: "Angelina.wav", label: "Angelina" },
                    { value: "Hitesh.wav", label: "Hitesh" },
                    { value: "Nisha.wav", label: "Nisha" },
                  ]}
                />
                <CustomAudioPlayer audioFile={audioFile} />
              </div>
              {/* {errors.voice && (
                <p className="text-red-500 pt-2 text-sm">{errors.voice}</p>
              )} */}
            </div>
            <div className="">
              <label className="block pb-[12px] leading-3 font-worksans font-normal text-base text-[#212121]">
                Select your Accent
              </label>
              <Select
                showSearch
                style={{ width: "100%", height: "48px" }}
                placeholder="Select an Accent"
                onChange={(value) => handleSelectChange(value, "accent")}
                filterOption={(input, option) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={[
                  { value: "en", label: "English" },
                  { value: "hi", label: "Hindi" },
                ]}
              />
              {/* {errors.accent && (
                <p className="text-red-500 pt-2 text-sm">{errors.accent}</p>
              )} */}
            </div>
          </div>
          <div className="flex justify-start mt-[24px]">
            <button
              type="submit"
              className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GenerateAudio;
