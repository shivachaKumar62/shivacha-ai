// // import React, { useState,useEffect } from 'react'
// // import AppContent from '../component/AppContent'
// // import AppSidebar from '../component/AppSidebar'
// // import Header from '../pages/Header';
// // import "../component/AppSidebarNav.css"
// // import { FaAnglesLeft } from "react-icons/fa6";
// // const DefaultClientLayout = () => {
// //     const [showingSidebar,setShowingSidebar] = useState(false)
// //     const handleHideShowSidebar = () => {
// //         setShowingSidebar((data) => !data)
// //     }
// //      const [isSticky, setIsSticky] = useState(false);
// //     const handleScroll = () => {
// //       if (window.scrollY >= 10) {
// //         setIsSticky(true);
// //       } else {
// //         setIsSticky(false);
// //       }
// //     };

// //     useEffect(() => {
// //       window.addEventListener("scroll", handleScroll);
// //       return () => {
// //         window.removeEventListener("scroll", handleScroll);
// //       };
// //     }, []);
    
// //   return (
// //     <div>
// //       <div className="w-[100%] flex pt-[36px] px-[36px] bg-[#E8E8E8] ">
// //         <div className={` ${showingSidebar ? "w-[82px]" : "w-[296px]"} h-[100vh] overflow-y-auto  `}>
// //           <div
// //             className={`${
// //               isSticky ? "sticky-headers" : ""
// //             } bg-[#E8E8E8] pt-[32px]  flex justify-between items-center`}
// //           >
// //             {showingSidebar ? (
// //               <img
// //                 src={process.env.PUBLIC_URL + "favcon.png"}
// //                 className="w-[40px] h-[40px]"
// //               />
// //             ) : (
// //               <img
// //                 src={process.env.PUBLIC_URL + "hd-logo.png"}
// //                 className="w-[176px] h-[40px]"
// //               />
// //             )}
// //             <div
// //               className="pr-[8px] cursor-pointer"
// //               onClick={handleHideShowSidebar}
// //             >
// //               <FaAnglesLeft
// //                 className={`${!showingSidebar ? "text-xl" : "text-base"}`}
// //               />
// //             </div>
// //           </div>

// //           <AppSidebar
// //             showingSidebar={showingSidebar}
// //             setShowingSidebar={setShowingSidebar}
// //           />
// //         </div>
// //         <div className=" w-[100%]  bg-[#F5F5F5] rounded-[30px] pb-[20px] mb-[20px]">
// //           <Header />

// //           <AppContent
// //             showingSidebar={showingSidebar}
// //             setShowingSidebar={setShowingSidebar}
// //           />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default DefaultClientLayout



// // import React, { useState, useEffect } from "react";
// // import AppContent from "../component/AppContent";
// // import AppSidebar from "../component/AppSidebar";
// // import Header from "../pages/Header";
// // import "../component/AppSidebarNav.css";
// // import { FaAnglesLeft } from "react-icons/fa6";
// // const DefaultClientLayout = () => {
// //   const [showingSidebar, setShowingSidebar] = useState(false);
// //    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
// //     const [isSticky, setIsSticky] = useState(false);
// //   const handleHideShowSidebar = () => {
// //     if (windowWidth < 768) {
// //     setShowingSidebar((data) => !data);
// //     }else{
// //       setShowingSidebar((data) => !data)
// //     }
// //   };
 
// //   const handleScroll = () => {
// //     if (window.scrollY >= 10) {
// //       setIsSticky(true);
// //     } else {
// //       setIsSticky(false);
// //     }
// //   };
// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWindowWidth(window.innerWidth);
// //     };

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //     };
// //   }, []);
  
// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //     };
// //   }, []);

