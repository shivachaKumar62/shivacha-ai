import React from 'react'
import Button from '../../customcomponent/Button';

const AIFeature = () => {
  return (
    <div className="py-[96px] bg-[#212121]">
      <div className="container ">
        <div className="flex ">
          <div className="max-w-[40%]">
            <div className="pb-[20px]">
              <p className="text-white text-sm font-semibold font-worksans">
                AI Feature
              </p>
            </div>
            <div className="pb-[36px]  ">
              <p className="text-white  text-[40px] font-worksans font-semibold">
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
          <div className="max-w-[60%]">
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
