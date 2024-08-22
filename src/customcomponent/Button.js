import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import "../css/navbar.css"
const Button = ({borderPart, text,textHover,iconbgHover,iconTextHover, textColor ,bg,iconBg,iconText,widt,path,hoverBg}) => {
  const [stateIcon,setStateIcon] = useState(false)
  const handleMouseEnter = () => {
    setStateIcon((data) => !data)
  }
  const handleMouseLeave = () => {
    setStateIcon((data) => !data);
  };
  const navigate = useNavigate()
  return (
    <div>
      <button
        className={`flex items-center gap-3 ${borderPart} border-blue-500 cursor-pointer ${
          !stateIcon ? `bg-${bg}` : `bg-${hoverBg}`
        } px-4 py-3 rounded-full max-sm:w-[${widt}%] justify-center`}
        onClick={() => navigate(`${path}`)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span
          className={`${
            !stateIcon ? `text-${textColor}` : `text-${textHover}`
          } font-worksans max-sm:text-[14px] sm:text-base font-medium`}
        >
          {text}
        </span>
        <span
          className={` ${
            !stateIcon
              ? `bg-${iconBg} text-${iconText}`
              : `bg-${iconbgHover} text-${iconTextHover}`
          }  rounded-full px-1 py-1 transition-all duration-100 ease-in delay-100 `}
        >
          {stateIcon ? <MdArrowForward /> : <MdArrowOutward />}
        </span>
      </button>
    </div>
  );
};

export default Button
