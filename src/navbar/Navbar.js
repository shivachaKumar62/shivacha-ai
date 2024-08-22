



// import React, { useState, useEffect,useRef } from "react";
// import { FaAngleDown } from "react-icons/fa6";
// import { MdArrowOutward } from "react-icons/md";
// import Button from "../customcomponent/Button";
// import "../css/navbar.css";
// import ShowModal from "../customcomponent/ShowModal";
// import { RxCross2 } from "react-icons/rx";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const [activeModal, setActiveModal] = useState(false);
//   const [responsiveNav,setResponsiveNav] = useState(false)

//   const divRef = useRef(null);
//   const modalRef = useRef(null);
  
//   const handleClick = () => {
// setResponsiveNav((data) => !data)

//   }
//   const handleClose = () => {
//     setResponsiveNav((data) => !data)
//   }
//   const navigate = useNavigate();
// useEffect(() => {
//   AOS.init({
//     duration: 1000,
//     easing: "ease-out",
//     once: true,
//   });
// }, []);
//   const handleScroll = () => {
//     if (window.scrollY > 20) {
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

//   const useCaseData = [
//     {
//       id: 1,
//       key: "AI Marketing Video Generator",
//       path: "/generate-bulk",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 2,
//       key: "Social Media Video Generator",
//       path: "/social-media",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 3,
//       key: "AI Promo video Generator",
//       path: "/promo-bulk",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 4,
//       key: "Campain Video Generator",
//       path: "/",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 5,
//       key: "Corporate Video Generator",
//       path: "/corporate-video",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 6,
//       key: "Personalized Video Generator",
//       path: "/",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 7,
//       key: "AI Video meme Generator",
//       path: "/video-meme",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 8,
//       key: "Photo Video Generate",
//       path: "/",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//     {
//       id: 9,
//       key: "AI Script to Video Generator",
//       path: "/script-video",
//       value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//     },
//   ];
// const companyData = [
//   {
//     id: 1,
//     key: "Blog",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
//   {
//     id: 2,
//     key: "About Us",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
//   {
//     id: 3,
//     key: "Careers ",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
//   {
//     id: 4,
//     key: "Supports ",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
//   {
//     id: 5,
//     key: "Contact Us ",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
//   {
//     id: 6,
//     key: "Safety & Ethics ",
//     value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
//   },
// ];


// useEffect(() => {
//   const handleClickOutside = (event) => {
//     if (
//       divRef.current &&
//       !divRef.current.contains(event.target) &&
//       (!modalRef.current || !modalRef.current.contains(event.target))
//     ) {
//       setActiveModal(null);
//     }
//   };

//   const handleMouseLeave = (event) => {
//     if (divRef.current && !divRef.current.contains(event.relatedTarget)) {
//       setActiveModal(null);
//     }
//   };

//   document.addEventListener("mousedown", handleClickOutside);
//   if (divRef.current) {
//     divRef.current.addEventListener("mouseleave", handleMouseLeave);
//   }

//   return () => {
//     document.removeEventListener("mousedown", handleClickOutside);
//     if (divRef.current) {
//       divRef.current.removeEventListener("mouseleave", handleMouseLeave);
//     }
//   };
// }, []);

//   return (
//     <div
//       className={` ${isSticky ? "sticky-header" : "bg-white"} w-full `}
//       ref={divRef}
//     >
//       <div className="container relative">
//         <div className="max-sm:h-[30px] sm:h-[96px] flex justify-between items-center ">
//           <div className="cursor-pointer" onClick={() => navigate("/")}>
//             <img
//               src={process.env.PUBLIC_URL + "hd-logo.png"}
//               alt="Logo"
//               className="max-sm:w-[124px] sm:w-[245px] sm:h-[56px] max-sm:h-[28px]"
//             />
//           </div>
//           <div
//             className="max-sm:visible sm:hidden"
//             onClick={() => handleClick()}
//           >
//             <GiHamburgerMenu />
//           </div>
//           {/* responsive part start */}
//           {responsiveNav && (
//             <>
//               <div className="absolute top-[70px] left-0 w-full bg-white z-10">
//                 <div className="flex hover:bg-blue-590 justify-end px-4 py-2  ">
//                   <span
//                     className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
//                     onClick={handleClose}
//                   >
//                     <RxCross2 className="text-xl text-white" />
//                   </span>
//                 </div>

//                 <div className="flex gap-4 py-4 flex-col justify-start pl-6">
//                   <p
//                     className={`font-worksans cursor-pointer text-base font-medium text-[#000000]  `}
//                     onClick={() => navigate("/")}
//                   >
//                     Home
//                   </p>
//                   <div
//                     className="flex items-center gap-1 cursor-pointer relative   "
//                     onMouseEnter={() => setActiveModal("useCase")}
//                   >
//                     <p className="font-worksans text-base font-medium text-[#000000]">
//                       Use Case
//                     </p>
//                     <span className="absolute left-[22%]">
//                       <FaAngleDown />
//                     </span>
//                   </div>
//                   <div
//                     className="flex items-center gap-1 cursor-pointer relative"
//                     onMouseEnter={() => setActiveModal("Feature")}
//                   >
//                     <p className="font-worksans text-base font-medium text-[#000000]">
//                       Feature
//                     </p>
//                     <span className="absolute left-[22%]">
//                       <FaAngleDown />
//                     </span>
//                   </div>
//                   <div
//                     className="flex items-center gap-1 cursor-pointer relative"
//                     onMouseEnter={() => setActiveModal("business")}
//                   >
//                     <p className="font-worksans text-base font-medium text-[#000000]">
//                       Business
//                     </p>
//                     <span className="absolute left-[22%]">
//                       <FaAngleDown />
//                     </span>
//                   </div>
//                   <div
//                     className="flex items-center gap-1 cursor-pointer relative"
//                     onMouseEnter={() => setActiveModal("Company")}
//                     onMouseLeave={() => setActiveModal(null)}
//                   >
//                     <p className="font-worksans text-base font-medium text-[#000000]">
//                       Company
//                     </p>
//                     <span className="absolute left-[22%]">
//                       <FaAngleDown />
//                     </span>
//                   </div>
//                   <p className="font-worksans cursor-pointer text-base font-medium text-[#000000]">
//                     Pricing
//                   </p>
//                 </div>
//                 <div className="flex justify-center items-center pb-5 ">
//                   <button
//                     className={`flex items-center gap-3 w-[50%]  border-blue-500 cursor-pointer bg-blue-500 px-4 py-3 rounded-full  justify-center`}
//                   >
//                     <span
//                       className={`text-white font-worksans max-sm:text-[14px] sm:text-base font-medium`}
//                     >
//                       Get Start
//                     </span>
//                     <span
//                       className={`text-blue-500 bg-white rounded-full px-1 py-1`}
//                     >
//                       <MdArrowOutward />
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             </>
//           )}

//           {/* responsive part end */}
//           <div className="flex gap-6 items-center max-sm:hidden sm:vizible">
//             <p
//               className="font-worksans cursor-pointer text-base font-medium text-[#000000]"
//               onClick={() => navigate("/")}
//             >
//               Home
//             </p>
//             <div
//               className="flex items-center gap-1 cursor-pointer relative"
//               onMouseEnter={() => setActiveModal("useCase")}
//             >
//               <p className="font-worksans text-base font-medium text-[#000000]">
//                 Use Case
//               </p>
//               <span>
//                 <FaAngleDown />
//               </span>
//             </div>
//             <div
//               className="flex items-center gap-1 cursor-pointer"
//               onMouseEnter={() => setActiveModal("Feature")}
//             >
//               <p className="font-worksans text-base font-medium text-[#000000]">
//                 Feature
//               </p>
//               <span>
//                 <FaAngleDown />
//               </span>
//             </div>
//             <div
//               className="flex items-center gap-1 cursor-pointer"
//               onMouseEnter={() => setActiveModal("business")}
//             >
//               <p className="font-worksans text-base font-medium text-[#000000]">
//                 Business
//               </p>
//               <span>
//                 <FaAngleDown />
//               </span>
//             </div>
//             <div
//               className="flex items-center gap-1 cursor-pointer"
//               onMouseEnter={() => setActiveModal("Company")}
//             >
//               <p className="font-worksans text-base font-medium text-[#000000]">
//                 Company
//               </p>
//               <span>
//                 <FaAngleDown />
//               </span>
//             </div>
//             <p className="font-worksans cursor-pointer text-base font-medium text-[#000000]">
//               Pricing
//             </p>
//             <Button
//               text="Get Start"
//               bg="[#47BBFF]"
//               hoverBg="[#0096FF]"
//               textColor="white"
//               iconBg="white"
//               iconText="blue-500"
//               borderPart=""
//               path="/login"
//                 textHover="white"
//                 iconTextHover="[#0096FF]"
//                 iconbgHover="white"
               
