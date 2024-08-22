import React from 'react'
import { CiVolumeHigh } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
const MyVoiceCard = () => {
  return (
    <div className="bg-[#E8E8E8] rounded-[12px] w-[340px] px-[8px] pt-[8px] ">
      <div className=" bg-[#fff] flex justify-center flex-col rounded-[8px] ">
        <div className="pt-[20px] pb-[16px] flex justify-center">
          <img
            src={process.env.PUBLIC_URL + "./image/clientimage/useData.png"}
            className="w-[48px] h-[48px]"
          />
        </div>
        <p className="font-worksans text-center font-semibold text-xl text-[#000000] pb-[4px]">
          Makle
        </p>
        <p className="font-worksans text-center font-medium text-base text-[#212121] pb-[4px]">
          Male with English Accent
        </p>
        <p className="font-worksans text-center font-normal text-sm text-[#565656] pb-[20px]">
          A Young and Epic voice. Perfect and excited to record Audio
        </p>
      </div>
      <div className="flex justify-around items-center py-[24px] ">
        <div className="flex gap-2 items-center cursor-pointer">
          <CiVolumeHigh className="text-[#556655] text-xl" />
          <p>Use this</p>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer "
          // onClick={() => setShowGif(false)}
        >
          <FiEdit className="text-[#556655] text-xl" />
          <p>Edit</p>
        </div>
        <div
          className="flex gap-2 items-center cursor-pointer"
          // onClick={() => setShowDeleteModal(true)}
        >
          <RiDeleteBin5Line className="text-[#556655] text-xl" />
          <p>Delete</p>
        </div>
      </div>
    </div>
  );
}

export default MyVoiceCard
