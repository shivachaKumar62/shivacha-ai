import React from 'react'
import { MdArrowOutward } from "react-icons/md";
const Button = ({borderPart, text, textColor ,bg,iconBg,iconText,widt}) => {
  return (
    <div>
      <button
        className={`flex items-center gap-3 ${borderPart} border-blue-500 cursor-pointer bg-${bg} px-4 py-3 rounded-full max-sm:w-[${widt}%] justify-center`}
      >
        <span
          className={`text-${textColor} font-worksans max-sm:text-[14px] sm:text-base font-medium`}
        >
          {text}
        </span>
        <span
          className={`text-${iconText} bg-${iconBg} rounded-full px-1 py-1`}
        >
          <MdArrowOutward />
        </span>
      </button>
    </div>
  );
};

export default Button
