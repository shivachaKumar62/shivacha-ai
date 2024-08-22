// import React,{useState,useEffect} from 'react'
// import { AppSidebarNav } from './AppSidebarNav'
// import Nav from "../Nav"

// import "./AppSidebarNav.css"

// const AppSidebar = ({
//   showingSidebar,
//   setShowingSidebar,
//   setWindowWidth,
//   windowWidth,
// }) => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [widthPart, setWidthPart] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY >= 10) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setWindowWidth(width);
//       if (width < 768) {
//         setShowingSidebar(true);
//       } else {
//         setShowingSidebar(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);

//     // Set initial sidebar state based on window width
//     handleResize();

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

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
//         widthPart === true ? "top-[64px] " : "top-[124px] "
//       } fixed h-[100vh] z-20 ${
//         showingSidebar ? "w-[92px]" : "w-[296px]"
//       } bg-[#E8E8E8] overflow-y-auto px-4 mx-auto  pb-[100px]`}
//     >
//       <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
//     </div>
//   );
// };

// export default AppSidebar



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
//       } fixed  overflow-y-auto ${
//         showingSidebar ? "w-[92px] pl-[15px]" : "px-[36px]"
//       }  max-h-[90vh] bg-[#E8E8E8]`}
//     >
//       <div>
//         <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
//       </div>
//     </div>
//   );
// };

// export default AppSidebar;


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
//       className={`fixed ${showingSidebar?"left-0 px-[15px]":"left-0 px-[15px]"}   max-h-[90vh]    overflow-x-hidden pb-[60px]  bg-[#E8E8E8]`}
//     >
//       <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
//     </div>
//   );
// };

// export default AppSidebar;




import React, { useState, useEffect } from "react";
import { AppSidebarNav } from "./AppSidebarNav";
import Nav from "../Nav";
import "./AppSidebarNav.css";

const AppSidebar = ({ showingSidebar, setShowingSidebar }) => {
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
    <div
      className={`max-h-[100vh] overflow-x-hidden overflow-y-auto bg-[#E8E8E8] pb-[10px] transition-width duration-300`}
      style={{ width: showingSidebar ? "296px" : "92px" }}
    >
      <AppSidebarNav items={Nav} showingSidebar={showingSidebar} />
    </div>
  );
};

export default AppSidebar;
