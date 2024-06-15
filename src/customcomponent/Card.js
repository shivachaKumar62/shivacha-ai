import React from 'react'

const Card = ({ data, useCase, choose}) => {
  return (
    <div className="py-[96px] bg-[#212121]">
      <div className="container">
        {useCase&&
        <div>
          <p className="text-center pt-[20px] font-worksans font-semibold text-sm text-white">
            {useCase}
          </p>
      
        </div>
}
        <div>
          <p className="text-center  pb-[48px] font-worksans font-semibold text-[40px] text-white">
            {choose}
          </p>
        </div>
        <div className="flex justify-between items-center gap-[20px] ">
          {data?.map((item, ind) => {
            return (
              <div
                key={ind}
                className="flex flex-col items-center bg-white  rounded-2xl py-[24px]"
              >
                <div className="w-[50px] mb-[48px] h-[50px] bg-[#AEDEFF] rounded-full flex items-center justify-center ">
                  <img src={process.env.PUBLIC_URL + `${item?.img}.png `} />
                </div>
                <div>
                  <h2 className="text-center font-worksans font-semibold text-[24px] text-[#212121] pb-[20px]">
                    {item.title}
                  </h2>
                  <p className="px-[20px] text-center font-worksans font-normal text-base text-[#212121]">
                    {item.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card
