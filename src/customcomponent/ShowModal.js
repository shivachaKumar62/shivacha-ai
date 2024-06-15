


import React from "react";
import { useNavigate } from "react-router-dom";



const ShowModal = ({ img, useCaseData }) => {
  const navigate = useNavigate()
  return (
    <div
      className="bg-white  shadow-md rounded-2xl py-[24px] px-[24px] z-10 "
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex justify-between flex-wrap gap-x-[45px]">
        {useCaseData?.map((item, index) => (
          <div
            key={index}
            className="flex gap-4  py-[9px] "
            onClick={() => navigate(item?.path)}
          >
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/${img}.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col cursor-pointer ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                {item?.key}
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                {item?.value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowModal;
