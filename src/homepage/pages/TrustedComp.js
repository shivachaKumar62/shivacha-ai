import React from 'react'
import Button from '../../customcomponent/Button';

const TrustedComp = () => {
  return (
    <div className="bg-[#212121] py-[96px] relative">
      <div className="container">
        <div className="flex justify-center flex-col items-center w-[60%] mx-auto ">
          <p className="text-white text-center font-worksans leading-[80px] font-semibold sm:text-[72px] max-sm:text-[24px]">
            Your trusted partner in Video{" "}
            <span className="text-[#0096FF]">AI Generator</span>
          </p>
          <p className="font-worksans font-semibold text-2xl text-center pt-[48px] text-white">
            Transform your concept into a video in seconds with just a simple
            prompt!
          </p>
          <div className='pt-[36px]'>
            <Button
              text="Get Started For Trial"
              bg="blue-500"
              textColor="white"
              iconBg="white"
              iconText="blue-500"
              borderPart=""
            />
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute top-5 left-[48%] h-[72px] w-[72px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute left-[19%] top-[40%] h-[72px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union-one.png"}
              className="absolute right-[19%] top-[40%] h-[72px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union.png"}
              className="absolute bottom-10 left-[10%] h-[72px]"
            />
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/Union-one.png"}
              className="absolute bottom-10 right-[10%] h-[72px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrustedComp
