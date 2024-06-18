



import React, { useState, useEffect,useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
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
  const [activeModal, setActiveModal] = useState(null);
  const [responsiveNav,setResponsiveNav] = useState(false)
  const [isVisible, setIsVisible] = useState(true);
  const divRef = useRef(null);
  const modalRef = useRef(null);
  
  const handleClick = () => {
setResponsiveNav((data) => !data)
  }
  const handleClose = () => {
    setResponsiveNav((data) => !data)
  }
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
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 2,
      key: "Social Media Video Generator",
      path: "/social-media",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 3,
      key: "AI Promo video Generator",
      path: "/promo-bulk",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 4,
      key: "Campain Video Generator",
      path: "/",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 5,
      key: "Corporate Video Generator",
      path: "/corporate-video",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 6,
      key: "Personalized Video Generator",
      path: "/",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 7,
      key: "AI Video meme Generator",
      path: "/video-meme",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 8,
      key: "Photo Video Generate",
      path: "/",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
    {
      id: 9,
      key: "AI Script to Video Generator",
      path: "/script-video",
      value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
    },
  ];
const companyData = [
  {
    id: 1,
    key: "Blog",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
  {
    id: 2,
    key: "About Us",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
  {
    id: 3,
    key: "Careers ",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
  {
    id: 4,
    key: "Supports ",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
  {
    id: 5,
    key: "Contact Us ",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
  {
    id: 6,
    key: "Safety & Ethics ",
    value: "Revolutionize Your Campaigns with AI-Powered Video Creation",
  },
];
useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        divRef.current &&
        !divRef.current.contains(event.target) &&
        (!modalRef.current || !modalRef.current.contains(event.target))
      ) {
        setActiveModal(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={` ${isSticky ? "sticky-header" : "bg-white"} w-full `} ref={divRef}>
      <div className="container relative">
        <div className="max-sm:h-[30px] sm:h-[96px] flex justify-between items-center ">
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/navbar/nav-logo.png"}
              alt="Logo"
              className="max-sm:w-[124px] max-sm:h-[28px]"
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
                <div className="flex justify-end px-4 py-2  ">
                  <span
                    className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
                    onClick={handleClose}
                  >
                    <RxCross2 className="text-xl text-white" />
                  </span>
                </div>

                <div className="flex gap-4 py-4 flex-col items-center">
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
                    onMouseLeave={() => setActiveModal(null)}
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
                    bg="blue-500"
                    textColor="white"
                    iconBg="white"
                    iconText="blue-500"
                    borderPart=""
                  />
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
              bg="blue-500"
              textColor="white"
              iconBg="white"
              iconText="blue-500"
              borderPart=""
            />
          </div>
        </div>
        {/* {activeModal === "useCase" && (
          <div
            className="absolute max-sm:w-full max-sm:left-0  max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0"
            data-aos="fade-up"
            ref={modalRef}
          >
            <ShowModal
              img="usecase"
              data="Use Cases"
              setActiveModal={setActiveModal}
              useCaseData={useCaseData}
            />
          </div>
        )}
        {activeModal === "Company" && (
          <div
            className="absolute max-sm:w-full max-sm:left-0  max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0"
            data-aos="fade-up"
          >
            <ShowModal
              img="usecase"
              useCaseData={companyData}
              data="Company"
              setActiveModal={setActiveModal}
            />
          </div>
        )}
        {activeModal === "Feature" && (
          <div
            className="absolute max-sm:w-full max-sm:left-0  max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0"
            data-aos="fade-up"
          >
            <FeatureData data="Feature" setActiveModal={setActiveModal} />
          </div>
        )}
        {activeModal === "business" && (
          <div
            className="absolute max-sm:w-full max-sm:left-0  max-sm:top-[70px] sm:top-full sm:left-[20%] z-10 sm:w-[70%] mt-0"
            data-aos="fade-up"
          >
            <BusinessData data="Business" setActiveModal={setActiveModal} />
          </div>
        )} */}
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
      <div className="flex justify-between flex-wrap max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]">
        <div className="flex flex-col ">
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                AI Bulk Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                AI Bulk voice Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Social Media Bulk Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Corporate Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Business Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
            Facebook Video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Linkedin Video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Social Media Video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Blog to Video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Product Video Generator
          </span>
        </div>
        <div className="flex flex-col ">
          <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
            Text to video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Caption Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Caption Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Script to Video Generator
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            AI Music Video Generator
          </span>
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
      <div className="flex justify-start  max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px] gap-[48px] flex-wrap ">
        <div className="flex flex-col ">
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Business Video Generate
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Corporate Video Generate
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Promo Video Generate
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                Product Video Generate
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                AI Bulk Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
          <div className="flex gap-4  py-[9px]">
            <img
              src={process.env.PUBLIC_URL + `./image/navbar/usecase.svg`}
              alt="Use Case"
            />
            <div className="flex flex-col ">
              <span className="font-worksans text-base font-medium text-[#212121]">
                AI Bulk Video Generator
              </span>
              <span className="text-xs font-medium font-worksans text-[#565656]">
                Revolutionize Your Campaigns with AI-Powered Video Creation
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col ">
          <span className="py-[9px] font-worksans font-normal text-base text-[#212121]">
            Shivacha API
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Team Plans
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Product Update
          </span>
          <span className="pb-[9px] font-worksans font-normal text-base text-[#212121]">
            Supports
          </span>
        </div>
      </div>
    </div>
  );
};
