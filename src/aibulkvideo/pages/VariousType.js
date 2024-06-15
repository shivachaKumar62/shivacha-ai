import React from 'react'
import Button from '../../customcomponent/Button';

const VariousType = () => {
  return (
    <div className="py-[48px]">
      <div className="container">
        <div className="grid grid-cols-2 gap-x-6">
          <div>
            <div>
              <h1 className="font-worksans  font-semibold text-[40px] text-[#000000]">
                Customize various type of videos with AI
              </h1>
            </div>
            <div className="flex flex-col pt-[24px] ">
              <div className=" flex gap-3">
                <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                  1
                </p>
                <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
                  Explore various video types like promotional, Political
                  explainer, and social media content on the platform. Choose
                  the one that best suits your goals.
                </p>
              </div>
              <div className=" flex gap-3">
                <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                  2
                </p>
                <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
                  Use AI tools to streamline customization, aiding in scene
                  composition, captioning, translation, and more for efficient
                  video editing.
                </p>
              </div>
              <div className=" flex gap-3">
                <p className="font-semibold font-worksans  text-lg text-[#565656] ">
                  3
                </p>
                <p className="font-worksans  text-lg font-medium text-[#565656] ">
                  Review the final video, make adjustments as needed, then
                  export or share it once you're satisfied with the result.
                </p>
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
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/bulkvideo/various-type.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VariousType
