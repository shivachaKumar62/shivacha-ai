import React,{useState,useEffect} from 'react'
import { AppSidebarNav } from './AppSidebarNav'
import Nav from "../Nav"

import "./AppSidebarNav.css"

const AppSidebar = ({showingSidebar, setShowingSidebar}) => {
    
    const [isSticky, setIsSticky] = useState(false);
    const [widthPart,setWidthPart] = useState(false)
    console.log(widthPart, "window.scrollY");
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
    useEffect(() => {
      if (window.scrollY>=10){
setWidthPart(true);
      }else{
        setWidthPart(false)
      }
    },[window.scrollY])
  return (
    <div
      className={` ${
        widthPart === true ? "top-[64px] " : "top-[124px] "
      } fixed h-[100vh] overscroll-y-auto`}
    >
      <div>
        <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
      </div>
    </div>
  );
}

export default AppSidebar



// import React, { useState, useEffect } from "react";
// import { AppSidebarNav } from "./AppSidebarNav";
// import Nav from "../Nav";

// import "./AppSidebarNav.css";

// const AppSidebar = ({ showingSidebar, setShowingSidebar }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [widthPart, setWidthPart] = useState(false);
//   console.log(widthPart, "window.scrollY");
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
//   useEffect(() => {
//     if (window.scrollY >= 10) {
//       setWidthPart(true);
//     } else {
//       setWidthPart(false);
//     }
//   }, [window.scrollY]);
//   return (
//     <div
//       className={` ${
//         widthPart === true ? "top-[64px] " : "top-[127px] "
//       } fixed  ${
//         showingSidebar ? "w-[82px] pl-[15px]" : "px-[36px]"
//       }  overflow-y-auto max-h-[80vh] `}
//     >
//       <div>
//         <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
//       </div>
//     </div>
//   );
// };

// export default AppSidebar;