// //   return (
// //     <div className="flex bg-[#E8E8E8]">
// //       <div className="pt-[36px] ">
// //         <div
// //           className={` ${
// //             showingSidebar ? "w-[92px]" : "w-[296px]"
// //           } h-[100vh]   `}
// //         >
// //           <div
// //             className={`${
// //               isSticky ? "sticky-headers" : "px-[20px] "
// //             }   flex gap-2 items-center justify-between py-[32px]`}
// //           >
// //             {showingSidebar ? (
// //               <img
// //                 src={process.env.PUBLIC_URL + "favcon.png"}
// //                 className="w-[40px] h-[40px]"
// //               />
// //             ) : (
// //               <img
// //                 src={process.env.PUBLIC_URL + "hd-logo.png"}
// //                 className="w-[176px] h-[40px]"
// //               />
// //             )}
// //             <div className=" cursor-pointer" onClick={handleHideShowSidebar}>
// //               <FaAnglesLeft
// //                 className={`${!showingSidebar ? "text-xl" : "text-base"}`}
// //               />
// //             </div>
// //           </div>
// //           <AppSidebar
// //             showingSidebar={showingSidebar}
// //             setShowingSidebar={setShowingSidebar}
// //           />
// //         </div>
// //       </div>
// //       <div className="  w-[100%] mt-[36px] bg-[#F5F5F5] rounded-[30px]">
// //         <Header />

// //         <AppContent
// //           showingSidebar={showingSidebar}
// //           setShowingSidebar={setShowingSidebar}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default DefaultClientLayout;






// import React, { useState, useEffect } from "react";
// import AppContent from "../component/AppContent";
// import AppSidebar from "../component/AppSidebar";
// import Header from "../pages/Header";
// import "../component/AppSidebarNav.css";
// import { FaAnglesLeft } from "react-icons/fa6";

// const DefaultClientLayout = () => {
//   const [showingSidebar, setShowingSidebar] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [isSticky, setIsSticky] = useState(false);

//   const handleHideShowSidebar = () => {
//       setShowingSidebar((prev) => !prev); 
//   };

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

//   return (
//     <div className="flex bg-[#E8E8E8]">
//       <div className="pt-[36px]">
//         <div
//           className={`${
//             showingSidebar > 768 ? "w-[296px]" : "w-[92px]"
//           } h-[100vh] w-[100%]`}
//         >
//           <div
//             className={`${
//               isSticky ? "sticky-headers" : "px-[20px]"
//             }  flex w-[100%]  gap-2 items-center justify-between py-[32px]`}
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
//               className="cursor-pointer"
//               onClick={() => handleHideShowSidebar()}
//             >
//               <FaAnglesLeft
//                 className={`${showingSidebar ? "text-base" : "text-xl"}`}
//               />
//             </div>
//           </div>
//           <AppSidebar
//             showingSidebar={showingSidebar}
//             setShowingSidebar={setShowingSidebar}
//             setWindowWidth={setWindowWidth}
//             windowWidth={windowWidth}
//           />
//         </div>
//       </div>
//       <div className="w-full  mt-[36px] bg-[#F5F5F5] rounded-[30px]">
//         <Header showingSidebar={showingSidebar} />
//         <AppContent
//           showingSidebar={showingSidebar}
//           setWindowWidth={setWindowWidth}
//           setShowingSidebar={setShowingSidebar}
//         />
//       </div>
//     </div>
//   );
// };

// export default DefaultClientLayout;












// import React, { useState, useEffect } from "react";
// import AppContent from "../component/AppContent";
// import AppSidebar from "../component/AppSidebar";
// import Header from "../pages/Header";
// import "../component/AppSidebarNav.css";
// import { FaAnglesLeft } from "react-icons/fa6";

// const DefaultClientLayout = () => {
//   const [showingSidebar, setShowingSidebar] = useState(false);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   const [isSticky, setIsSticky] = useState(false);

//   const handleHideShowSidebar = () => {
//       setShowingSidebar((prev) => !prev); 
//   };

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

