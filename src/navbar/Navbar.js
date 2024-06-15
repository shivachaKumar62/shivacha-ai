



import React, { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import Button from "../customcomponent/Button";
import "../css/navbar.css";
import ShowModal from "../customcomponent/ShowModal";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
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
      path: "/",
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
      path: "/",
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
      path: "/",
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
      path: "/",
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

  return (
    <div className={` ${isSticky ? "sticky-header" : "bg-white"} w-full `}>
      <div className="container relative">
        <div className="h-[96px] flex justify-between items-center">
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/navbar/nav-logo.png"}
              alt="Logo"
            />
          </div>
          <div className="flex gap-6 items-center">
            <p className="font-worksans cursor-pointer text-base font-medium text-[#000000]" onClick={() => navigate("/")}>
              Home
            </p>
            <div
              className="flex items-center gap-1 cursor-pointer relative"
              onMouseEnter={() => setActiveModal("useCase")}
              // onMouseLeave={() => setActiveModal(null)}
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
              // onMouseLeave={() => setActiveModal(null)}
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
              // onMouseLeave={() => setActiveModal(null)}
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
        {activeModal === "useCase" && (
          <div
            className="absolute  top-full left-[20%] z-10 w-[70%] mt-0"
            data-aos="fade-up"
          >
            <ShowModal img="usecase" useCaseData={useCaseData} />
          </div>
        )}
        {activeModal === "Company" && (
          <div
            className="absolute top-full left-[20%] z-10 w-[70%] mt-0"
            data-aos="fade-up"
          >
            <ShowModal img="usecase" useCaseData={companyData} />
          </div>
        )}
        {activeModal === "Feature" && (
          <div
            className="absolute top-full left-[20%] z-10 w-[70%] mt-0"
            data-aos="fade-up"
          >
            <FeatureData />
          </div>
        )}
        {activeModal === "business" && (
          <div
            className="absolute top-full left-[20%] z-10 w-[70%] mt-0"
            data-aos="fade-up"
          >
            <BusinessData />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;



export const FeatureData = () => {
  return (
    <div
      className="bg-white  shadow-md rounded-2xl py-[24px] px-[24px] z-10"
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex justify-between flex-wrap">
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
}
export const BusinessData = () => {
  return (
    <div
      className="bg-white  shadow-md rounded-2xl py-[24px] px-[24px] z-10"
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex justify-start gap-[48px] flex-wrap">
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
