import React from 'react'
import Button from '../../customcomponent/Button';

const TrustedComp = () => {
  return (
    <div className="bg-[#212121] sm:py-[96px] max-sm:py-[20px] relative">
      <div className="container">
        <div className="flex justify-center flex-col items-center   mx-auto ">
          <p className="text-white text-center font-worksans max-sm:leading-[30px] sm:leading-[80px] font-semibold sm:text-[72px] max-sm:text-[24px]">
            Your trusted partner in Video
          </p>
          <span className="text-[#0096FF] text-center font-semibold sm:text-[72px] max-sm:text-[24px] font-worksans max-sm:leading-[25px]">
            AI Generator
          </span>
          <p className="font-worksans font-semibold sm:text-2xl max-sm:text-base text-center max-sm:pt-[15px] sm:pt-[48px] max-sm:px-2 text-white">
            Transform your concept into a video in seconds with just a simple
            prompt!
          </p>
          <div className="pt-[36px]">
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
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute sm:top-5 max-sm:top-4 left-[48%] sm:h-[72px] max-sm:h-[24px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute left-[19%] sm:top-[40%] max-sm:top-[26%] sm:h-[72px] max-sm:h-[24px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union-one.png"}
              className="absolute right-[19%] sm:top-[40%] max-sm:top-[26%] sm:h-[72px] max-sm:h-[24px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute sm:bottom-10 max-sm:bottom-12 left-[10%] sm:h-[72px] max-sm:h-[24px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union-one.png"}
              className="absolute sm:bottom-10 max-sm:bottom-12 right-[10%] sm:h-[72px] max-sm:h-[24px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedComp
