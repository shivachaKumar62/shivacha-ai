import React, { useState } from "react";
import { Radio } from "antd";
import { FaChevronRight } from "react-icons/fa";

const GettingStarted = () => {
  const data = [
    {
      title: "We're excited to welcome you!",
      summary:
        "With Shivacha, effortlessly produce content for worldwide audiences, including videos, product demos, Corporate Video, meme Video, marketing materials, and beyond!",
    },
    {
      title: "Kickstart your journey into video creation",
      summary:
        "Explore new horizons in video creation with Shivacha Ai, where cutting-edge avatar, voice, and text-to-speech technologies converge to redefine your content creation experience. What kind of editing or publishing tasks do you need help with?",
    },
    {
      title: "Kickstart your journey into audio creation",
      summary:
        "Begin your audio creation journey with Shivacha Ai, utilizing state-of-the-art technology to produce dynamic soundscapes and high-quality recordings.",
    },
  ];

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const currentData = data[value - 1];

  return (
    <div className="">
      <h1 className="text-xl font-semibold font-worksans text-[#000000] pb-[16px]">
        Getting Started
      </h1>
      <div className="bg-[#E8E8E8] rounded-r-[16px] grid grid-cols-2">
        <div className="">
          <Radio.Group
            className="flex flex-col py-[24px] px-[16px]"
            onChange={onChange}
            value={value}
          >
            <Radio
              value={1}
              className="py-[15px] px-[16px] hover:bg-white hover:rounded-md hover:font-medium hover:font-worksans hover:text-base hover:text-[#212121]"
            >
              Welcome to Shivacha Ai
            </Radio>
            <Radio
              value={2}
              className="py-[15px] px-[16px] hover:bg-white hover:rounded-md hover:font-medium hover:font-worksans hover:text-base hover:text-[#212121]"
            >
              Kickstart your journey into video creation
            </Radio>
            <Radio
              value={3}
              className="py-[15px] px-[16px] hover:bg-white hover:rounded-md hover:font-medium hover:font-worksans hover:text-base hover:text-[#212121]"
            >
              Kickstart your journey into audio creation
            </Radio>
          </Radio.Group>
        </div>
        <div className="bg-white py-[24px] px-[24px] rounded-[16px]">
          <h1
            className="font-worksans font-semibold text-lg pb-[16px]"
            style={{
              background:
                "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {currentData.title}
          </h1>
          <p className="text-[#565656] font-worksans text-base font-normal">
            {currentData.summary}
          </p>
          <div className="pt-[24px] flex justify-between">
            <div>
              <button className="bg-[#47B3FF] rounded-[8px] text-white font-medium font-worksans text-base px-2 py-2 flex items-center">
                Next Step{" "}
                <span className="pl-[4px]">
                  <FaChevronRight />
                </span>
              </button>
            </div>
            <img
              src={
                process.env.PUBLIC_URL + "./image/clientimage/client-three.png"
              }
              className="w-[80px] h-[96px]"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center my-[30px]">
        <img
          src={process.env.PUBLIC_URL + "./image/clientimage/client-four.png"}
          className="w-[284px] h-[192px]"
        />
      </div>
      <p
        className="font-worksans font-semibold text-2xl pb-[16px] text-center"
        style={{
          background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Welcome to Shivacha Ai
      </p>
    </div>
  );
};

export default GettingStarted;
