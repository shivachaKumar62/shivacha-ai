import React, { useState,useEffect } from 'react'
import AppContent from '../component/AppContent'
import AppSidebar from '../component/AppSidebar'
import Header from '../pages/Header';
import "../component/AppSidebarNav.css"
import { FaAnglesLeft } from "react-icons/fa6";
const DefaultClientLayout = () => {
    const [showingSidebar,setShowingSidebar] = useState(true)
    const handleHideShowSidebar = () => {
        setShowingSidebar((data) => !data)
    }
     const [isSticky, setIsSticky] = useState(false);
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    
  return (
    <div>
      <div className="w-[100%] flex pt-[36px] px-[36px] bg-[#E8E8E8] ">
        <div className={` ${showingSidebar ? "w-[82px]" : "w-[296px]"}   `}>
          <div
            className={`${
              isSticky ? "sticky-headers" : ""
            } bg-[#E8E8E8] pt-[32px]  flex justify-between items-center`}
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
            <div
              className="pr-[8px] cursor-pointer"
              onClick={handleHideShowSidebar}
            >
              <FaAnglesLeft
                className={`${!showingSidebar ? "text-xl" : "text-base"}`}
              />
            </div>
          </div>

          <AppSidebar
            showingSidebar={showingSidebar}
            setShowingSidebar={setShowingSidebar}
          />
        </div>
        <div className=" w-[100%]  bg-[#F5F5F5] rounded-[30px] pb-[20px] mb-[20px]">
          <Header />

          <AppContent
            showingSidebar={showingSidebar}
            setShowingSidebar={setShowingSidebar}
          />
        </div>
      </div>
    </div>
  );
}

export default DefaultClientLayout



// import React, { useState, useEffect } from "react";
// import AppContent from "../component/AppContent";
// import AppSidebar from "../component/AppSidebar";
// import Header from "../pages/Header";
// import "../component/AppSidebarNav.css";
// import { FaAnglesLeft } from "react-icons/fa6";
// const DefaultClientLayout = () => {
//   const [showingSidebar, setShowingSidebar] = useState(false);
//   const handleHideShowSidebar = () => {
//     setShowingSidebar((data) => !data);
//   };
//   const [isSticky, setIsSticky] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY >= 10) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="flex">
//       <div
//         className={` ${
//           showingSidebar ? "w-[82px]" : "w-[296px]"
//         }   flex flex-col  bg-[#E8E8E8] `}
//       >
    
//           <div
//             className={`${
//               isSticky ? "sticky-headers" : ""
//             } bg-[#E8E8E8] mt-[32px] ${showingSidebar?"px-[20px]":"px-[36px]"}  flex justify-between items-center`}
//           >
//             {showingSidebar ? (
//               <img
//                 src={process.env.PUBLIC_URL + "favcon.png"}
//                 className="w-[40px] h-[40px]"
//               />
//             ) : (
//               <img
//                 src={process.env.PUBLIC_URL + "hd-logo.png"}
//                 className="w-[176px] h-[40px]"
//               />
//             )}
//             <div
//               className="pr-[8px] cursor-pointer"
//               onClick={handleHideShowSidebar}
//             >
//               <FaAnglesLeft
//                 className={`${!showingSidebar ? "text-xl" : "text-base"}`}
//               />
//             </div>
//           </div>
    
//         <div
//           className={` ${
//             showingSidebar ? "w-[82px]" : "w-[296px]"
//           }  bg-red-500 `}
//         >
//           <AppSidebar
//             showingSidebar={showingSidebar}
//             setShowingSidebar={setShowingSidebar}
//           />
//         </div>
//       </div>
//       <div className=" w-full bg-[#F5F5F5] rounded-[30px]">
//         <Header />

//         <AppContent
//           showingSidebar={showingSidebar}
//           setShowingSidebar={setShowingSidebar}
//         />
//       </div>
//     </div>
//   );
// };

// export default DefaultClientLayout;
