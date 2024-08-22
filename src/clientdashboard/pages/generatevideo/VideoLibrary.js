import React, { useState, useEffect } from "react";
import client_six from "../../sidebarimage/client-six.svg";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import bgimage from "../../sidebarimage/bgimage.png";
import { deleteRequest, getRequest } from "../../../api";
import { RiDeleteBin6Line } from "react-icons/ri";

import "../../customcomponent/css/table.css";
import ConvertTime from "../../customcomponent/ConvertTime";
import PaginationComponent from "../../customcomponent/PaginationComponent";
import AudioPlayer from "../../customcomponent/AudioPlayer";

const VideoLibrary = () => {
  const [allSingleAudio, setAllSingleAudio] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalItems, setTotalItems] = useState(0);
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const [deleteId, setDeleteID] = useState(null);

  const fetchAllSingleAudio = async () => {
    try {
      const response = await getRequest("/single_audio");
      setAllSingleAudio(response?.data?.audio_files);
      let total = response?.data?.audio_files?.length;
      setTotalItems(total);
    } catch (error) {
      toast.error("Failed to fetch Withdraw Request");
    }
  };
  useEffect(() => {
    fetchAllSingleAudio(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const handleDelete = async () => {
    try {
      await deleteRequest(`/single_audio/${deleteId}`);
      toast.success("Audio deleted successfully");
      fetchAllSingleAudio(currentPage, pageSize);
      setShowDeleteModal(false);
      fetchAllSingleAudio(); // Refresh the audio list after deletion
    } catch (error) {
      toast.error("Failed to delete Audio");
    }
  };

  const handlePageChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  return (
    <div>
      <div className="flex justify-start flex-end bg-white relative">
        {/* <div className="flex flex-col py-[16px] pl-[16px]">
          <div>
            <h1 className="font-worksans font-medium text-base text-[#000000] pb-[16px]">
              Audio Generator
            </h1>
          </div>
          <div>
            <img
              src={
                process.env.PUBLIC_URL +
                "./image/clientimage/shivachaaivideo/shivachaaivideo.png"
              }
              alt="img"
              className="w-[224px] h-[195px]"
            />
          </div>
        </div> */}
        <div className="flex justify-start gap-[32px] rounded-[16px] flex-end bg-white relative">
          <div className="flex   py-[16px] pl-[16px]">
            <img
              src={
                process.env.PUBLIC_URL + "./image/clientimage/video-header.png"
              }
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
              Generate High-Volume, Professional-Grade Audio Clips Instantly
              with Our Video Solution.
            </p>
            <p className="font-worksans text-base  font-normal text-[#212121]">
              Perfect for businesses and creators, this tool uses advanced tech
              to streamline workflows and ensure consistent branding for large
              projects.
            </p>
            <div className="mt-[20px]">
              <NavLink to="/generate-video">
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
      </div>
      <div>
        <div className="mt-[24px] mb-[16px]">
          <p className="font-worksans font-medium text-xl text-[#212121]">
            My Project
          </p>
        </div>
        {allSingleAudio?.length === 0 ? (
          <div className="bg-white flex flex-col h-[348px] items-center justify-center rounded-[16px]">
            <img
              src={
                process.env.PUBLIC_URL +
                "./image/clientimage/audiogenerator/audiolibrary.png"
              }
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
              className="mt-[5px] font-semibold font-worksans text-lg pb-[16px]"
            >
              You have not generated any Audio
            </p>
          </div>
        ) : (
          <>
            {showDeleteModal && (
              <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
                <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
                  <div className="flex justify-center items-center mb-[38px]">
                    <img
                      src={
                        process.env.PUBLIC_URL +
                        "./image/clientimage/deleteicon.png"
                      }
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

            <div className="bg-white rounded-[16px] p-[16px] ">
              <div className="">
                <div className="w-full  border rounded-lg overflow-hidden">
                  <table className="w-full bg-white rounded-[8px]   border-collapse  border-gray-300 overflow-hidden">
                    <thead className="bg-[#E8E8E8] ">
                      <tr className=" ">
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656] py-2 border-b border-gray-300">
                          ID
                        </th>
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656] py-2 border-b border-gray-300">
                          Audio Name
                        </th>
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656] py-2 border-b border-gray-300">
                          Language
                        </th>
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656] py-2 border-b border-gray-300">
                          Speaker
                        </th>
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656] py-2 border-b border-gray-300">
                          Created Date
                        </th>
                        <th className="px-4 text-start font-worksans font-normal text-base text-[#565656]  py-2 border-b border-gray-300">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {allSingleAudio?.map((item, ind) => {
                        return (
                          <tr
                            key={item.id}
                            className="hover:bg-[#E8E8E8] hover:rounded-[12px]"
                          >
                            <td className="px-4 py-2 font-worksans font-normal text-base text-[#565656]  border-b border-gray-300 ">
                              {ind + 1}
                            </td>
                            <td className="px-4 py-2 font-worksans font-normal text-base text-[#565656]  border-b border-gray-300">
                              <div
                                className="flex gap-2 items-center"
                                // onClick={() => fetchSingleAudio(item._id)}
                              >
                                {/* <img
                                  src={
                                    process.env.PUBLIC_URL +
                                    "./image/clientimage/audiogenerator/singleaudiotable.png"
                                  }
                                  alt="img"
                                  className="w-[40px] h-[40px]"
                                /> */}
                                {/* <div className="w-[30px] h-[30px] rounded-2xl flex justify-center items-center bg-[#E8E8E8] px-1 py-1 cursor-pointer">
<IoPlayCircleOutline className="text-xl" />
                                </div> */}
                                <AudioPlayer
                                  audioData={item?.audio_data}
                                  audioId={item._id}
                                  playingAudioId={playingAudioId}
                                  setPlayingAudioId={setPlayingAudioId}
                                />
                                <span>{item?.file_name}</span>
                              </div>
                            </td>
                            <td className="px-4 py-2 font-worksans font-normal text-base text-[#565656]  border-b border-gray-300">
                              {item?.language == "en"
                                ? "English"
                                : item?.language == "hi"
                                ? "Hindi"
                                : ""}
                            </td>
                            <td className="px-4 py-2 font-worksans font-normal text-base text-[#565656]  border-b border-gray-300">
                              {item?.speaker}
                            </td>
                            <td className="px-4 py-2 font-worksans font-normal text-base text-[#565656]  border-b border-gray-300">
                              {item?.created_at ? (
                                <ConvertTime datetime={item?.created_at} />
                              ) : (
                                "-"
                              )}
                            </td>
                            <td className=" py-2 border-b border-gray-300 font-worksans font-normal text-base text-[#565656] ">
                              <div className="w-28 flex gap-3 justify-center items-center">
                                <div
                                  className="flex gap-2 justify-center items-center cursor-pointer hover:bg-white hover:rounded-[12px] px-2 py-1"
                                  onClick={() => {
                                    setShowDeleteModal(true);
                                    setDeleteID(item?._id);
                                  }}
                                >
                                  <RiDeleteBin6Line />
                                  <span>Delete</span>
                                </div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
                <div className="pt-[16px] ">
                  <PaginationComponent
                    currentPage={currentPage}
                    pageSize={pageSize}
                    totalItems={totalItems}
                    onPageChange={handlePageChange}
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VideoLibrary;
