import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { Select } from "antd";
import CustomAudioPlayer from "../../customcomponent/CustomAudioPlayer";
import { postRequestImageVideo } from "../../../api";
import { getTokenFromCookie } from "../../../getTokenFromCookie";
import "../aistudio/aicss.css";

import axios from "axios";

const GenerateVideo = () => {
  const textareaRef = useRef(null);
  const [audioFile, setAudioFile] = useState(null);
  const [isVoiceSelected, setIsVoiceSelected] = useState(false);
  const [isAudioUploaded, setIsAudioUploaded] = useState(false);
  const [showGif, setShowGif] = useState(false);
  const [uploadAudio, setUploadAudio] = useState(null);

  const [formData, setFormData] = useState({
    voice: "",
    accent: "",
    text: "",
    // projectName:"",
    accentStrength: 0.7,
  });
  const [excelFile, setExcelFile] = useState(null);

  const [errors, setErrors] = useState({});

  // start translation
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default target language is Spanish
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };
  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on initial render
  }, [formData.text]);
  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=en|${targetLanguage}`
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

  // end translation

  useEffect(() => {
    validateForm();
  }, [formData]);

  const validateForm = () => {
    let newErrors = {};
    if (!formData.voice) newErrors.voice = "Please select a voice.";
    if (!formData.accent) newErrors.accent = "Please select an accent.";
    if (!formData.text) newErrors.text = "Please enter text to convert.";
    if (!excelFile) newErrors.excelFile = "Please upload an Excel file.";
    // if (!uploadAudio) newErrors.excelFile = "Please upload an Audio file.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    adjustTextareaHeight();
  };

  const handleButtonofExcelClick = () => {
    document.getElementById("excelInput").click();
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setExcelFile(file);
  };

  const handleSelectChange = (value, name) => {
    setAudioFile(value);
    setFormData({ ...formData, [name]: value });
    setIsVoiceSelected(true);
    setIsAudioUploaded(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const temperature = ((formData.accentStrength / 100) * 1.5)?.toFixed(2);
    const token = getTokenFromCookie();

    if (validateForm()) {
      setShowGif(true);

      const data = new FormData();
      data.append("text", formData.text);
      data.append("language", formData.accent);
      data.append("temperature", temperature);
      data.append("speaker", formData.voice);

      data.append("file", excelFile);
      // requestData.append("audio", uploadAudio);

      try {
        const response = await postRequestImageVideo("/bulk_synthesize", data);
        if (response.status === 200) {
          setShowGif(false);
        }
        console.log(response, "kl");
        // const audioBlob = new Blob([response.data], { type: "audio/wav" });
        // const audioUrl = URL.createObjectURL(audioBlob);
        // setResponseAudio(audioUrl);
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred.");
      } finally {
        setShowGif(false);
      }
    }
  };

  return (
    <div className="">
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img src={process.env.PUBLIC_URL + "./image/audio/Graphic.gif"} />
        </div>
      )}
      {/* <div className="bg-white mb-[10px] rounded-[12px] px-[16px] py-[10px] ">
        <p
          style={{
            background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="font-medium font-worksans text-xl"
        >
          Video Generator
        </p>
        <p className="font-worksans font-normal pt-2 text-base text-[#565656]">
          Transform your ideas into captivating narratives with our
          state-of-the-art voice over technology.
        </p>
      </div> */}
      <div className="w-full py-[16px] px-[16px] bg-white rounded-[16px]">
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="py-[16px] px-[16px] bg-[#E8E8E8] rounded-[16px] border shadow-md">
            <div className="grid grid-cols-2 gap-[24px] mb-[10px] ">
              <div className="">
                <label className="block text-[#212121] text-sm font-normal font-worksans mb-[12px]">
                  Project Name
                </label>
                <input
                  type="text"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="Enter the Project name"
                  className="w-full px-[16px] py-2 border rounded-[8px] font-worksans font-normal text-base bg-[#F5F5F5] outline-none"
                />
              </div>
              <div className=" w-full   mt-[26px] ">
                <input
                  id="fileInput"
                  type="file"
                  accept=".mp4"
                  // onChange={handleUploadFileChange}
                  className="hidden"
                />
                <div
                  className="flex px-4 border border-gray-200 bg-white h-[45px] mt-1  rounded-[8px] justify-between items-center cursor-pointer "
                  // onClick={handleButtonClick}
                >
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#E8E8E8] flex items-center justify-center  px-1 py-1 rounded-full">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./image/clientimage/shivachaaivideo/videobulk.png"
                        }
                        className="w-[16px] h-[16px]"
                        alt="img"
                      />
                    </div>
                    <span className="font-worksans font-medium text-lg text-[#565656]">
                      {uploadAudio === null
                        ? "Upload Video"
                        : uploadAudio?.name}
                    </span>
                  </div>
                  <div className="bg-[#E8E8E8] flex items-center justify-center  px-1 py-1 rounded-full">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "./image/clientimage/shivachaaivideo/upload-bulk.png"
                      }
                      className="w-[16px] h-[16px]"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fff] px-[8px] py-[12px] rounded-[12px]">
              <div className="grid grid-cols-2 gap-[24px] ">
                <div className=" mb-4">
                  <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
                    Select your Accent
                  </label>
                  <Select
                    showSearch
                    style={{ width: "100%", height: "52px" }}
                    className="select-box"
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
                <div className="mb-4">
                  {/* <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
                  Select Voice
                </label> */}
                  <div className="flex rounded-[12px] mt-[25px] bg-[#E8E8E8] px-2 py-2 justify-between">
                    <Select
                      showSearch
                      disabled={isAudioUploaded}
                      style={{ width: "93%", height: "52px" }}
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
              </div>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="block text-[#212121] font-worksans  text-base font-normal mb-2">
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
              <div className="">
                <div className="flex justify-between items-center">
                  <label className="block text-[#565656] font-worksans font-normal text-base   mb-[12px]">
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
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
                  >
                    Translate
                  </button>
                </div> */}
                </div>

                <textarea
                  ref={textareaRef}
                  name="text"
                  maxLength={250}
                  value={formData.text}
                  onChange={handleChange}
                  onInput={adjustTextareaHeight}
                  className="w-full border focus:outline-none bg-[#F2F2F2] text-[#565656] font-worksans font-normal text-base border-gray-300 p-4 rounded-lg"
                  placeholder="Hello {Name} Welcome to Shivacha Ai."
                  rows={3} // Start with a single row
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
            </div>
          </div>
          {/* <div className="   ">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Excel Sheet
            </label>

            <input
              id="excelInput"
              type="file"
              accept=".xlsx, .xls"
              onChange={handleFileChange}
              className="w-full p-2 border rounded hidden"
            />
            <div
              className="flex px-4 border h-[45px] mt-1 bg-white  rounded justify-between items-center cursor-pointer "
              onClick={handleButtonofExcelClick}
            >
              <div className="flex gap-2 items-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./image/clientimage/shivachaaivideo/excel-bulk.png"
                  }
                  className="w-[16px] h-[16px]"
                  alt="img"
                />
                <span>
                  {excelFile === null ? "Upload Excel" : excelFile?.name}
                </span>
              </div>
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./image/clientimage/shivachaaivideo/upload-bulk.png"
                }
                className="w-[16px] h-[16px]"
                alt="img"
              />
            </div>
          </div> */}
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

export default GenerateVideo;
