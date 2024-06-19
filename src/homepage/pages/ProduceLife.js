import React from "react";
import Button from "../../customcomponent/Button";

const ProduceLife = () => {
  return (
    <div className="sm:py-[96px] max-sm:py-[20px]">
      <div className="container">
        <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-x-6">
          <div className="sm:order-1 max-sm:order-2">
            <div className="max-sm:pt-[32px]">
              <p className="text-[#212121] font-semibold font-worksans max-sm:text-[32px] sm:ext-[40px]">
                Produce lifelike voiceovers effortlessly using Shivacha's
                AI-powered tools.
              </p>
            </div>
            <div className="pt-[24px] pb-[36px]">
              <ul className="list-disc pl-[15px] text-wrap text-[#565656] font-medium text-lg font-worksans space-y-[16px]">
                <li>
                  Shivacha's AI-powered tools generate voiceovers that sound
                  natural and realistic, enhancing the quality of audio content.
                </li>
                <li>
                  Shivacha's advanced artificial intelligence technology ensures
                  high-quality voice synthesis, providing users with
                  professional-grade results.
                </li>
                <li>
                  These voiceovers can be used for various purposes such as
                  narrations, presentations, advertisements, and more, offering
                  flexibility in content creation.
                </li>
              </ul>
            </div>
            <div>
              <Button
                text="Get Started For Trial"
                bg="white"
                textColor="blue-500"
                iconBg="blue-500"
                iconText="white"
                borderPart="border"
              />
            </div>
          </div>
          <div className="sm:order-2 max-sm:order-1">
            <img
              src={
                process.env.PUBLIC_URL + "./image/homepage/producelifelike.png"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProduceLife;
