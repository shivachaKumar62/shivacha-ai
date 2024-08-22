import React, { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa6";
import { toast } from "react-toastify";
import { IoEyeOffOutline } from "react-icons/io5";
import { GoogleLogin } from "@react-oauth/google";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from "universal-cookie";
import { postRequest, serverSiteKey } from "../api";
const sentences = [
  "Professional video production",
  "AI Bulk Video Generator",
  "AI Bulk voice Generator",
  "AI Bulk Subtitle Generator",
  "Corporate Video Generator",
  "Corporate Video Generator",
];
const Login = () => {
  const cookie = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const initialValues = { emailText: "", passwordText: "" };
  const [loginData, setLoginData] = useState(initialValues);
  const [showPassword, setShowPassword] = useState(false);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [fade, setFade] = useState(true);
  const [isCaptchaChecked, setIsCaptchaChecked] = useState(false);

  const handleCaptchaChange = (value) => {
    if (value) {
      setIsCaptchaChecked(true);
      toast.success("successfully checked!");
    } else {
      setIsCaptchaChecked(false);
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSentence(
          (prevSentence) => (prevSentence + 1) % sentences.length
        );
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.trim() !== "") {
      setLoginData({ ...loginData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: "" });
    }
  };
  const handleChaneIcon = () => {
    setShowPassword((data) => !data);
  };
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!loginData.emailText) {
      toast.warning("Please fill the required fields!");
      return;
    }
    if (!loginData.passwordText) {
      toast.warning("Please fill the required fields!");
      return;
    }
    
    // if (!isCaptchaChecked) {
    //   toast.error("Please verify the captcha");
    //   return;
    // }
    try {
      const response = await postRequest("/login",{ email: loginData.emailText, password: loginData.passwordText });

      if (response?.data?.access_token) {
        toast.success("Login sucessfull");
        cookie.set("AccessToken", response?.data?.access_token);
        navigate("/");
      }
    } catch (error) {

      
      toast.error(error.response.data.message);
    }
  };
  const responseMessage = (response) => {
    console.log(response,'rr');
  };
  const errorMessage = (error) => {
    console.log(error,'err');
  };
  return (
    <div className="max-h-[100vh] h-screen">
      <div className=" h-full">
        <div className="grid grid-cols-12 gap-4 h-full">
          <div
            // className="max-sm:hidden sm:hidden md:visible   lg:col-span-7 max-h-full relative"
            className="hidden md:block md:col-span-6 lg:col-span-7 max-h-full relative"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/image/login/login-part.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              height: "100vh",
            }}
          >
            <div className=" absolute top-[15px] left-5">
              <NavLink to="/">
                <img
                  src={process.env.PUBLIC_URL + "hd-logo.png"}
                  className="max-sm:w-[124px] sm:w-[245px] sm:h-[56px] max-sm:h-[28px]"
                />
              </NavLink>
            </div>
            <div className="flex  justify-center items-center md:h-[100vh] lg:h-[90vh]">
              <div className="bg-white border-[5px] md:mt-10 lg:mt-0 border-white md:w-[90%] md:h-[350px] lg:w-[65%]  lg:h-[300px]  bg-opacity-75 rounded-md px-6">
                <p className="font-worksans font-semibold text-xl text-[#212121] pt-10 pb-2 ">
                  Shivacha Ai Delivers
                </p>
                <div className="">
                  <p
                    className={`text-2xl font-semibold transition-opacity duration-300  ${
                      fade ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      background:
                        "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {sentences[currentSentence]}
                  </p>
                  <p className="font-medium font-worksans text-base text-[#212121] pt-3">
                    Transform your content creation with our AI-driven Bulk AI
                    Video, audio, reading voice and customize generator,
                    crafting multiple engaging videos in minutes.
                  </p>
                </div>
                <div className="flex justify-end pt-[20px] items-end">
                  <img
                    src={process.env.PUBLIC_URL + "./image/login/our-image.png"}
                    className="w-[208px] h-[48px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="max-sm:col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-5 h-full overflow-auto">
            <div className="w-[80%] mx-auto flex flex-col mt-[50px]">
              <div>
                <h2 className="font-worksans text-center font-semibold text-[24px] text-[#1E1E1E]">
                  Welcome Back
                </h2>
                <p className="text-[#7E7E7E] font-worksans font-normal text-base text-center pt-[12px]">
                  Begin your journey with Shivacha Ai
                </p>

                <div>
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4 mt-10 flex flex-col gap-3">
                      <label className="font-worksans font-normal text-base text-[#212121]">
                        Email
                      </label>
                      <input
                        type="email"
                        name="emailText"
                        value={loginData.emailText}
                        onChange={handleChange}
                        className="font-worksans w-full font-normal text-xl text-[#565656] px-3 py-3 rounded-md bg-[#F9F9F9] focus:outline-none "
                        placeholder="Enter email"
                      />
                    </div>
                    <div className="mb-1 flex flex-col gap-3">
                      <label className="font-worksans font-normal text-base text-[#212121]">
                        Password
                      </label>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={loginData.passwordText}
                          name="passwordText"
                          onChange={handleChange}
                          className="font-worksans font-normal text-xl text-[#565656] px-3 py-3 rounded-md w-full bg-[#F9F9F9] focus:outline-none "
                          placeholder="Enter password"
                        />

                        <span
                          onClick={handleChaneIcon}
                          className="absolute right-4 top-5 cursor-pointer"
                        >
                          {showPassword ? <FaRegEye /> : <IoEyeOffOutline />}
                        </span>
                      </div>
                    </div>
                    <NavLink to="/forget-password">
                      <p className="text-right pt-2 text-[#212121] hover:text-blue-500">
                        Forgot password?
                      </p>
                    </NavLink>
                    <div className="w-full mt-4">
                      <ReCAPTCHA
                        sitekey={serverSiteKey}
                        // sitekey="6Lf48xMqAAAAAOex8ulpZ137BsmHR2Z828UPZNPG"
                        onChange={handleCaptchaChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[#47B3FF] hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded"
                    >
                      Login
                    </button>
                  </form>
                  <div className="mb-[36px] mt-[48px]">
                    <div className="mb-[26px]  flex items-center  w-full">
                      <hr className="border-gray-300 my-4  w-full" />
                      <span className="font-normal w-[80%] text-center font-worksans text-sm text-[#565656]">
                        Or continue with
                      </span>
                      <hr className="border-gray-300 my-4  w-full" />
                    </div>
                    <div className="w-full flex justify-center">
                      {/* <GoogleLogin
                        onSuccess={responseMessage}
                        onError={errorMessage}
                        className="w-[100%]"
                      /> */}
                    </div>
                  </div>

                  <div className="flex justify-center items-center mt-4 mb-4">
                    <p className="text-gray-500">
                      By signing in you accept
                      <span className="text-[#47B3FF] cursor-pointer pl-2">
                        our Terms & Conditions
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-4 mb-4">
                    <span className="text-gray-500">New to Shivacha Ai?</span>
                    {/* <NavLink to="/signup">
                      <span className="text-[#47B3FF] cursor-pointer pl-1">
                        Sign Up
                      </span>
                    </NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
