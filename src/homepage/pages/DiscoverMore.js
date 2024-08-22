import React from 'react'
import Button from '../../customcomponent/Button';

const DiscoverMore = () => {
    const data = [
      { id: 1, title: "AI Make Political Campain Video" },
      { id: 2, title: "AI Voice Cloning" },
      { id: 3, title: "AI Text to Spech" },
      { id: 4, title: "Video Collage Maker" },
      { id: 5, title: "Clipmaker" },
      { id: 6, title: "Promo Video Maker" },
      { id: 7, title: "Video Trimmer" },
      { id: 8, title: "Instagram Video" },
      { id: 9, title: "Picture Video maker" },
      { id: 10, title: "Image Video maker" },
      { id: 11, title: "Remove Audio From Video" },
    ];
  return (
    <div className="sm:py-[96px] max-sm:py-[20px] bg-[#212121]">
      <div className="container ">
        <div className="flex max-sm:flex-col">
          <div className="sm:max-w-[40%] max-sm:w-full">
            <div className="pb-[20px]">
              <p className="text-white text-sm font-semibold font-worksans">
                Discover More
              </p>
            </div>
            <div className="pb-[36px]  ">
              <p className="text-white  max-sm:text-[30px] sm:text-[40px] font-worksans font-semibold">
                It's not just text to video it's a text-to-any-type-of-video
                generator.
              </p>
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              {data &&
                data.map((item, ind) => (
                  <span className="px-4 hover:bg-blue-500 hover:text-white cursor-pointer py-1 bg-white rounded-full font-semibold font-worksans max-sm:text-[12px] sm:text-base text-[#212121]">
                    {item?.title}
                  </span>
                ))}
            </div>
            <div>
              <div className="w-full mt-[36px]  flex  justify-between items-center bg-white rounded-full h-[64px] px-4">
                <span className="sm:font-semibold max-sm:font-medium font-worksans text-base text-[#212121]">
                  Explore More
                </span>
                <Button
                  text="Get Started For Trial"
                  bg="white"
                  hoverBg="[#0096FF]"
                  textColor="blue-500"
                  textHover="white"
                  iconBg="blue-500"
                  iconText="white"
                  iconTextHover="[#0096FF]"
                  iconbgHover="white"
                  borderPart="border"
                />
              </div>
            </div>
          </div>
          <div className="sm:max-w-[60%] max-sm:w-full max-sm:pt-[32px]">
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/aifeature.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverMore
