





import React, { useState } from "react";
import {  IoIosPlay, IoMdPause } from "react-icons/io";
import SettingPage from "./SettingPage"; // Make sure to import your SettingPage component
import { IoChevronDown } from "react-icons/io5";
import client_six from "../../sidebarimage/client-six.svg";
import bgimage from "../../sidebarimage/bgimage.png";
const AiTextReader = () => {
  const [clickWatch, setClickWatch] = useState(false);
  const [showCustomSelect, setShowCustomSelect] = useState(false);
  const [selectedValue, setSelectedValue] = useState(["Amelia","ameliadropdown"]);
  const [speechToSpeech, setSpeechToSpeech] = useState(false);
const [textTospeech, setTextTospeech] = useState(true);
const [historyImage,setHistoryImage] = useState(false)
  const options = [
    {
      text: "Amelia",
      image: "/image/clientimage/aitextreader/ameliadropdown.png",
      value: "ameliadropdown",
    },
    {
      text: "Hitesh",
      image: "/image/clientimage/aitextreader/audio-two.png",
      value: "audio-two",
    },
    {
      text: "Nisha",
      image: "/image/clientimage/aitextreader/audio-one.png",
      value: "audio-one",
    },
    {
      text: "Rogger",
      image: "/image/clientimage/aitextreader/audio-three.png",
      value: "audio-three",
    },
  ];
  const [showPlayPause, setShowPlayPause] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const [showHistory, setShowHistory] = useState(false);

  const handleClickSpeech = () => {
    setSpeechToSpeech(true);
    setTextTospeech(false);
    setHistoryImage(false)
  };
  const handleClickText = () => {
setSpeechToSpeech(false);
setTextTospeech(true);
setHistoryImage(false);
  }
  const showHistoryUi = ()=>{
    setSpeechToSpeech(false);
    setTextTospeech(false);
    setHistoryImage(true);
  }
  const handleSelectbox = () => {
    setShowCustomSelect((data) => !data);
  };
  const handleshowImage = (e) => {
    e.stopPropagation();
    setShowImage((data) => !data);
  };
  const handleShowPlay = (e) => {
    e.stopPropagation();
    setShowPlayPause((data) => !data);
  };
  const handleshowSettingItem = () => {
    setShowHistory(true);
  };
  

  return (
    <div>
      <div className="flex justify-start flex-end bg-white relative">
        <div className="flex flex-col  py-[16px] pl-[16px]">
          <div>
            <h1 className="font-worksans font-medium text-base text-[#000000] pb-[16px]">
              Voice Synthesis
            </h1>
          </div>
          <div>
            <img
              src={
                process.env.PUBLIC_URL + "./image/clientimage/texttospeech.png"
              }
              alt="client five"
              className="w-[224px] h-[148px]"
            />
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${client_six})`,
              // backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              paddingLeft: "60px",
              width: "90%",
            }}
            className="flex flex-col"
          >
            <p
              style={{
                background:
                  "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mt-[25px]  font-medium font-worksans text-xl pb-[16px]"
            >
              Explore new horizons in content creation with our state-of-the-art
              text-to-speech technology.
            </p>
            <p className="font-worksans text-base pb-1 font-normal text-[#212121]">
              Experience seamless integration and unmatched quality with our
              innovative text-to-speech solutions, designed to bring your
              projects to life.
            </p>
            <div
              className="  z-10 absolute right-0 bottom-0"
              style={{
                backgroundImage: `url(${bgimage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                width: "330px",
                height: "180px",
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className={`grid grid-cols-12 gap-6 ${
            showHistory ? "" : "bg-white"
          } mt-[24px] rounded-[12px]`}
        >
          <div
            className={`${
              showHistory
                ? "col-span-7 px-[24px] py-[24px] "
                : "col-span-12 px-[24px] py-[24px]"
            } bg-white rounded-[12px]`}
          >
            <div className="flex justify-between items-center">
              <div className="bg-[#E8E8E8] px-[20px] h-[52px] flex items-center justify-around rounded-full col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8">
                <div
                  className={`${
                    textTospeech && "bg-white rounded-full shadow-md"
                  } cursor-pointer px-6 py-1`}
                  onClick={handleClickText}
                >
                  <p
                    className={`font-worksans text-base font-semibold ${
                      textTospeech ? "text-[#212121]" : "text-[#565656]"
                    }`}
                  >
                    Text to Speech
                  </p>
                </div>
                <div
                  className={`${
                    speechToSpeech && "bg-white rounded-full shadow-md"
                  } cursor-pointer px-6 py-1`}
                  onClick={handleClickSpeech}
                >
                  <p
                    className={`font-worksans text-base font-semibold ${
                      speechToSpeech ? "text-[#212121]" : "text-[#565656]"
                    }`}
                  >
                    Speech to Speech
                  </p>
                </div>
              </div>
              {showHistory ? (
                <div
                  className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
                  onClick={() => setShowHistory(false)}
                >
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "./image/clientimage/aitextreader/resize.png"
                    }
                    className="w-[20px] h-[20px] object-cover"
                  />
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  {historyImage && (
                    <div
                      className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
                      onClick={() => {
                        setHistoryImage(false)
                        setTextTospeech(true)
                      }
                      }
                    >
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          "./image/clientimage/rightarrow.png"
                        }
                        className="w-[20px] h-[20px] object-cover"
                      />
                    </div>
                  )}
                  <div
                    className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
                    // onClick={() => {
                    //   setClickWatch(true);
                    // }}
                    onClick={showHistoryUi}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "./image/clientimage/settingtext.png"
                      }
                      className="w-[20px] h-[20px] object-cover"
                    />
                  </div>
                  <div
                    className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer hover:bg-white hover:shadow-md hover:px-2 hover:py-2"
                    onClick={handleshowSettingItem}
                  >
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "./image/clientimage/volume.png"
                      }
                      className="w-[20px] h-[20px] object-cover"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="pt-[56px] pb-[124px]">
              {textTospeech && (
                <textarea
                  placeholder="Enter text here"
                  className="w-full px-[24px] py-[24px] border border-gray-300 rounded-lg min-h-[236px]"
                ></textarea>
              )}
              {speechToSpeech && (
                <div className="flex justify-center items-center flex-col pt-[16px] pb-[20px]">
                  <div className="bg-[#E8E8E8] px-2 py-2 rounded-full cursor-pointer">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "./image/clientimage/aitextreader/audiospeech.png"
                      }
                      className="w-[20px] h-[20px] object-cover"
                    />
                  </div>
                  <p className="text-center font-inter font-medium text-base text-[#212121] pt-[24px] pb-[8px]">
                    Upload an Audio file by dragging and dropping it here
                  </p>
                  <p className="text-center font-inter font-normal text-sm text-[#565656] pb-[24px]">
                    Audio file up to 60 Mb
                  </p>
                  <div className="flex gap-5">
                    <button className="border border-gray-400 rounded-[20px] text-sm font-inter font-medium text-gray-500 px-3 py-2 hover:bg-gray-400 hover:shadow-lg hover:text-gray-500">
                      Upload Audio
                    </button>
                    <button className="border border-gray-400 rounded-[20px] text-sm font-inter font-medium text-gray-500 px-3 py-2 hover:bg-gray-400 hover:shadow-lg hover:text-gray-500">
                      Record Audio
                    </button>
                  </div>
                </div>
              )}
              {historyImage && <HistoryPages />}
            </div>

            <div className="flex justify-between items-center">
              <div
                className="relative cursor-pointer"
                onMouseLeave={() => setShowImage(true)}
              >
                <div className="flex justify-between items-center px-4 py-2 w-[164px] bg-[#E8E8E8] hover:bg-white hover:px-4 hover:border-4 hover:border-[#E8E8E8] hover:rounded-full hover:shadow-md rounded-full">
                  <div className="flex gap-2 items-center">
                    <div
                      onClick={handleshowImage}
                      className="bg-[#E8E8E8] w-[24px] h-[24px] rounded-full flex items-center"
                    >
                      {showImage ? (
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            `./image/clientimage/aitextreader/${selectedValue[1]}.png`
                          }
                          className="w-[24px] h-[24px]"
                        />
                      ) : showPlayPause ? (
                        <span onClick={handleShowPlay} className="mx-auto">
                          <IoIosPlay className="text-white" />
                        </span>
                      ) : (
                        <span onClick={handleShowPlay} className="mx-auto">
                          <IoMdPause className="text-white" />
                        </span>
                      )}
                    </div>
                    <span className="font-worksans font-medium text-lg text-[#212121]">
                      {selectedValue[0]}
                    </span>
                  </div>
                  <div onClick={handleSelectbox}>
                    <IoChevronDown />
                  </div>
                </div>
                {showCustomSelect && (
                  // <div className="absolute bottom-10 w-[164px] bg-[#E8E8E8] rounded-[12px] z-10">
                  //   <div className="flex flex-col pl-5 my-[8px] h-[100px] overflow-y-auto">
                  //     <div
                  //       className="flex gap-2 items-center my-[8px]"
                  //       onClick={(e) => {
                  //         e.stopPropagation();
                  //         setShowCustomSelect(false);
                  //         setSelectedValue(["Amelia", "ameliadropdown"]);
                  //       }}
                  //     >
                  //       <img
                  //         src={
                  //           process.env.PUBLIC_URL +
                  //           "./image/clientimage/aitextreader/ameliadropdown.png"
                  //         }
                  //         className="w-[24px] h-[24px]"
                  //       />
                  //       <span className="font-worksans font-medium text-lg text-[#212121]">
                  //         Amelia
                  //       </span>
                  //     </div>
                  //     <div
                  //       className="flex gap-2 items-center my-[8px]"
                  //       onClick={(e) => {
                  //         e.stopPropagation();
                  //         setShowCustomSelect(false);
                  //         setSelectedValue(["Hitesh", "audio-one"]);
                  //       }}
                  //     >
                  //       <img
                  //         src={
                  //           process.env.PUBLIC_URL +
                  //           "./image/clientimage/aitextreader/audio-two.png"
                  //         }
                  //         className="w-[24px] h-[24px]"
                  //       />

                  //       <span className="font-worksans font-medium text-lg text-[#212121]">
                  //         Hitesh
                  //       </span>
                  //     </div>
                  //     <div
                  //       className="flex gap-2 items-center my-[8px]"
                  //       onClick={(e) => {
                  //         e.stopPropagation();
                  //         setShowCustomSelect(false);
                  //         setSelectedValue(["Priya", "audio-two"]);
                  //       }}
                  //     >
                  //       <img
                  //         src={
                  //           process.env.PUBLIC_URL +
                  //           "./image/clientimage/aitextreader/audio-one.png"
                  //         }
                  //         className="w-[24px] h-[24px]"
                  //       />
                  //       <span className="font-worksans font-medium text-lg text-[#212121]">
                  //         Nisha
                  //       </span>
                  //     </div>
                  //     <div
                  //       className="flex gap-2 items-center my-[8px]"
                  //       onClick={(e) => {
                  //         e.stopPropagation();
                  //         setShowCustomSelect(false);
                  //         setSelectedValue(["Raj", "audio-three"]);
                  //       }}
                  //     >
                  //       <img
                  //         src={
                  //           process.env.PUBLIC_URL +
                  //           "./image/clientimage/aitextreader/audio-three.png"
                  //         }
                  //         className="w-[24px] h-[24px]"
                  //       />
                  //       <span className="font-worksans font-medium text-lg text-[#212121]">
                  //         Rogger
                  //       </span>
                  //     </div>
                  //   </div>
                  // </div>
                  <div className="absolute bottom-10 w-[164px] bg-[#E8E8E8] rounded-[12px] z-10">
                    <div className="flex flex-col pl-2 my-[8px] h-[100px] overflow-y-auto">
                      {options.map((option, index) => (
                        <div
                          className="flex gap-3 items-center my-[4px] mx-2 hover:bg-white px-2 py-1 hover:px-2 hover:py-1 hover:rounded-md "
                          key={index}
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowCustomSelect(false);
                            setSelectedValue([option.text, option.value]);
                          }}
                        >
                          <img
                            src={process.env.PUBLIC_URL + option.image}
                            className="w-[24px] h-[24px]"
                            alt={option.text}
                          />
                          <span className="font-worksans font-medium text-lg text-[#212121]">
                            {option.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              <div className="flex items-center ">
                <button className="bg-[#47B3FF] text-white rounded-full w-[196px] text-center h-[48px] font-worksans font-normal text-base">
                  Generate
                </button>
              </div>
            </div>
          </div>
          {showHistory && (
            <div className="col-span-5 bg-white rounded-[12px]">
              <SettingPage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiTextReader;


export const HistoryPages = () => {
  return (
    <div className="mt-[24px]">
      <div className="flex justify-center items-center py-[16px]">
        <img
          src={
            process.env.PUBLIC_URL +
            "./image/clientimage/aitextreader/historyloader.png"
          }
          alt="image"
          className="w-[32px] h-[32px]"
        />
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