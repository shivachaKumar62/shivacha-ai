import React from 'react'
import Button from './Button';

const SecondCustomComp = ({data}) => {
  return (
    <div className="pt-[96px] pb-[48px] ">
      <div className="container">
        <div className="grid grid-cols-2  ">
          <div data-aos="fade-down">
            <div className="flex flex-col pb-[48px]">
              <p className="font-worksans leading-tight font-semibold text-[72px] text-[#000000]">
                {data[0].paraOne}
                <span className="text-[#0096FF]">{data[0].paraTwo}</span>
                {data[0].paraThree}
              </p>
            </div>

            <p className=" pb-[36px] w-[70%] font-worksans font-medium text-[24px] ">
              {data[0].paraFour}
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
              src={process.env.PUBLIC_URL + `./image/${data[0].img}`}
              className="h-[349px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondCustomComp
