import React,{useState} from 'react'
import { FaPlayCircle } from "react-icons/fa";
const Card = ({data}) => {
   const [playingIndex, setPlayingIndex] = useState(null);

   const handleClick = (ind) => {
     setPlayingIndex(ind === playingIndex ? null : ind);
   };
  return (
    <div className="flex justify-between gap-5 flex-wrap">
      {data?.map((item, ind) => {
        return (
          <div
            key={ind}
            className="flex bg-white flex-col items-center  w-[249px] h-[276px] rounded-lg    border border-blue-400"
          >
            <div className="pt-[39px] pb-[24px]">
              <img
                src={
                  process.env.PUBLIC_URL + `./image/clientimage/${item.img}.png`
                }
                alt="img"
              />
            </div>
            <p className="font-worksans font-semibold text-xl pb-[3px] text-[#000000]">
              {item.name}
            </p>
            <p className="font-worksans font-medium text-base text-[#565656]">
              {item.title}
            </p>
            <div className="pt-5 mb-5" onClick={() => handleClick(ind)}>
              {playingIndex !== ind && (
                <FaPlayCircle
                  size={30}
                  className="cursor-pointer hover:scale-110 transition-all duration-500 ease-in-out"
                />
              )}

              {playingIndex === ind && (
                <div className="transition-all duration-500 ease-in-out ">
                  <audio controls  className="w-[230px] mx-auto   ">
                    <source
                      src={`${process.env.PUBLIC_URL}/image/audio/${item.src}`}
                      type="audio/mpeg"
                    />
                  </audio>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card
