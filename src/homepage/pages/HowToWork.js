import React from 'react'

const HowToWork = () => {
  return (
    <div className="py-[96px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6">
          <div >
            <div className="pb-[20px]">
              <p className="font-worksans font-semibold text-sm text-[#000000]">
                How to work
              </p>
            </div>
            <div>
              <h1 className="font-worksans  font-semibold text-[40px] text-[#000000]">
                Input Content, Generate Video, Preview, Download
              </h1>
            </div>
            <div className="flex flex-col pt-[24px] ">
              <div className="">
                <p className="font-semibold font-worksans  text-xl text-[#000000] ">
                  Step 1
                </p>
                <p className="font-worksans font-normal text-xl pt-[16px]  pb-[24px] text-[#565656] ">
                  Input Your content or text into shivacha.AI Platform and also
                  Upload the excel file
                </p>
              </div>
              <div className="">
                <p className="font-semibold font-worksans  text-xl text-[#000000] ">
                  Step 2
                </p>
                <p className="font-worksans pt-[16px]  pb-[24px] font-normal text-xl text-[#565656] ">
                  AI will produce a video tailored to your provided content
                  using advanced algorithms.
                </p>
              </div>
              <div className="">
                <p className="font-semibold font-worksans  text-xl text-[#000000] ">
                  Step 3
                </p>
                <p className="font-worksans pt-[16px]  pb-[24px] font-normal text-xl text-[#565656] ">
                  Preview the AI generated video to ensure it meeting your
                  requirements.
                </p>
              </div>
              <div className="">
                <p className="font-semibold font-worksans  text-xl text-[#000000] ">
                  Step 4
                </p>
                <p className="font-worksans font-normal pt-[16px]  pb-[24px] text-xl text-[#565656] ">
                  Download the generated bulk videos for use on various
                  platforms. They can also be customized for different social
                  media channels.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/howtowork.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowToWork
