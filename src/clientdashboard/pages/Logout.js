import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

const Logout = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    // Remove the access token
    cookies.remove("AccessToken");

    // Navigate to the home page
    navigate("/");
  }, [navigate, cookies]);

  return null;
};

export default Logout;
