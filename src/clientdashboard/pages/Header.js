// import React, { useState, useEffect } from "react";
// import "../component/AppSidebarNav.css";
// const Header = () => {
//   const [isSticky, setIsSticky] = useState(false);
//   const handleScroll = () => {
//     if (window.scrollY >= 10) {
//       setIsSticky(true);
//     } else {
//       setIsSticky(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div
//       className={`${
//         isSticky ? "sticky w-[96%] z-10 top-0  px-[24px] bg-[#E8E8E8]" : ""
//       } bg-[#E8E8E8]  mt-[16px] mb-[32px] px-[24px] h-[72px] flex items-center mx-[24px] rounded-[12px]`}
//     >
//       <h1>Home</h1>
//     </div>
//   );
// };

// export default Header;



import React, { useState, useEffect } from "react";
import "../component/AppSidebarNav.css";

const Header = ({ currentRoute }) => {
  const [isSticky, setIsSticky] = useState(false);
  const displayRoute = currentRoute.startsWith("/")
    ? currentRoute.slice(1)
    : currentRoute;
  const handleScroll = () => {
    if (window.scrollY >= 10) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`${"w-[100%] px-[24px] bg-[#F5F5F5]"}     px-[24px] h-[64px] flex items-center  rounded-[12px]`}
    >
      <h1
        style={{
          background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        className="font-worksans capitalize font-medium text-xl text-[#000000]"
      >
        {displayRoute ? displayRoute : ""}
      </h1>
    </div>
  );
};

export default Header;
