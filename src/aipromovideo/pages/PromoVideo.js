import React from 'react'
import Button from '../../customcomponent/Button';
const PromoVideo = () => {
  return (
    <div className="pt-[96px] pb-[48px] ">
      <div className="container">
        <div className="grid grid-cols-2  ">
          <div data-aos="fade-down">
            <div className="flex flex-col pb-[48px]">
              <p className="font-worksans font-semibold text-[72px] text-[#000000]">
                AI <span className="text-[#0096FF]">Promo Video</span>
              </p>
              <p className="font-worksans font-semibold text-[72px] leading-10 ">
                Generator
              </p>
            </div>
            <p className=" font-worksans font-medium text-[24px]  w-[80%] ">
              Craft Compelling Promotional Videos Tailored to
            </p>
            <p className=" pb-[36px] w-[70%] font-worksans font-medium text-[24px] ">
              Your Brand's Vision and Audience
            </p>
            <Button
              text="Get Started For Trial"
              bg="blue-500"
              textColor="white"
              iconBg="white"
              iconText="blue-500"
              borderPart=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              src={
                process.env.PUBLIC_URL + "./image/promovideo/promo-video.png"
              }
              className="h-[349px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PromoVideo
