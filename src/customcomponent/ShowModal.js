


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { RxCross2 } from "react-icons/rx";


// const ShowModal = ({ img, useCaseData,  data,setActiveModal }) => {
//   const navigate = useNavigate();
//   const handleClos = () => {
//     setActiveModal((data) => !data)
//   }
//   return (
//     <div
//       className="bg-white max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh]  shadow-md rounded-2xl  z-10 "
//       style={{
//         border: "6px solid rgba(0,0,0,0.1)",
//       }}
//     >
//       <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
//         <span className="font-worksans font-semibold text-lg">{data}</span>
//         <span
//           className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
//           onClick={handleClos}

//         >
//           <RxCross2 className="text-xl text-white" />
//         </span>
//       </div>
//       <div className="flex justify-between flex-wrap gap-x-[45px] max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]">
//         {useCaseData?.map((item, index) => (
//           <div
//             key={index}
//             className="flex gap-4  py-[9px] "
//             onClick={() => navigate(item?.path)}
//           >
//             <img
//               src={process.env.PUBLIC_URL + `./image/navbar/${img}.svg`}
//               alt="Use Case"
//             />
//             <div className="flex flex-col cursor-pointer ">
//               <span className="font-worksans text-base font-medium text-[#212121]">
//                 {item?.key}
//               </span>
//               <span className="text-xs font-medium font-worksans text-[#565656]">
//                 {item?.value}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ShowModal;










import React from "react";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

const ShowModal = ({ img, useCaseData, data, setActiveModal }) => {
  console.log(img,'sjshh')
  const navigate = useNavigate();
  const handleClos = () => {
    setActiveModal((data) => !data);
  };
  return (
    <div
      className="bg-white max-sm:w-full max-sm:overflow-auto max-sm:h-[75vh]  shadow-md rounded-2xl  z-10 "
      style={{
        border: "6px solid rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex max-sm:visible sm:hidden justify-between h-[50px] max-sm:px-3 items-center border-b-2  ">
        <span className="font-worksans font-semibold text-lg">{data}</span>
        <span
          className="bg-blue-500 rounded-full px-1 py-1 cursor-pointer"
          onClick={handleClos}
        >
          <RxCross2 className="text-xl text-white" />
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[10px] max-sm:py-[10px] max-sm:px-[10px] sm:py-[24px] sm:px-[24px]">
        {useCaseData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4  py-[9px] cursor-pointer"
            onClick={() => navigate(item?.path)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/image/dropdownimage/usecase/${item?.img}.png`}
              alt="Use Case"
              className="w-8 h-8"
            />

            <span className="font-worksans text-base font-medium text-[#212121]">
              {item?.key}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowModal;
