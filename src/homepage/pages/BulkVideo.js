import React,{useEffect} from 'react'
import { GoDotFill } from "react-icons/go";
import Button from '../../customcomponent/Button';
import AOS from "aos";
import "aos/dist/aos.css";
const BulkVideo = () => {
   useEffect(() => {
     AOS.init({
       duration: 1000, 
       easing: "ease-out", 
       once: true, 
     });
   }, []);
  return (
    <div className="sm:py-[96px] max-sm:py-[10px]">
      <div className="container">
        <div className="flex justify-between items-center   ">
          <div className="col-span-10 " data-aos="fade-right">
            <p
              className="font-semibold font-worksans text-[#565656] max-sm:text-sm sm:text-[28px] sm:tracking-[10px] max-sm:tracking-[1px] "
              // style={{ letterSpacing: "10px" }}
            >
              Quick, Expandable, and Budget-Friendly!
            </p>
            <div className="flex flex-col max-sm:hidden sm:visible">
              <p className="font-worksans font-semibold  sm:text-[72px] text-[#000000]">
                Your ideas Of life with our{" "}
              </p>
              <p className="font-worksans font-semibold text-[72px] text-[#0096FF] ">
                AI Bulk Video Generator
              </p>
            </div>
            <div className="flex max-sm:visible sm:hidden flex-col  max-sm:mt-4 sm:mt-0">
              <p className="font-worksans font-semibold  sm:text-[72px] text-[#000000]">
                Your ideas Of life with our{" "}
                <span className="text-[#0096FF]">AI Bulk Video Generator</span>
              </p>
            </div>
          </div>
          <div className="max-sm:hidden sm:visible " data-aos="fade-left">
            <div
              className="flex justify-center px-3 items-center gap-2 bg-[#85CCFF]  h-[46px] rounded-full py-[10px]"
              style={{ rotate: "15deg" }}
            >
              <span className="text-white">
                <GoDotFill />
              </span>
              <p className="font-worksans font-medium text-lg text-white  ">
                Ready to support
              </p>
            </div>
          </div>
        </div>
        <div className="grid  max-sm:grid-cols-1 sm:grid-cols-2   max-sm:pt-[24px] sm:pt-[66px]  ">
          <div data-aos="fade-up">
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Group 52.png"}
              className="max-sm:h-auto sm:h-auto max-sm:object-contain rounded-md"
            />
          </div>
          <div data-aos="fade-down col-end " className="max-sm:mt-[32px] ">
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Group 53.png"}
              className="h-[72px]"
            />
            <p className="sm:pt-[48px] max-sm:pt-[24px] pb-[36px] max-sm:w-full sm:w-[70%] sm:text-justify ">
              Transform your content creation with our AI-driven Bulk AI Video
              generator, crafting multiple engaging videos in minutes.
            </p>
            <Button
              text="Get Started For Trial"
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
      </div>
    </div>
  );
}

export default BulkVideo
