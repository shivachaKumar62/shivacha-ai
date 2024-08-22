import React, { useState } from "react";
import client_five from "../sidebarimage/client-five.svg";
import client_six from "../sidebarimage/client-six.svg";
import Vector from "../sidebarimage/Vector.svg";
import { FaChevronRight } from "react-icons/fa";
import SelectBox from "../customcomponent/SelectBox";
import Card from "../customcomponent/Card";
import { LiaFilterSolid } from "react-icons/lia";
import {NavLink} from "react-router-dom"
import MyVoiceCard from "../customcomponent/MyVoiceCard";

const options = ["All", "Male", "Female"];
const optionsOne = ["Hindi", "English"];

const AudioGenerator = () => {
  const [showAudioContent, setShowAudioContent] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const handleClick = () => {
    setShowAudioContent((data) => !data);
  };
  const handleShowFilter = () => {
    setShowFilter((data) => !data);
  };
  const data = [
    {
      img: "automate-eight",
      name: "John",
      title: "English Male Voice",
      src: "Rogger.wav",
    },
    {
      img: "automate-two",
      name: "Amelia",
      title: "English Female Voice",
      src: "shivacha.wav",
    },
    {
      img: "automate-three",
      name: "Isabelia",
      title: "English Female Voice",
      src: "speakers-hi_train_hindifemale_01305.wav",
    },
    {
      img: "automate-four",
      name: "John",
      title: "English Male Voice",

      src: "speakers-hi_multiLingual_049.wav",
    },
  ];
  
  return (
    <div>
      <div className="flex justify-between flex-end">
        <div className="flex flex-col">
          <div>
            <h1>Audio Generator</h1>
          </div>
          <div>
            <img src={client_five} alt="client five" />
          </div>
        </div>
        <div>
          <div
            style={{
              backgroundImage: `url(${client_six})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              paddingLeft: "60px",
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
              Use Shivacha Ai's innovative technology to let your unique voice
              shine.
            </p>
            <p className="font-worksans text-base pb-1 font-normal text-[#212121]">
              Amplify your voice, captivate your audience, and leave a lasting
              impression with Shivacha AI's cutting-edge audio solutions.
            </p>
          </div>
          <div className="pl-[60px]">
            <NavLink to="/make-audio">
              <button className="bg-[#47B3FF] hover:bg-blue-500 mt-[20px] rounded-[8px] text-white font-medium font-worksans text-base px-2 py-2 flex items-center">
                Next Step{" "}
                <span className="pl-[4px]">
                  <FaChevronRight />
                </span>
              </button>
            </NavLink>
          </div>
        </div>
        <div className=" relative">
          <div
            className="absolute bottom-0 right-0"
            style={{
              backgroundImage: `url(${Vector})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <img src={Vector} className="W-[100%] ha-[100%]" />
            <p>ghghgh</p>
          </div>
        </div>
      </div>
      <div className="mt-[24px] ">
        <div className="flex justify-between ">
          <div className="bg-[#AEDEFF] w-[252px] h-[52px] flex items-center justify-around rounded-full">
            <div
              className={`${
                showAudioContent && "bg-white rounded-full shadow-md"
              } cursor-pointer px-6 py-1`}
              onClick={handleClick}
            >
              <p className="font-worksans text-base font-semibold text-[#212121]">
                My Voice
              </p>
            </div>
            <div
              className={`${
                !showAudioContent && "bg-white rounded-full shadow-md  "
              } cursor-pointer px-6 py-1`}
              onClick={handleClick}
            >
              <p className="font-worksans text-base font-semibold text-[#212121]">
                Library
              </p>
            </div>
          </div>
          <div className="pt-5 flex justify-between gap-5 items-center relative">
            <SelectBox options={options} />
            <div className="">
              <div
                className="border  border-[#0096FF] flex justify-around items-center bg-white py-[12px] cursor-pointer rounded-[12px]  w-[124px]"
                onClick={handleShowFilter}
              >
                <span className="text-base font-medium font-worksans text-[#212121] ">
                  Filter
                </span>
                <span>
                  <LiaFilterSolid />
                </span>
              </div>
              {showFilter && (
                <div className="absolute top-[80px] shadow-md px-[24px] py-[24px] left-[10px] z-10 bg-white w-[341px] h-[433px] rounded-[12px]">
                  <div>
                    <p className="text-base text-[#000000] font-worksans font-medium ">
                      Use Case
                    </p>
                  </div>
                  <div className="flex gap-[70px]">
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Natural
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          E-Learning
                        </span>
                      </div>

                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Explore
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Narration
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Ads
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Game
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Audio books
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px]">
                    <p className="text-base text-[#000000] font-worksans font-medium ">
                      Age
                    </p>
                  </div>
                  <div className="flex gap-[70px]">
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Child
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Middle-Aged
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Youth
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Older
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-[12px]">
                    <p className="text-base text-[#000000] font-worksans font-medium ">
                      Like
                    </p>
                  </div>
                  <div className="flex gap-[70px]">
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Favourate
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col pt-[10px] gap-[10px]">
                      <div className="flex gap-3">
                        <input type="checkbox" />
                        <span className="font-normal text-sm font-worksans text-[#565656]">
                          Unfavourate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <SelectBox options={optionsOne} />
          </div>
        </div>
        {showAudioContent ? (
          <div className="mt-[32px]">
            <div className="flex justify-center items-center">
              <div className="bg-[#E8E8E8] px-2 py-2 w-[296px] h-[259px] rounded-[12px]">
                <div className="flex items-center justify-center h-[176px]  bg-white  rounded-[12px] ">
                  <img
                    src={
                      process.env.PUBLIC_URL + "./image/clientimage/folder.png"
                    }
                    className="w-[96px] h-[77px]"
                  />
                </div>
                <div className="pt-[16px]">
                  <p className="font-worksans text-center font-medium text-base text-[#212121]">
                    Add Generative or Cloned voice
                  </p>
                  <p className="font-worksans text-center font-medium text-base text-[#212121]">
                    0 / 4
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-[40px]">
            <Card data={data} />
          </div>
        )}

      </div>
      <MyVoiceCard />
    </div>
  );
};

export default AudioGenerator;