//             />
//           </div>
//         </div>
        
//         {activeModal && (
//           <div
//             className="absolute max-sm:w-full max-sm:left-0 max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0 "
//             data-aos="fade-up"
//             ref={modalRef}
//           >
//             {activeModal === "useCase" && (
//               <ShowModal
//                 img="usecase"
//                 data="Use Cases"
//                 setActiveModal={setActiveModal}
//                 useCaseData={useCaseData}
//               />
//          )} 
//             {activeModal === "Company" && (
//               <ShowModal
//                 img="usecase"
//                 useCaseData={companyData}
//                 data="Company"
//                 setActiveModal={setActiveModal}
//               />
//             )}
//             {activeModal === "Feature" && (
//               <FeatureData data="Feature" setActiveModal={setActiveModal} />
//             )}
//             {activeModal === "business" && (
//               <BusinessData data="Business" setActiveModal={setActiveModal} />
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Navbar;



// export const FeatureData = ({ data, setActiveModal }) => {
//   const handleClos = () => {
//     setActiveModal((data) => !data);
//   };
//   return (
//     <div
//       className="bg-white  max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh] shadow-md rounded-2xl  z-10"
//       style={{
//         border: "6px solid rgba(0,0,0,0.1)",
//       }}
//     >
//       <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
//         <span className="font-worksans font-semibold text-lg">{data}</span>
//         <span
//           className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
//           onClick={handleClos}
//         >
//           <RxCross2 className="text-xl text-white" />
//         </span>
//       </div>
//       <div className="flex justify-between flex-wrap max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]">
//         <div className="flex flex-col ">
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 AI Bulk Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 AI Bulk voice Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Social Media Bulk Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Corporate Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Business Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col ">
//           <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
//             Facebook Video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Linkedin Video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Social Media Video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Blog to Video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Product Video Generator
//           </span>
//         </div>
//         <div className="flex flex-col ">
//           <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
//             Text to video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Caption Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Caption Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Script to Video Generator
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             AI Music Video Generator
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };
// export const BusinessData = ({ data, setActiveModal }) => {
//   const handleClos = () => {
//     setActiveModal((data) => !data);
//   };
//   return (
//     <div
//       className="bg-white  shadow-md rounded-2xl max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh]   z-10"
//       style={{
//         border: "6px solid rgba(0,0,0,0.1)",
//       }}
//     >
//       <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
//         <span className="font-worksans font-semibold text-lg">{data}</span>
//         <span
//           className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
//           onClick={handleClos}
//         >
//           <RxCross2 className="text-xl text-white" />
//         </span>
//       </div>
//       <div className="flex justify-start  max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px] gap-[48px] flex-wrap ">
//         <div className="flex flex-col ">
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Business Video Generate
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Corporate Video Generate
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Promo Video Generate
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 Product Video Generate
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 AI Bulk Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//           <div className="flex gap-4  py-[9px]">
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 AI Bulk Video Generator
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 Revolutionize Your Campaigns with AI-Powered Video Creation
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col ">
//           <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
//             Shivacha API
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Team Plans
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Product Update
//           </span>
//           <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
//             Supports
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };









