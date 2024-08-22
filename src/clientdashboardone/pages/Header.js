import React, { useState, useEffect } from "react";
import "../component/AppSidebarNav.css";
const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
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
      className={`${
        isSticky ? "sticky-header" : ""
      } bg-[#E8E8E8]  mt-[16px] mb-[32px] px-[24px] h-[72px] flex items-center mx-[24px] rounded-[12px]`}
    >
      <h1>Home</h1>
    </div>
  );
};

export default Header;
