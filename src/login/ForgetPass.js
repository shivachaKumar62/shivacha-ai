import React, { useState, useEffect } from "react";
import { GoogleLogin } from "@react-oauth/google";
import AOS from "aos";
import { toast } from "react-toastify";
import "aos/dist/aos.css";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
const sentences = [
  "Professional video production",
  "AI Bulk Video Generator",
  "AI Bulk voice Generator",
  "AI Bulk Subtitle Generator",
  "Corporate Video Generator",
  "Corporate Video Generator",
];
const ForgetPass = () => {
  const navigate = useNavigate()
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out",
      once: true,
    });
  }, []);
  const initialValues = { emailText: ""};
  const [loginData, setLoginData] = useState(initialValues);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSentence(
          (prevSentence) => (prevSentence + 1) % sentences.length
        );
        setFade(true);
      }, 500); // Transition duration (half of the interval duration)
    }, 3000); // Change sentence every 3 seconds

    return () => clearInterval(interval);
  }, []);
  const handleChange = (event) => {
    const { name, value } = event.target;
    
      setLoginData({ ...loginData, [name]: value });
    
  };
  
   const handleSubmit = async (event) => {
     event.preventDefault();
     if (!loginData.emailText) {
       toast.warning("Please fill the required fields!");
       return;
     }
    
     
     try {
       const response = await axios.post(
         "http://65.1.104.84:8000/user/forgot/",
         { email: loginData.emailText },
         {
           headers: {
             "Content-Type": "application/json",
           },
         }
       );
       console.log(response,'kkk')
       if (response?.data?.message === "Email verified") {
         toast.success("Verificcation Link sent successfully");
         
         navigate("/new-password", { state: { email: loginData.emailText } });
       }
     } catch (error) {
       console.error("Error uploading file", error);
       toast.error(toast.error(error.response.data.error));
     }
   };
  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <div className="max-h-[100vh] h-screen">
      <div className="max-w-[1440px]  mx-auto h-full">
        <div className="grid grid-cols-12 gap-4 h-full">
          <div
            className="col-span-7 max-h-full relative"
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
            <div className="flex  justify-center items-center h-[90vh]">
              <div className="bg-white border-[5px] border-white   w-[65%] h-[300px]  bg-opacity-75 rounded-md px-6">
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
                    src={
                      process.env.PUBLIC_URL + "./image/login/logo-group.png"
                    }
                    className="w-[168px] h-[48px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5 h-full overflow-auto">
            <div className="w-[80%] mx-auto flex flex-col mt-[50px]">
              <div>
                <h2 className="font-worksans text-center font-semibold text-[24px] text-[#1E1E1E]">
                  Get Started With Shivacha AI
                </h2>
                <p className="text-[#7E7E7E] font-worksans font-normal text-base text-center pt-[12px]">
                  Getting started is easy
                </p>
                <div className="mb-[36px] mt-[48px]">
                  <GoogleLogin
                    onSuccess={responseMessage}
                    onError={errorMessage}
                  />
                </div>
                <div className="mb-[26px]  flex items-center  w-full">
                  <hr className="border-gray-300 my-4  w-full" />
                  <span className="font-normal w-[80%] text-center font-worksans text-sm text-[#565656]">
                    Or continue with
                  </span>
                  <hr className="border-gray-300 my-4  w-full" />
                </div>
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
                        className="font-worksans w-full font-normal text-xl text-[#565656] px-3 py-3 rounded-md bg-[#F9F9F9] focus:outline-none shadow-md"
                        placeholder="Enter email"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#47B3FF] hover:bg-blue-600 w-full text-white font-semi py-2 px-4 mt-7 rounded"
                    >
                      Reset Password
                    </button>
                  </form>
                  <div className="flex justify-center items-center mt-4 mb-4">
                    <p className="text-gray-500">
                      By Signing in you accept
                      <span className="text-[#47B3FF] cursor-pointer pl-2">
                        our Terms & Conditions
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center items-center mt-4 mb-4">
                    <span className="text-gray-500">Already registered?</span>
                    <NavLink to="/login">
                      <span className="text-[#47B3FF] cursor-pointer pl-1">
                        Login
                      </span>
                    </NavLink>
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

export default ForgetPass;
