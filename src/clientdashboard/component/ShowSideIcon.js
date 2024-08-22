import React from 'react'
import { FaAnglesLeft } from "react-icons/fa6";
const ShowSideIcon = ({ showingSidebar }) => {
  return (
    <div
      className={`flex items-center justify-around `}
    >
      {showingSidebar ? (
        <img
          src={process.env.PUBLIC_URL + "favcon.png"}
          className="w-[40px] h-[40px]"
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + "hd-logo.png"}
          className="w-[176px] h-[40px]"
        />
      )}
      <span className="cursor-pointer">
        <FaAnglesLeft
          className={`${showingSidebar ? "text-base" : "text-xl"}`}
        />
      </span>
    </div>
  );
};

export default ShowSideIcon
