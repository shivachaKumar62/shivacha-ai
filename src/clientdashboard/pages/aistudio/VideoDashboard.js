 import client_six from "../../sidebarimage/client-six.svg";
 import React, { useState, useEffect } from "react";
 import { FaChevronRight } from "react-icons/fa6";
 import bgimage from "../../sidebarimage/bgimage.png";
 import { NavLink } from "react-router-dom";
 import { GoSearch } from "react-icons/go";
 const VideoDashboard = () => {
    const [showFolder,setShowFolder] = useState(false)
    const handleClick = () => {
setShowFolder(true)
    }
   return (
     <div>
       <div className="flex justify-start gap-[32px]  rounded-[16px] flex-end bg-white relative">
         <div className="flex   py-[16px] pl-[16px]">
           <img
             src={`
              
              ${process.env.PUBLIC_URL}/image/clientimage/video-header.png`}
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
             Generate Professional Videos at Scale with Our Advanced Bulk Video
             Generator
           </p>
           <p className="font-worksans text-base  font-normal text-[#212121]">
             The Bulk Video Generator simplifies video production, enabling
             businesses and creators to generate high-quality videos quickly and
             consistently.
           </p>
           <div className="mt-[20px] mb-[16px]">
             <NavLink to="/Shivacha-Ai-Studio/create-bulk-video">
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
         {showFolder ? (
           <div className="flex justify-between items-center mt-[16px]">
             <div className="px-[8px] py-[8px] rounded-[12px] bg-[#E8E8E8] ">
               <div className="flex flex-col">
                 <img
                   src={` ${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/video-folder.png`}
                   alt="img"
                   className="w-[238px] h-[176px]"
                 />
                 <div className="flex items-center gap-3 pt-[12px] pb-[8px] pl-4">
                   <img
                     src={`${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/small-video-icon.png`}
                     alt="img"
                     className="w-[24px] h-[24px]"
                   />
                   <div className="flex flex-col">
                     <span className="font-worksans font-medium text-sm text-[#000000]">
                       Untitled Video
                     </span>
                     <span className="font-worksans font-medium text-xs text-[#565656]">
                       July 2,2024, 2:24 AM
                     </span>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         ) : (
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
export default VideoDashboard