//   return (
//     <div className="flex gap-[25px]  max-h-[100vh] w-full h-[100vh]  bg-[#E8E8E8] ">
//       <div
//         className={`pt-[36px]  max-h-[100vh]  ${
//           !showingSidebar ? "w-[296px] " : ""
//         }  `}
//       >
//         <div
//           className={`${
//             isSticky ? "sticky-headers" : "px-[20px]"
//           } flex items-center justify-between   pl-2  ${
//             !showingSidebar ? " " : ""
//           } py-[32px]`}
//         >
//           {showingSidebar ? (
//             <img
//               src={process.env.PUBLIC_URL + "favcon.png"}
//               className="w-[40px] h-[40px]"
//             />
//           ) : (
//             <img
//               src={process.env.PUBLIC_URL + "hd-logo.png"}
//               className="w-[176px] h-[40px]"
//             />
//           )}
//           <div
//             className="cursor-pointer pl-4"
//             onClick={() => handleHideShowSidebar()}
//           >
//             <FaAnglesLeft
//               className={`${showingSidebar ? "text-base" : "text-xl"} `}
//             />
//           </div>
//         </div>
//         <div className={`${!showingSidebar ? "" : ""}  `}>
//           <AppSidebar
//             showingSidebar={showingSidebar}
//             setShowingSidebar={setShowingSidebar}
//             setWindowWidth={setWindowWidth}
//             windowWidth={windowWidth}
//           />
//         </div>
//       </div>
//       <div
//         className={`
//         w-full  mt-[36px] bg-[#F5F5F5] rounded-[30px]  `}
//       >
//         <Header showingSidebar={showingSidebar} />
//         <AppContent
//           showingSidebar={showingSidebar}
//           setWindowWidth={setWindowWidth}
//           setShowingSidebar={setShowingSidebar}
//         />
//       </div>
//     </div>
//   );
// };

// export default DefaultClientLayout;




import React, { useState, useEffect } from "react";
import AppContent from "../component/AppContent";
import AppSidebar from "../component/AppSidebar";
import Header from "../pages/Header";
import "../component/AppSidebarNav.css";
import { FaAnglesLeft } from "react-icons/fa6";
import { NavLink, useLocation } from "react-router-dom";

const DefaultClientLayout = () => {
  const location = useLocation();

  const [showingSidebar, setShowingSidebar] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);


  // const handleHideShowSidebar = () => {
  //   setShowingSidebar((prev) => !prev);
  // };

  

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setWindowWidth(width);
  //     if (width < 768) {
  //       setShowingSidebar(true);
  //     } else {
  //       setShowingSidebar(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Set initial sidebar state based on window width
  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
    const handleHideShowSidebar = () => {
      setShowingSidebar((prev) => !prev);
    };

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        if (width < 768) {
          setShowingSidebar(false); // Hide the sidebar on small screens
        } else {
          setShowingSidebar(true); // Show the sidebar on larger screens
        }
      };

      window.addEventListener("resize", handleResize);

      // Set initial sidebar state based on window width
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);


  

  return (
    <div className="flex max-h-[100vh] w-full h-[100vh] bg-[#E8E8E8]">
      <div className="fixed top-0 z-10 w-full bg-[#E8E8E8]">
        <div className="flex w-full">
          <div
            className={`flex items-center justify-around  py-[18px] ${
              showingSidebar ? "w-[296px] px-5" : "w-[92px] px-2"
            }`}
          >
            {showingSidebar ? (
              <NavLink to="/">
                <img
                  src={`${process.env.PUBLIC_URL}/hd-logo.png`}
                  className={`
                    w-[176px]
                   h-[40px]`}
                  alt="Logo"
                />
              </NavLink>
            ) : (
              <NavLink to='/'>
                <img
                  src={`${process.env.PUBLIC_URL}/favcon.png`}
                  className={`h-[40px] w-[40px]`}
                  alt="Logo"
                />
              </NavLink>
            )}

            <div
              className="cursor-pointer pl-4"
              onClick={() => handleHideShowSidebar()}
            >
              <FaAnglesLeft
                className={`${showingSidebar ? "text-xl" : "text-base"}`}
              />
            </div>
          </div>
          <div className="flex-1">
            <Header
              showingSidebar={showingSidebar}
              currentRoute={location.pathname}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full mt-[85px] h-[calc(100vh-85px)]">
        <AppSidebar
          showingSidebar={showingSidebar}
          setShowingSidebar={setShowingSidebar}
          setWindowWidth={setWindowWidth}
          windowWidth={windowWidth}
        />
        <AppContent
          showingSidebar={showingSidebar}
          setWindowWidth={setWindowWidth}
          setShowingSidebar={setShowingSidebar}
        />
      </div>
    </div>
  );
};

export default DefaultClientLayout;
