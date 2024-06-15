import React from 'react'
import Button from './Button';

const EasilyCreateCard = ({ img, data, title, uiDirection }) => {
  return (
    <div className="py-[48px]">
      <div className="container">
        {uiDirection == "true" ? (
          <div className="grid grid-cols-2 gap-x-6">
            <div>
              <div>
                <h1 className="font-worksans  font-semibold text-[40px] text-[#000000]">
                  {title}
                </h1>
              </div>
              <div className="flex flex-col pt-[24px] ">
                <div className=" flex flex-col gap-3">
                  {data?.map((item, ind) => {
                    return (
                      <div className="flex gap-3">
                        <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                          {ind + 1}
                        </p>
                        <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
                          {item?.keyOne}
                        </p>
                      </div>
                    );
                  })}
                </div>
                {/* <div className=" flex gap-3">
                <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                  2
                </p>
                <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
                  Select the option to create a video from prompts or Excel
                  data. If you choose prompts, input the text prompts you want
                  to include in the video. For Excel data, upload the Excel file
                  containing the data you wish to visualize.
                </p>
              </div>
              <div className=" flex gap-3">
                <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                  3
                </p>
                <p className="font-worksans  text-lg font-medium text-[#565656] ">
                  Customize your video's settings, then click "Generate Video"
                  for Shivacha AI to automatically create your customized video.
                </p>
              </div> */}
              </div>
              <div className="pt-[36px]">
                <Button
                  text="Get Started For Trial"
                  bg="white"
                  textColor="blue-500"
                  iconBg="blue-500"
                  iconText="white"
                  borderPart="border-2"
                />
              </div>
            </div>
            <div className='flex items-center'>
              <img src={process.env.PUBLIC_URL + `./image/${img}`} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-6 ">

            <div className='flex items-center'>
              <img src={process.env.PUBLIC_URL + `./image/${img}`} />
            </div>
            <div>
              <div>
                <h1 className="font-worksans  font-semibold text-[40px] text-[#000000]">
                  {title}
                </h1>
              </div>
              <div className="flex flex-col pt-[24px] ">
                <div className=" flex flex-col gap-3">
                  {data?.map((item, ind) => {
                    return (
                      <div className="flex gap-3">
                        <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                          {ind + 1}
                        </p>
                        <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
                          {item?.keyOne}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="pt-[36px]">
                <Button
                  text="Get Started For Trial"
                  bg="white"
                  textColor="blue-500"
                  iconBg="blue-500"
                  iconText="white"
                  borderPart="border-2"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EasilyCreateCard
