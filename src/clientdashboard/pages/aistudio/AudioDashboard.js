import client_six from "../../sidebarimage/client-six.svg";
import React, { useState, useEffect, useMemo } from "react";
import { FaChevronRight } from "react-icons/fa6";
import bgimage from "../../sidebarimage/bgimage.png";
import { NavLink } from "react-router-dom";
import {  Tooltip, Popover } from "antd";
import { GoSearch } from "react-icons/go";
import { toast } from "react-toastify";
import { PiDotsThreeOutlineVerticalBold } from "react-icons/pi";
import { LuPencilLine } from "react-icons/lu";
import { MdDelete } from "react-icons/md";
import { deleteRequest, getRequest } from "../../../api";
import ConvertTime from "../../customcomponent/ConvertTime";
import { CiShare2 } from "react-icons/ci";
const AudioDashboard = () => {
  const [showFolder, setShowFolder] = useState(false);
  const [data, setData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteID] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const fetchBulkAudio = async () => {
    try {
      const response = await getRequest("/bulk_audios");

      setData(response?.data?.projects);
    } catch (error) {
      toast.error("Failed to fetch Bulk Audio");
    }
  };
  useEffect(() => {
    fetchBulkAudio();
  }, []);
  const handleClick = () => {
    setShowFolder(true);
  };
  const handleDelete = async () => {
    setShowGif(true);
    try {
      await deleteRequest(`/bulk_audios/${deleteId}`);
      setShowGif(false);
      toast.success("Audio deleted successfully");
      fetchBulkAudio();
      setShowDeleteModal(false);
      
    } catch (error) {
      toast.error("Failed to delete Audio");
    }
  };

  const content = (item) => {
    return (
      <div className="flex flex-col gap-2">
        <Tooltip title="Update">
          <button
            disabled
            className=" opacity-25  rounded-full bg-[#E8E8E8] flex justify-center items-center px-2 py-2"
          >
            <LuPencilLine />
          </button>
        </Tooltip>
        <Tooltip title="Delete">
          <button
            onClick={() => {
              setShowDeleteModal(true);
              setDeleteID(item?.project_id);
            }}
            className=" rounded-full bg-[#E8E8E8] flex justify-center items-center px-2 py-2"
          >
            <MdDelete className="text-red-500" />
          </button>
        </Tooltip>
        <Tooltip title="Share">
          <button
            disabled
            className=" opacity-25 rounded-full bg-[#E8E8E8] flex justify-center items-center px-2 py-2"
          >
            <CiShare2 />
          </button>
        </Tooltip>
      </div>
    );
  };

  return (
    <div>
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img
            src={`${process.env.PUBLIC_URL}/image/audio/Upload-excel-Sheet.gif`}
            className="w-[248px] h-[248px]"
          />
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
            <div className="flex justify-center items-center mb-[38px]">
              <img
                src={`${process.env.PUBLIC_URL}/image/clientimage/deleteicon.png`}
                className="w-[48px] h-[48px]"
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <p className="font-worksans text-xl font-semibold text-[#212121]">
                Delete Audio
              </p>
            </div>
            <div>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                Are you sure you want to delete this Audio?
              </p>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                This Action can't be undone.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-[41px]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
              >
                Cancel
              </button>
              <button
                className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-start gap-[32px] rounded-[16px] flex-end bg-white relative">
        <div className="flex   py-[16px] pl-[16px]">
          <img
            src={`${process.env.PUBLIC_URL}/image/clientimage/video-header.png`}
            alt="img"
            className="w-[164px] h-[143px]"
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${client_six})`,
            backgroundRepeat: "no-repeat",
            paddingLeft: "5px",
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
            className="mt-[16px]  font-medium font-worksans text-xl pb-[16px]"
          >
            Generate High-Volume, Professional-Grade Audio Clips Instantly with
            Our Bulk Audio Solution.
          </p>
          <p className="font-worksans text-base  font-normal text-[#212121]">
            Perfect for businesses and creators, this tool uses advanced tech to
            streamline workflows and ensure consistent branding for large
            projects.
          </p>
          <div className="mt-[20px] mb-[16px]">
            <NavLink to="/Shivacha-Ai-Studio/create-bulk-audio">
              <button className="bg-[#47B3FF] hover:bg-blue-500  rounded-[8px] text-white font-medium font-worksans text-base px-4 py-3 flex items-center">
                Create Project
                <span className="pl-[8px] pt-1 ">
                  <FaChevronRight className="text-xl" />
                </span>
              </button>
            </NavLink>
          </div>
          <div
            className="  z-10 absolute right-0 bottom-0"
            style={{
              backgroundImage: `url(${bgimage})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              width: "330px",
              height: "120px",
            }}
          ></div>
        </div>
      </div>
      <div className="mt-[24px] mb-[16px] bg-white rounded-[16px] px-[16px] py-[25px]">
        <div className="flex justify-between items-center">
          <p className="font-worksans font-medium text-xl text-[#212121]">
            Your Bulk Audio
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
        <div className="max-sm:grid-cols-1 md:grid-cols-2  grid gap-2 lg:grid-cols-4 ">
          {data?.length > 0 &&
            data?.map((item, ind) => {
              return (
                <div
                  key={ind}
                  className="flex  cursor-pointer justify-center items-center mt-[16px]"
                >
                  <div className="px-[8px] py-[8px] rounded-[12px] bg-[#E8E8E8] ">
                    <div className="flex flex-col">
                      <NavLink
                        to={`/Shivacha-Ai-Studio/bulk-audio/${item?.project_id}`}
                        state={{ project_name: item?.project_name }}
                      >
                        <img
                          src={`${process.env.PUBLIC_URL}/image/clientimage/audiogenerator/bulk-audio-folder.png`}
                          alt="img"
                          className="w-[238px] h-[176px]"
                        />
                      </NavLink>
                      <div className="flex items-center justify-between gap-3 pt-[12px] pb-[8px] ">
                        <div className="flex gap-3 items-center">
                          <img
                            src={`${process.env.PUBLIC_URL}/image/clientimage/dashboard/dashboard-two.png`}
                            alt="img"
                            className="w-[24px] h-[24px]"
                          />
                          <NavLink
                            to={`/Shivacha-Ai-Studio/bulk-audio/${item?.project_id}`}
                            state={{ project_name: item?.project_name }}
                          >
                            <div className="flex flex-col">
                              <span className="font-worksans font-medium text-sm text-[#000000]">
                                {item?.project_name}
                              </span>
                              <span className="font-worksans font-medium text-xs text-[#565656]">
                                <ConvertTime datetime={item?.created_at} />
                              </span>
                            </div>
                          </NavLink>
                        </div>
                        <div>
                          <Popover
                            placement="topLeft"
                            content={() => content(item)}
                            trigger="click"
                            // open={popoverVisible[item?.id]}
                            // onOpenChange={() => handlePopoverClick(item?.id)}
                          >
                            <PiDotsThreeOutlineVerticalBold />
                          </Popover>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        {data?.length === 0 && (
          <div
            className="flex flex-col h-[348px] items-center justify-center"
            onClick={handleClick}
          >
            <img
              src={`${process.env.PUBLIC_URL}/image/clientimage/audiogenerator/audiolibrary.png`}
              alt="img"
              className="w-[286px] h-[227px]"
            />
            <p
              style={{
                background:
                  "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              className="mt-[5px]  font-semibold font-worksans text-lg pb-[16px]"
            >
              You have not generate the Audio
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default AudioDashboard;
