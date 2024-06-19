import React from 'react'
import {NavLink} from "react-router-dom"
import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="sm:py-[96px] max-sm:py-[20px]">
      <div className="container">
        <div className="flex sm:justify-between max-sm:flex-col max-sm:items-center max-sm:w-full ">
          <div className="flex flex-col sm:sm:max-w-[25%] max-sm:w-full max-sm:pb-[20px]">
            <span className="font-worksans font-medium text-xl  mb-[16px]">
              Feature
            </span>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Bulk Videos Generator
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              AI Video Generator
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              AI Voice Generator
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Social Media Videos Maker
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              AI Video Meme Maker
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Personalized Video Maker
            </NavLink>
          </div>
          <div className="flex flex-col sm:max-w-[25%]  max-sm:w-full max-sm:pb-[20px]">
            <span className="font-worksans font-medium text-xl  mb-[16px]">
              Resource
            </span>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Blog
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Tutorial
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Case Studies
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Help Center
            </NavLink>
          </div>
          <div className="flex flex-col sm:max-w-[25%]  max-sm:w-full max-sm:pb-[20px]">
            <span className="font-worksans font-medium text-xl  mb-[16px]">
              Company
            </span>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              About Us
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Careers
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Privacy Policy
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Terms of Service
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Cookie Preference
            </NavLink>
            <NavLink className="hover:text-blue-500 hover:underline mb-[16px]">
              Contact Us
            </NavLink>
          </div>
          <div className="flex flex-col sm:max-w-[25%]  max-sm:w-full">
            <div className="  mb-[16px]">
              <img
                src={process.env.PUBLIC_URL + "./image/navbar/nav-logo.png"}
                className="h-[40px] w-[175px]"
              />
            </div>

            <span className="font-worksans font-medium text-base text-[#000000] pb-[16px]">
              The India’s best AI videos generator{" "}
            </span>
            <span className="font-worksans font-normal text-base text-[#000000]">
              Plot 23, Maruti Industrial Area, Sector 18 Gurugram, Haryana,
              122015
            </span>
            <h2 className="pt-[16px] font-worksans font-semibold text-[24px] text-[#212121]">
              Follow us
            </h2>
            <div className="flex gap-4 pt-[20px]">
              <span>
                <RiFacebookFill className="text-2xl" />
              </span>
              <span>
                <FaInstagram className="text-2xl" />
              </span>
              <span>
                <BsTwitterX className="text-2xl" />
              </span>
              <span>
                <FaLinkedinIn className="text-2xl" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer
