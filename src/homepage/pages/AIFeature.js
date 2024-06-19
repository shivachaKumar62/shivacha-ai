import React from 'react'
import Button from '../../customcomponent/Button';

const AIFeature = () => {
  return (
    <div className="sm:py-[96px] max-sm:py-[20px] bg-[#212121]">
      <div className="container ">
        <div className="flex max-sm:flex-col">
          <div className="max-sm:max-w-full sm:max-w-[40%]">
            <div className="sm:pb-[20px] max-sm:pb-[15px]">
              <p className="text-white text-sm font-semibold font-worksans">
                AI Feature
              </p>
            </div>
            <div className="sm:pb-[36px] max-sm:pb-[20px] ">
              <p className="text-white max-sm:text-[32px]  sm:text-[40px] font-worksans font-semibold">
                Transform Your Bulk Videos into Stunning Videos in Minutes.
              </p>
            </div>
            <div>
              <Button
                text="Get Started For Trial"
                bg="blue-500"
                textColor="white"
                iconBg="white"
                iconText="blue-500"
                borderPart=""
              />
            </div>
          </div>
          <div className="sm:max-w-[60%] max-sm:w-full max-sm:pt-[40px]">
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/aifeature.png"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIFeature
