



import React, { useState, useMemo, useEffect } from "react";
import { BsDownload } from "react-icons/bs";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { MdDelete } from "react-icons/md";
import client_six from "../../sidebarimage/client-six.svg";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import bgimage from "../../sidebarimage/bgimage.png";
import { deleteRequest, getRequest } from "../../../api";
import ConvertTime from "../../customcomponent/ConvertTime";

import AudioPlayer from "../../customcomponent/AudioPlayer";

const AudioLibrary = () => {
  const [allSingleAudio, setAllSingleAudio] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

   const [totalItems, setTotalItems] = useState(0);
   const [playingAudioId, setPlayingAudioId] = useState(null);
  const [deleteId, setDeleteID] = useState(null);

  const fetchAllSingleAudio = async () => {
    try {
      const response = await getRequest("/single_audio");
      setAllSingleAudio(response?.data?.audio_files);
      
    } catch (error) {
      toast.error("Failed to fetch Withdraw Request");
    }
  };
  useEffect(() => {
    fetchAllSingleAudio();
  }, []);
  


  

  const handleDelete = async () => {
    try {
      await deleteRequest(`/single_audio/${deleteId}`);
      toast.success("Audio deleted successfully");
      fetchAllSingleAudio(); 
      setShowDeleteModal(false);
      fetchAllSingleAudio(); 
    } catch (error) {
      toast.error("Failed to delete Audio");
    }
  };

 

const indexedBulkAudioList = useMemo(() => {
  return allSingleAudio?.map((category, index) => ({
    ...category,
    index: index + 1,
  }));
}, [allSingleAudio]);
const columns = useMemo(
  () => [
    {
      accessorKey: "index",
      header: "ID",
      size: 150,
    },
    {
      accessorKey: "AudioName",
      header: "Audio Name",
      size: 150,
      Cell: ({ row }) => {
        return (
          <div className="flex items-center gap-2">
            <AudioPlayer
              audioData={row?.original?.audio_data}
              audioId={row.original.index}
              playingAudioId={playingAudioId}
              setPlayingAudioId={setPlayingAudioId}
            />
            <span>{row?.original?.file_name}</span>
          </div>
        );
      },
    },

    {
      accessorKey: "language",
      header: "Language",
      size: 150,
      Cell: ({ row }) => (
        <span>{row?.original?.language === "en" ? "English" : "Hindi"}</span>
      ),
    },
    {
      accessorKey: "speaker",
      header: "Speaker",
      size: 150,
    },
    {
      accessorKey: "created_at",
      header: "Created Date",
      size: 150,
      Cell: ({ row }) => <ConvertTime datetime={row?.original?.created_at} />,
    },

    {
      accessorKey: "actions",
      header: "Actions",
      size: 150,
      Cell: ({ row }) => {
        const audioBlob = new Blob(
          [
            new Uint8Array(
              atob(row?.original?.audio_data)
                .split("")
                .map((c) => c.charCodeAt(0))
            ),
          ],
          { type: "audio/wav" }
        );
        const url = URL.createObjectURL(audioBlob);
        return (
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <span
              className="bg-white cursor-pointer flex items-center justify-center  w-[25px] h-[25px] rounded-full"
              onClick={() => {
                setShowDeleteModal(true);
                setDeleteID(row?.original?._id);
              }}
            >
              <MdDelete className="text-lg text-red-500" />
            </span>
            <a href={url} download={row.original.file_name}>
              <span className="bg-white cursor-pointer flex items-center justify-center  w-[25px] h-[25px] rounded-full">
                <BsDownload />
              </span>
            </a>
          </div>
        );
      },
    },
  ],
  [playingAudioId]
);
const table = useMaterialReactTable({
  columns,
  data: indexedBulkAudioList || [],
});

  return (
    <div>
      <div className="flex justify-start flex-end bg-white relative">
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
              with Our Bulk Audio Solution.
            </p>
            <p className="font-worksans text-base  font-normal text-[#212121]">
              Perfect for businesses and creators, this tool uses advanced tech
              to streamline workflows and ensure consistent branding for large
              projects.
            </p>
            <div className="mt-[20px] mb-[16px]">
              <NavLink to="/generate-audio">
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
            Audio Library
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

            
            {/* <MaterialReactTable columns={columns} data={indexedBulkAudioList} /> */}
          </>
        )}
      </div>
    </div>
  );
};

export default AudioLibrary;

