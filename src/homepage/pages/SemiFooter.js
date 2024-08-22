import React from 'react'
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const SemiFooter = () => {
  return (
    <div className="bg-black mb-[43px]">
      <div className="container">
        <div className="flex  justify-between items-center flex-wrap h-[108px]">
          <div className="flex justify-between gap-6 items-center">
            <span className="font-worksans cursor-pointer hover:text-blue-500 font-normal text-base text-white">
              © All right reserved, 2024-SHIVACHA TECHNOLOGIES PRIVATE LIMITED
            </span>
            <span className="font-worksans cursor-pointer hover:text-blue-500 font-normal text-base text-white">
              Terms & Conditions 
            </span>
            <span className="font-worksans cursor-pointer hover:text-blue-500  font-normal text-base text-white">
              Privacy Policy
            </span>
          </div>
          <div>
            <div className="flex gap-4 ">
              <span className="bg-white px-2 py-2 hover:bg-blue-500 hover:text-white  rounded-full cursor-pointer ">
                <RiFacebookFill className="text-xl " />
              </span>
              <span className="bg-white px-2 py-2 hover:bg-blue-500 hover:text-white rounded-full cursor-pointer">
                <FaInstagram className="text-xl " />
              </span>
              <span className="bg-white px-2 py-2 hover:text-white hover:bg-blue-500 rounded-full cursor-pointer">
                <BsTwitterX className="text-xl " />
              </span>
              <span className="bg-white px-2 hover:bg-blue-500 hover:text-white  py-2 rounded-full cursor-pointer">
                <FaLinkedinIn className="text-xl " />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SemiFooter
