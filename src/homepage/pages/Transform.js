import React from 'react'
import Button from '../../customcomponent/Button';

const Transform = () => {
  return (
    <div className="sm:py-[96px] max-sm:py-[20px]">
      <div className="container">
        <div className="grid sm:grid-cols-2 max-sm:grid-cols-1 gap-x-6">
          <div>
            <img
              src={process.env.PUBLIC_URL + "./image/homepage/yourscript.png"}
            />
          </div>
          <div>
            <div className="max-sm:pt-[30px] sm:pt-[0p]">
              <p className="text-[#212121] font-semibold font-worksans sm:text-[40px] max-sm:text-[32px]">
                Transform Your Script into a Professional Video in Just Minutes
              </p>
            </div>
            <div className="pt-[24px] pb-[36px]">
              <p className="text-[#565656] font-medium font-worksans text-lg">
                Craft polished videos effortlessly with lifelike AI voices,
                perfectly synced footage, and fitting music, all from your
                script, in just a few clicks.
              </p>
              <p className="text-[#565656] font-medium font-worksans text-lg pt-[16px]">
                Create professional-quality videos effortlessly using lifelike
                AI voices, precisely synchronized footage, and suitable music,
                all generated from your script with just a few clicks. Craft
                engaging content without the hassle of manual editing, saving
                time and ensuring a seamless production process for captivating
                video content.
              </p>
            </div>
            <div>
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
      </div>
    </div>
  );
}

export default Transform
