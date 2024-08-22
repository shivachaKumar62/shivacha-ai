import client_six from "../../sidebarimage/client-six.svg";
import React, { useState, useMemo, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa6";
import bgimage from "../../sidebarimage/bgimage.png";
import { NavLink } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { deleteRequest } from "../../../api";
import { BsDownload } from "react-icons/bs";
import { toast } from "react-toastify";
import { getRequest } from "../../../api";
import AudioPlayer from "../../customcomponent/AudioPlayer";
import { MdDelete } from "react-icons/md";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import ConvertTime from "../../customcomponent/ConvertTime";
const VoiceCloneDashboard = () => {
  const [data,setData] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false);
   const [deleteId, setDeleteID] = useState(null);
  
  const [playingAudioId, setPlayingAudioId] = useState(null);
  const fetchBulkAudio = async () => {
    try {
      const response = await getRequest("/cloned_audios");
      setData(response?.data?.data);
    } catch (error) {
      toast.error("Failed to fetch Bulk Audio");
    }
  };
  useEffect(() => {
    fetchBulkAudio()
  },[])
  const indexedBulkAudioList = useMemo(() => {
    return data.map((category, index) => ({
      ...category,
      index: index + 1,
    }));
  }, [data]);
  const handleDelete = async () => {
    try {
      await deleteRequest(`/delete_cloned_audio/${deleteId}`);
      setData((prevData) =>
        prevData.filter((item) => item.audio_id !== deleteId)
      );
      toast.success("Clonned voice deleted successfully");
      setShowDeleteModal(false);
      fetchBulkAudio()
    } catch (error) {
      toast.error("Failed to delete Clonned voice");
    }
  };
  const columns = useMemo(
    () => [
      {
        accessorKey: "index",
        header: "ID",
        size: 50,
      },
      {
        accessorKey: "audio_data",
        header: "Audio",
        size: 150,
        Cell: ({ row }) => (
          <AudioPlayer
            audioData={row.original.audio_data}
            audioId={row.original.audio_id}
            playingAudioId={playingAudioId}
            setPlayingAudioId={setPlayingAudioId}
          />
        ),
      },
      {
        accessorKey: "filename",
        header: "File",
        size: 150,
      },
      {
        accessorKey: "language",
        header: "Language",
        size: 150,
        Cell: ({ row }) => row.original.language === "en"?"English":"Hindi"
      },
      {
        accessorKey: "temperature",
        header: "Accent Strength",
        size: 150,
      },
      {
        accessorKey: "updatedAt",
        header: "Date",
        size: 200,
        Cell: ({ row }) => <ConvertTime datetime={row?.original?.created_at} />,
      },
      {
        accessorKey: "actions",
        header: "Actions",
        size: 150,
        Cell: ({ row }) => {
          return (
            <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
               <button
                
                onClick={() => {
                  setShowDeleteModal(true);
                  setDeleteID([row.original.audio_id]);
                }}
                
              >
                <MdDelete
                  className={`text-lg text-red-500
                  `}
                />
              </button>
              
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
      {showDeleteModal && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
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
      <div className="flex justify-start gap-[32px]  rounded-[16px] flex-end bg-white relative">
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
          className="flex flex-col pr-[16px]"
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
            Use Shivacha Ai's innovative technology to let your unique voice
            shine.
          </p>
          <p className="font-worksans text-base  font-normal text-[#212121]">
            Amplify your voice, captivate your audience, and leave a lasting
            impression with Shivacha AI's cutting-edge audio solutions.
          </p>
          <div className="mt-[20px] mb-[16px]">
            <NavLink to="/create-clonning">
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
        <div className="flex justify-between items-center ">
          <p className="font-worksans font-medium text-xl text-[#212121]">
            Your Bulk Video
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
        {data?.length === 0 ? (
          <div
            className="flex flex-col h-[348px] items-center justify-center"
            
          >
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
              className="mt-[5px]  font-semibold font-worksans text-lg pb-[16px]"
            >
              You have not generate the Audio
            </p>
          </div>
        ):(
        <div className="mt-[20px]">
          <MaterialReactTable columns={columns} data={indexedBulkAudioList} />
        </div>
         )}
      </div>
    </div>
  );
};
export default VoiceCloneDashboard;