import React, { useState, useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Button from "../customcomponent/Button";
import "../css/navbar.css";
import ShowModal from "../customcomponent/ShowModal";
import { RxCross2 } from "react-icons/rx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeModal, setActiveModal] = useState(false);
  const [responsiveNav, setResponsiveNav] = useState(false);

  const divRef = useRef(null);
  const modalRef = useRef(null);

  const handleClick = () => {
    setResponsiveNav((data) => !data);
  };
  const handleClose = () => {
    setResponsiveNav((data) => !data);
  };
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const handleScroll = () => {
    if (window.scrollY > 20) {
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

  const useCaseData = [
    {
      id: 1,
      key: "AI Marketing Video Generator",
      path: "/generate-bulk",
      img: "usecase-one",
    },
    {
      id: 2,
      key: "Social Media Video Generator",
      path: "/social-media",
      img: "usecase-six",
    },
    {
      id: 3,
      key: "AI Promo video Generator",
      path: "/promo-bulk",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-two",
    },
    {
      id: 4,
      key: "Campaign Video Generator",
      path: "/",
      img: "usecase-seven",
    },
    {
      id: 5,
      key: "Corporate Video Generator",
      path: "/corporate-video",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-three",
    },
    {
      id: 6,
      key: "Personalized Video Generator",
      path: "/",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-eight",
    },
    {
      id: 7,
      key: "AI Video meme Generator",
      path: "/video-meme",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-four",
    },
    {
      id: 8,
      key: "Photo Video Generate",
      path: "/",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-nine",
    },
    {
      id: 9,
      key: "AI Script to Video Generator",
      path: "/script-video",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
      img: "usecase-five",
    },
  ];
  const companyData = [
    {
      id: 1,
      key: "Blog",
      img:"company-one"
    },
    {
      id: 2,
      key: "About Us",
      img:"company-two"
    },
    {
      id: 3,
      key: "Careers ",
      img:"company-three"
    },
    {
      id: 4,
      key: "Supports ",
      img:"company-four"
    },
    {
      id: 5,
      key: "Contact Us ",
      img:"company-five"
    },
    {
      id: 6,
      key: "Safety & Ethics ",
      img:"company-six"
    },
  ];

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (
  //       divRef.current &&
  //       !divRef.current.contains(event.target) &&
  //       (!modalRef.current || !modalRef.current.contains(event.target))
  //     ) {
  //       setActiveModal(null);
  //     }
  //   };

  //   const handleMouseLeave = (event) => {
  //     if (divRef.current && !divRef.current.contains(event.relatedTarget)) {
  //       setActiveModal(null);
  //     }
  //   };

  //   document.addEventListener("mousedown", handleClickOutside);
  //   if (divRef.current) {
  //     divRef.current.addEventListener("mouseleave", handleMouseLeave);
  //   }

  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     if (divRef.current) {
  //       divRef.current.removeEventListener("mouseleave", handleMouseLeave);
  //     }
  //   };
  // }, []);

  return (
    <div
      className={` ${isSticky ? "sticky-header" : "bg-white"} w-full `}
      ref={divRef}
    >
      <div className="container relative">
        <div className="max-sm:h-[30px] sm:h-[96px] flex justify-between items-center ">
          <div className="cursor-pointer" onClick={() => navigate("/")}>
            <img
              src={process.env.PUBLIC_URL + "hd-logo.png"}
              alt="Logo"
              className="max-sm:w-[124px] sm:w-[245px] sm:h-[56px] max-sm:h-[28px]"
            />
          </div>
          <div
            className="max-sm:visible sm:hidden"
            onClick={() => handleClick()}
          >
            <GiHamburgerMenu />
          </div>
          {/* responsive part start */}
          {responsiveNav && (
            <>
              <div className="absolute top-[70px] left-0 w-full bg-white z-10">
                <div className="flex hover:bg-blue-590 justify-end px-4 py-2  ">
                  <span
                    className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
                    onClick={handleClose}
                  >
                    <RxCross2 className="text-xl text-white" />
                  </span>
                </div>

                <div className="flex gap-4 py-4 flex-col justify-start pl-6">
                  <p
                    className={`font-worksans cursor-pointer text-base font-medium text-[#000000]  `}
                    onClick={() => navigate("/")}
                  >
                    Home
                  </p>
                  <div
                    className="flex items-center gap-1 cursor-pointer relative   "
                    onMouseEnter={() => setActiveModal("useCase")}
                  >
                    <p className="font-worksans text-base font-medium text-[#000000]">
                      Use Case
                    </p>
                    <span className="absolute left-[22%]">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 cursor-pointer relative"
                    onMouseEnter={() => setActiveModal("Feature")}
                  >
                    <p className="font-worksans text-base font-medium text-[#000000]">
                      Feature
                    </p>
                    <span className="absolute left-[22%]">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 cursor-pointer relative"
                    onMouseEnter={() => setActiveModal("business")}
                  >
                    <p className="font-worksans text-base font-medium text-[#000000]">
                      Business
                    </p>
                    <span className="absolute left-[22%]">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div
                    className="flex items-center gap-1 cursor-pointer relative"
                    onMouseEnter={() => setActiveModal("Company")}
                    onMouseLeave={() => setActiveModal(null)}
                  >
                    <p className="font-worksans text-base font-medium text-[#000000]">
                      Company
                    </p>
                    <span className="absolute left-[22%]">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="font-worksans cursor-pointer text-base font-medium text-[#000000]">
                    Pricing
                  </p>
                </div>
                <div className="flex justify-center items-center pb-5 ">
                  <button
                    className={`flex items-center gap-3 w-[50%]  border-blue-500 cursor-pointer bg-blue-500 px-4 py-3 rounded-full  justify-center`}
                  >
                    <span
                      className={`text-white font-worksans max-sm:text-[14px] sm:text-base font-medium`}
                    >
                      Get Start
                    </span>
                    <span
                      className={`text-blue-500 bg-white rounded-full px-1 py-1`}
                    >
                      <MdArrowOutward />
                    </span>
                  </button>
                </div>
              </div>
            </>
          )}

          {/* responsive part end */}
          <div className="flex gap-6 items-center max-sm:hidden sm:vizible">
            <p
              className="font-worksans cursor-pointer text-base font-medium text-[#000000]"
              onClick={() => navigate("/")}
            >
              Home
            </p>
            <div
              className="flex items-center gap-1 cursor-pointer relative"
              onMouseEnter={() => setActiveModal("useCase")}
            >
              <p className="font-worksans text-base font-medium text-[#000000]">
                Use Case
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setActiveModal("Feature")}
            >
              <p className="font-worksans text-base font-medium text-[#000000]">
                Feature
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setActiveModal("business")}
            >
              <p className="font-worksans text-base font-medium text-[#000000]">
                Business
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <div
              className="flex items-center gap-1 cursor-pointer"
              onMouseEnter={() => setActiveModal("Company")}
            >
              <p className="font-worksans text-base font-medium text-[#000000]">
                Company
              </p>
              <span>
                <FaAngleDown />
              </span>
            </div>
            <p className="font-worksans cursor-pointer text-base font-medium text-[#000000]">
              Pricing
            </p>
            <Button
              text="Get Start"
              bg="[#47BBFF]"
              hoverBg="[#0096FF]"
              textColor="white"
              iconBg="white"
              iconText="blue-500"
              borderPart=""
              path="/login"
              textHover="white"
              iconTextHover="[#0096FF]"
              iconbgHover="white"
            />
          </div>
        </div>

        {activeModal && (
          <div
            className="absolute max-sm:w-full max-sm:left-0 max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0 "
            data-aos="fade-up"
            ref={modalRef}
          >
            {activeModal === "useCase" && (
              <ShowModal
                img="usecase"
                data="Use Cases"
                setActiveModal={setActiveModal}
                useCaseData={useCaseData}
              />
            )}
            {activeModal === "Company" && (
              <ShowModal
                img="usecase"
                useCaseData={companyData}
                data="Company"
                setActiveModal={setActiveModal}
              />
            )}
            {activeModal === "Feature" && (
              <FeatureData data="Feature" setActiveModal={setActiveModal} />
            )}
            {activeModal === "business" && (
              <BusinessData data="Business" setActiveModal={setActiveModal} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

export const FeatureData = ({ data, setActiveModal }) => {
  const handleClos = () => {
    setActiveModal((data) => !data);
  };
  return (
    <div
      className="bg-white  max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh] shadow-md rounded-2xl  z-10"
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
        <span className="font-worksans font-semibold text-lg">{data}</span>
        <span
          className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
          onClick={handleClos}
        >
          <RxCross2 className="text-xl text-white" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]">
        <div className="flex gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/featureimage/feature-one.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              AI Bulk Video Generator
            </span>
          </div>
        </div>
        <div className="flex gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/featureimage/feature-two.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              AI Bulk voice Generator
            </span>
          </div>
        </div>
        <div className="flex gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/featureimage/feature-three.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              AI Bulk Sibtitle Generator
            </span>
          </div>
        </div>
        <div className="flex gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/featureimage/feature-four.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Corporate Video Generator
            </span>
          </div>
        </div>
        <div className="flex gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/featureimage/feature-five.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Business Video Generator
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export const BusinessData = ({ data, setActiveModal }) => {
  const handleClos = () => {
    setActiveModal((data) => !data);
  };
  return (
    <div
      className="bg-white  shadow-md rounded-2xl max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh]   z-10"
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
        <span className="font-worksans font-semibold text-lg">{data}</span>
        <span
          className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
          onClick={handleClos}
        >
          <RxCross2 className="text-xl text-white" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]   ">
        <div className="flex items-center gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/business/business-one.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Business Video Generate
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/business/business-two.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Corporate Video Generate
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 py-[9px] ">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/business/business-three.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Promo Video Generate
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4  py-[9px]">
          <img
            src={`${process.env.PUBLIC_URL}./image/dropdownimage/business/business-four.png`}
            className="w-[32px] h-[32px]"
            alt="Use Case"
          />
          <div className="flex flex-col ">
            <span className="font-worksans text-base font-medium text-[#212121]">
              Product Video Generate
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
