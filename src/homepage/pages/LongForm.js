import React from "react";
import Button from "../../customcomponent/Button";

const LongForm = () => {
  return (
    <div className="sm:py-[96px] max-sm:py-[20px]">
      <div className="container">
        <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-x-6">
          <div>
            <img
              src={
                process.env.PUBLIC_URL + "./image/homepage/longformvideos.png"
              }
            />
          </div>
          <div>
            <div className="max-sm:pt-[32px]">
              <p className="text-[#212121] font-semibold font-worksans max-sm:text-[32px] sm:text-[40px]">
                Convert Long-Form Videos into Engaging Bulk Campain Clips for
                Social Media
              </p>
            </div>
            <div className="pt-[24px] pb-[36px]">
              <ul className="list-disc pl-[15px] text-wrap text-[#565656] font-medium text-lg font-worksans space-y-[16px]">
                <li>
                  Ensure that the clips are optimized for various social media
                  platforms.
                </li>
                <li>
                  Craft clips that captivate the audience's attention and
                  encourage interaction.
                </li>
                <li>
                  Maintain consistent branding across all clips to strengthen
                  brand recognition.
                </li>
                <li>
                  lips to drive specific campaign objectives such as brand
                  awareness, product promotion, or audience engagement on social
                  media.
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
        </div>
      </div>
    </div>
  );
};

export default LongForm;
