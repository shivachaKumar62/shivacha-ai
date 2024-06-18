import React from 'react'
import Button from './Button';

const FirstCompCustom = ({data}) => {
  return (
    <div className="pt-[96px] pb-[48px] ">
      <div className="container">
        <div className="flex flex-col">
          <p className="font-worksans font-semibold text-[72px] text-[#000000]">
            {data[0].paraOne}
          </p>
          <p className="font-worksans font-semibold text-[72px] leading-10 ">
            {data[0].paraTwo}
            <span className="text-[#0096FF]">{data[0].paraThree}</span>
          </p>
        </div>
        <div className="grid grid-cols-2 pt-[48px] ">
          <div data-aos="fade-down">
            <p className=" font-worksans font-medium text-[24px]  w-[70%] ">
              {data[0].paraFour}
            </p>
            <p className=" pb-[36px] w-[70%] font-worksans font-medium text-[24px] ">
              {data[0].paraFive}
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
                process.env.PUBLIC_URL + `./image/${data[0].img}`
              }
              className="h-[349px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstCompCustom
