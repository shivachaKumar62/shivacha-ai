import React,{useState} from 'react'
import { FaChevronRight } from "react-icons/fa6";
import client_six from "../../sidebarimage/client-six.svg";
import bgimage from "../../sidebarimage/bgimage.png";
import { RxCross1 } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";
import {NavLink} from "react-router-dom"

const AiVideo = () => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showCreateModal, setShowCreateModal] = useState(false);
  return (
    <div>
      {showDeleteModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
            <div className="flex justify-center items-center mb-[38px]">
              <img
                src={
                  process.env.PUBLIC_URL + "./image/clientimage/deleteicon.png"
                }
                className="w-[48px] h-[48px]"
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <p className="font-worksans text-xl font-semibold text-[#212121]">
                Delete Project
              </p>
            </div>
            <div>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                Your project will be permanently deleted, and all access to it,
                including any previously copied links, will be removed.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-[41px]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
              >
                Cancel
              </button>
              <button className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      {showCreateModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-[#E8E8E8] rounded-[16px] w-[429px]  pt-[24px] z-20">
            <div className="flex justify-between items-center px-[24px] pb-[12px]">
              <span className="font-worksans font-medium text-xl text-black">
                Create Project
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setShowCreateModal(false)}
              >
                <RxCross1 className="text-[#565656]" />
              </span>
            </div>

            <hr className="w-full bg-[#565656] h-[2px]" />
            <div className="px-[24px] py-[24px]">
              <div className="flex flex-col">
                <span className="font-worksans font-normal text-sm text-[#565656] pb-[12px]">
                  Project Name
                </span>
                <input
                  type="text"
                  placeholder="Enter a project name"
                  className="bg-white rounded-[8px] px-4 py-2 outline-none"
                />
              </div>
              <div className="flex justify-end items-center gap-5 mt-[41px]">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="w-[96px] h-[40px] border border-[#0096FF] rounded-[8px] text-center font-worksans font-medium text-base text-[#0096FF]"
                >
                  Cancel
                </button>
                <button className="w-[96px] h-[40px] bg-[#47B3FF] rounded-[8px] text-center font-worksans font-medium text-base text-white">
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex gap-0 items-start justify-start bg-white rounded-[16px] w-full relative">
        <div className="pl-[16px] py-[16px] ">
          <p className="font-worksans font-medium text-base text-[#000000]">
            Bulk Video Generator
          </p>
          <div className="pt-[16px] flex">
            <div className="">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "./image/clientimage/shivachaaivideo/shivachaaivideo.png"
                }
                alt="img"
                className="w-[224px] h-[195px]"
              />
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${client_six})`,
            //   backgroundSize: "",
            backgroundRepeat: "no-repeat",
          }}
          className="flex flex-col   "
        >
          <div className="mt-[47px] w-[90%] pl-[42px]">
            <p
              style={{
                background:
                  "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className=" font-medium font-worksans text-xl pb-[5px]"
            >
              Explore new horizons in content creation with our state-of-the-art
              text-to-speech technology.
            </p>
            <p className="font-worksans text-base pb-1 font-normal text-[#212121]">
              Experience seamless integration and unmatched quality with our
              innovative text-to-speech solutions, designed to bring your
              projects to life.
            </p>
            <button
              className="bg-[#47B3FF] px-5 h-[44px] rounded-[8px] mt-[24px] font-worksans font-medium text-base text-white flex justify-center items-center gap-3"
              onClick={() => setShowCreateModal(true)}
            >
              Create Project
              <span>
                <FaChevronRight className="text-white block mt-1" />
              </span>
            </button>
          </div>
        </div>
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
      <div className="bg-white mt-[24px] px-[16px] py-[16px] rounded-[18px]">
        <div className=" flex justify-between items-center">
          <p className="font-worksans font-medium text-xl text-[#000000]">
            My Project
          </p>
          <div className="relative ">
            <input
              placeholder="Search Project"
              type="text"
              className="bg-[#E8E8E8] w-full pl-10 py-2 rounded-full border-none outline-none"
            />
            <div className="absolute left-4 top-3">
              <GoSearch />
            </div>
          </div>
        </div>
        <div className="mt-[24px]">
          <div className="flex justify-center items-center">
            <div className="bg-[#E8E8E8] px-2 py-2 w-[296px]  rounded-[12px]">
              <div className="flex items-center justify-center h-[176px]  bg-white  rounded-[12px] ">
                <NavLink to="/add-video">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "./image/clientimage/shivachaaivideo/aivideoimg.png"
                    }
                    className="w-[96px] h-[77px]"
                  />
                </NavLink>
              </div>
              <div className="flex justify-between items-start my-[24px] px-[8px]">
                <div className="">
                  <p className="font-worksans  font-medium text-lg text-[#212121]">
                    Hitesh Kumar
                  </p>
                  <p className="font-worksans  font-medium text-sm text-[#565656]">
                    13 June 2024
                  </p>
                </div>
                <div
                  className="bg-white px-2 py-2 rounded-full cursor-pointer"
                  onClick={() => setShowDeleteModal(true)}
                >
                  <RiDeleteBin5Line className="text-[#565656]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AiVideo
