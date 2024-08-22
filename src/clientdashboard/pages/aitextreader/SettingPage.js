import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { FaPlay } from "react-icons/fa";
import { CiPause1 } from "react-icons/ci";
import { Slider } from "antd";
const SettingPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showVolume, setShowVolume] = useState(false);
  const [historyPage, setHistoryPage] = useState(false);
  const handleCross = (e) => {
    e.stopPropagation();
    setShowPopup(false);
  };
  
  const handleshowVolumeItem = () => {
    setShowVolume(true);
     setHistoryPage(false);
     setShowPopup(false);
  };
  const handleshowHistoryItem = () => {
    setHistoryPage(true);
    setShowPopup(false)
    setShowVolume(false)
  };
  const defaultpageFunc = () => {
    setShowPopup(true)
    setShowVolume(false)
    setHistoryPage(false)
  }
  return (
    <div className="bg-white px-[16px] py-[16px] rounded-[12px]">
      <div className="flex items-center justify-between ">
        {historyPage ? (
          <div>
            <p className="font-worksans font-medium text-lg text-[#212121]">
              History
            </p>
          </div>
        ) : (
          <div className="flex items-center  gap-3">
            <select className="outline-none cursor-pointer" defaultValue="Age">
              <option>Age</option>
              <option>Young</option>
              <option>Middle</option>
              <option>Old</option>
            </select>
            <select className="outline-none cursor-pointer" defaultValue="All">
              <option>All</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        )}
        <div className="flex items-center  gap-3">
          {showVolume === true || historyPage === true ?
          <div
            className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
            onClick={defaultpageFunc}
          >
            <img
              src={
                process.env.PUBLIC_URL + "./image/clientimage/rightarrow.png"
              }
              className="w-[20px] h-[20px] object-cover"
            />
          </div>
:""}
          <div
            className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
            onClick={handleshowHistoryItem}
          >
            <img
              src={
                process.env.PUBLIC_URL + "./image/clientimage/settingtext.png"
              }
              className="w-[20px] h-[20px] object-cover"
            />
          </div>
          <div
            className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
            onClick={handleshowVolumeItem}
          >
            <img
              src={process.env.PUBLIC_URL + "./image/clientimage/volume.png"}
              className="w-[20px] h-[20px] object-cover"
            />
          </div>
        </div>
      </div>
      {historyPage && (
        <div>
          <CustomizeSpeechText
            handleCross={handleCross}
            text="Realistic Ai Voice for your Audio"
          />
          <HistoryPages />
        </div>
      )}

      {showVolume && (
        <div>
          <CustomizeSpeechText
            handleCross={handleCross}
            text="Realistic AI Voice for Stability Adjust"
          />
          <div className=" mt-[24px]">
            <div className="mb-4">
              <label className="font-worksans font-medium text-base text-[#212121] mb-[12px]">
                Stability
              </label>
              <Slider
              // value={formData.accentStrength}
              // onChange={handleSliderChange}
              // tooltip={{ formatter }}
              />
              <div className="flex justify-between items-center leading-3">
                <span className="font-worksans font-normal text-xs text-[#565656]">
                  More Variable
                </span>
                <span className="font-worksans font-normal text-xs text-[#565656]">
                  More stable
                </span>
              </div>
            </div>
            <div className="mb-4">
              <label className="font-worksans font-medium text-base text-[#212121] mb-[12px]">
                Similarity
              </label>
              <Slider
              // value={formData.accentStrength}
              // onChange={handleSliderChange}
              // tooltip={{ formatter }}
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
        </div>
      )}
      {!historyPage && showPopup && !showVolume ? (
        <div>
          <CustomizeSpeechText
            handleCross={handleCross}
            text="Customize Your Generated Speech here"
          />
          <div className="relative mt-[24px]">
            <input
              placeholder="Search Voice"
              type="text"
              className="bg-[#E8E8E8] w-full pl-10 py-2 rounded-full border-none outline-none"
            />
            <div className="absolute left-4 top-3">
              <GoSearch />
            </div>
          </div>
          <div>
            <VoiceList />
          </div>
        </div>
      ):""}
    </div>
  );
};

export default SettingPage;

export const VoiceList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [playingIndex, setPlayingIndex] = useState(null);

  const voices = [
    { name: "Amelia, Female", description: "Confident, narration" },
    { name: "Hitesh, Male", description: "Confident, narration" },
    { name: "Nisha, Female", description: "Confident, narration" },
    { name: "Rogger, Male", description: "Confident, narration" },
  ];

  const togglePlayPause = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(null); // Pause if already playing
    } else {
      setPlayingIndex(index); // Play the new item
    }
  };

  return (
    <div className="h-[200px] bg-whit mt-[16px] overflow-y-auto">
      <div className="flex flex-col gap-2">
        {voices.map((voice, index) => (
          <div
            key={index}
            className="relative flex items-center gap-4 px-2 py-2 hover:rounded-[12px] hover:bg-[#E8E8E8] cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className="w-[35px] h-[35px] flex items-center rounded-full bg-[#212121] opacity-20 cursor-pointer"
              onClick={() => togglePlayPause(index)}
            >
              <span className="mx-auto">
                {playingIndex === index ? (
                  <CiPause1 className="text-white" />
                ) : (
                  <FaPlay className="text-white" />
                )}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-worksans font-normal text-lg text-[#000000] leading-4">
                {voice.name}
              </span>
              <span className="font-worksans font-normal text-sm text-[#565656]">
                {voice.description}
              </span>
            </div>
            {hoveredIndex === index && (
              <button className="absolute right-2 px-3 py-1 bg-[#AEDEFF] text-white rounded-[16px] ">
                Apply
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export const CustomizeSpeechText = ({ handleCross, text }) => {
  return (
    <div className="pt-[16px] pb-[12px] px-[16px] bg-[#E8E8E8] mt-[16px] rounded-[16px]">
      <div className="flex justify-between items-center ">
        <div className="flex gap-2 items-center">
          <img
            src={
              process.env.PUBLIC_URL +
              "./image/clientimage/aitextreader/star.png"
            }
            className="w-[24px] h-[24px]"
          />
          <p
            style={{
              background:
                "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="  font-medium font-worksans text-xl "
          >
            {text}
          </p>
        </div>
        <div className="cursor-pointer" onClick={handleCross}>
          <RxCross1 />
        </div>
      </div>
      <p className="font-worksans font-normal text-sm text-[#565656] pt-[8px] pl-[30px] pr-[12px]">
        Choose a voice that matches the tone and setting of the story. For a
        story set in an Indian, Other Accent you might want a voice with a
        slight Indian accent, warm and engaging.
      </p>
    </div>
  );
};

export const HistoryPages = () => {
  return (
    <div className="mt-[24px]">
      <div className="flex justify-center items-center py-[16px]">
        <img src={process.env.PUBLIC_URL+"./image/clientimage/aitextreader/historyloader.png"} alt="image" className="w-[32px] h-[32px]" />
      </div>
      <p
        style={{
          background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="  font-medium font-worksans text-xl text-center"
      >
        Your Genrated speech will here
      </p>
    </div>
  );
};
