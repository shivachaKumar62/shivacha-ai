import React from 'react'
import ProgressBar from '../customcomponent/ProgressBar';
import { FaChevronRight } from "react-icons/fa";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import "./gauge.css"


const Dashboard = () => {
  const data = [
    {
      folderImg: "dashboard-four",
      title: "Untitled Audio",
      time: "July 2,2024,2:24 AM",
      imageOne: "dashboard-ten",
      imageTwo: "dashboard-two",
    },
    {
      folderImg: "dashboard-four",
      title: "Untitled Audio",
      time: "July 2,2024,2:24 AM",
      imageOne: "dashboard-one",
      imageTwo: "dashboard-nine",
    },
  ];
  return (
    <div>
      <div className="flex justify-between items-center  bg-white rounded-[16px] py-[24px] px-[16px]">
        <div className="bg-[#C4CDD5] rounded-xl">
          <div className=" px-[8px] pt-[8px]">
            <img
              src={
                process.env.PUBLIC_URL +
                "./image/clientimage/dashboard/dashboard-eight.png"
              }
              alt="image"
              className="w-[232px] h-[176px]"
            />
          </div>
          <div className="px-[12px] pb-[50px] pt-[26px] relative">
            <p className="font-worksans font-bold text-2xl text-[#000000]">
              Hitesh Kumar
            </p>
            <span
              className="bg-[#22C55E] px-[5px] py-[1px] absolute text-white top-3 right-9"
              style={{ borderRadius: "5px 5px 5px 0px" }}
            >
              Free
            </span>
          </div>
        </div>
        <div className="px-[16px]">
          <div className="relative">
            <Gauge
              value={75}
              startAngle={-110}
              width={230}
              height={230}
              endAngle={110}
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 40,
                  transform: "translate(0px, 0px)",
                  whiteSpace: "pre-line", // Ensures newlines are respected
                  textAlign: "center", // Optional: centers the text
                },
              }}
              text={({ value, valueMax }) => `${value}%`}
            />
            <div className="relative bottom-10 right-0 ">
              <p className="font-worksans text-center font-normal text-sm text-[#565656]">
                Used of 2.5 GB / 4GB
              </p>
              <div className="pt-[20px] flex gap-3 items-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./image/clientimage/dashboard/dashboard-six.png"
                  }
                  alt="image"
                  className="w-[40px] h-[40px]"
                />
                <div className="flex flex-col">
                  <p className="font-worksans font-semibold pb-[4px] text-sm text-[#212B36]">
                    Audio Generator
                  </p>
                  <span className="font-worksans font-normal  text-xs text-[#565656]">
                    5 Files
                  </span>
                </div>
                <p
                  style={{
                    background:
                      "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="font-worksans font-semibold text-sm"
                >
                  1.01 Gb
                </p>
              </div>
              <div className="pt-[20px] flex gap-3 items-center">
                <img
                  src={
                    process.env.PUBLIC_URL +
                    "./image/clientimage/dashboard/dashboard-five.png"
                  }
                  alt="image"
                  className="w-[40px] h-[40px]"
                />
                <div className="flex flex-col">
                  <p className="font-worksans font-semibold pb-[4px] text-sm text-[#212B36]">
                    Audio Generator
                  </p>
                  <span className="font-worksans font-normal  text-xs text-[#565656]">
                    5 Files
                  </span>
                </div>
                <p
                  style={{
                    background:
                      "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                  className="font-worksans font-semibold text-sm"
                >
                  1.01 Gb
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <p className="font-semibold font-worksans text-base text-[#212B36]">
            Recent Works
          </p>
          <ProgressBar
            bgcolor="#FFAB00"
            progress="60"
            width={"full"}
            text={"Pending Audio"}
            value={"20 Sec"}
            height={10}
          />
          <ProgressBar
            bgcolor="#22C55E"
            progress="30"
            width={"full"}
            text={"Complete"}
            value={"1 Mint"}
            height={10}
          />
          <ProgressBar
            bgcolor="#FF5630"
            progress="10"
            width={"full"}
            text={"Delete Items"}
            value={"3 Files"}
            height={10}
          />
        </div>

        <div
          className="py-[20px] px-[16px] rounded-[16px]"
          style={{
            background:
              "linear-gradient(90deg, rgba(214,238,255,0.2) 20%, rgba(92,187,255,0.6) 60%)",
            WebkitBackgroundClip: "bg",
            // WebkitTextFillColor: "transparent",
          }}
        >
          <div className="px-[30px] flex flex-col justify-center items-center  ">
            <img
              src={
                process.env.PUBLIC_URL +
                "./image/clientimage/dashboard/dashboard-three.png"
              }
              alt="image"
              className="w-[162px] h-[122px]"
            />
            <button className="bg-[#47B3FF] hover:bg-blue-500 mt-[20px]  rounded-[8px]   pl-4 pr-4 py-2 flex items-center">
              <span className="font-medium font-worksans text-base text-white">
                {" "}
                Upgrade Plan
              </span>
              <span className="pl-[4px] text-2xl  font-thin text-white">
                <FaChevronRight />
              </span>
            </button>
          </div>
          <p
            style={{
              background:
                "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-worksans font-semibold text-sm pt-[16px]"
          >
            Upgrade your plan and get more space
          </p>
        </div>
      </div>
      <div className="mt-[24px] ">
        <p className="font-worksans font-semibold text-lg text-[#000000] mb-[16px]">
          Recent actions
        </p>

        <div className="flex items-center gap-[12px] ">
          {data?.map((item, ind) => {
            return (
              <div
                key={ind}
                className="bg-white px-[8px] py-[8px] rounded-[12px] "
              >
                <div className="border w-[238px]  px-[8px] py-[8px]  border-gray-300 rounded-[12px] ">
                  <div className="flex justify-end ">
                    <div className="flex justify-center cursor-pointer items-center  bg-white border rounded-full w-[40px] h-[40px] px-1 py-1 shadow-md">
                      <img
                        src={
                          process.env.PUBLIC_URL +
                          `./image/clientimage/dashboard/${item?.imageOne}.png`
                        }
                        alt="image"
                        className="w-[28px] h-[28px] "
                      />
                    </div>
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        `./image/clientimage/dashboard/${item?.folderImg}.png`
                      }
                      alt="image"
                      className="w-[89px] "
                    />
                  </div>
                  <div className=" bg-[#F9CAC8] w-[60px] px-2 py-2 rounded-full">
                    <span className="text-[#E7362C] text-center block font-worksans font-normal text-xs">
                      Draft
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-center mt-[12px] mb-[8px]">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      `./image/clientimage/dashboard/${item?.imageTwo}.png`
                    }
                    alt="image"
                    className="w-[28px] h-[28px] "
                  />
                  <div className="flex flex-col ">
                    <p className="font-worksans font-medium text-sm text-[#000000]">
                      {item.title}
                    </p>
                    <p className="font-worksans font-medium text-xs text-[#565656]">
                      {item.time}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard
