

// import React, { useState, useEffect } from "react";
// import { AppContent, AppSidebar, AppHeader } from "../component/index";

// const DefaultStudentLayout = () => {
//   const [showSidebar, setShowSidebar] = useState(window.innerWidth >= 768);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth;
//       setWindowWidth(width);
//       setShowSidebar(width >= 768);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="h-[100vh] overflow-y-hidden overflow-x-hidden">
//       <div className="col-span-12 ">
//         <AppHeader setShowSidebar={setShowSidebar} showSidebar={showSidebar} />
//       </div>
//       <div className="w-[100%] border-t-2 flex">
//         {/* {showSidebar && windowWidth >= 768 && (
//           <div className="flex-2 w-64">
//             <AppSidebar />
//           </div>
//         )} */}
//         {showSidebar && (
//           <div
//             className={`${
//               windowWidth > 768
//                 ? "flex-2 w-64"
//                 : "fixed left-0 top-[88px] inset-0 z-20 bg-black bg-opacity-50 border-t border-gray-200"
//             }`}
//           >
//             <div className={`${windowWidth < 768 && "w-[300px]"}`}>
//               <AppSidebar
//                 setShowSidebar={setShowSidebar}
//                 showSidebar={showSidebar}
//               />
//             </div>
//           </div>
//         )}

//         <div
//           className={`flex-1 ${
//             showSidebar && windowWidth >= 768 ? "w-auto" : "w-full"
//           } col-span-12`}
//         >
//           <AppContent />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DefaultStudentLayout;


import React from "react";
import {
  AppContent,
  AppSidebar,
  // AppFooter,
  AppHeader,
} from "../component/index";

const DefaultLayout = () => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;

