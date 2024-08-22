






// import React, { useState, useRef, useEffect } from "react";
// import { toast } from "react-toastify";
// import { Select } from "antd";
// import { useNavigate } from "react-router-dom";
// import CustomAudioPlayer from "../../customcomponent/CustomAudioPlayer";
// import { postRequestImageVideo } from "../../../api";
// import { getTokenFromCookie } from "../../../getTokenFromCookie";
// import "./aicss.css";

// import axios from "axios";

// const BulkAudio = () => {
//   const navigate = useNavigate();
//   const textareaRef = useRef(null);
//   const [audioFile, setAudioFile] = useState(null);
//   const [showGif, setShowGif] = useState(false);
//   const [formData, setFormData] = useState({
//     voice: "",
//     accent: "",
//     text: "",
//     projectName: "",
//     accentStrength: 0.7,
//   });
//   const [excelFile, setExcelFile] = useState(null);

//   const [errors, setErrors] = useState({});

//   // start translation
//   const [translatedText, setTranslatedText] = useState("");
//   const [targetLanguage, setTargetLanguage] = useState("en"); // Default target language is English

//   const adjustTextareaHeight = () => {
//     const textarea = textareaRef.current;
//     if (textarea) {
//       textarea.style.height = "auto";
//       textarea.style.height = `${textarea.scrollHeight}px`;
//     }
//   };

//   useEffect(() => {
//     adjustTextareaHeight(); // Adjust height on initial render
//   }, [formData.text]);

//   const translateText = async () => {
//     try {
//       const response = await axios.get(
//         `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=en|${targetLanguage}`
//       );
//       const translatedText = response.data.responseData.translatedText;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         text: translatedText,
//       }));
//       setTranslatedText(response.data.responseData.translatedText);
//     } catch (error) {
//       console.error("Error translating text:", error);
//     }
//   };

//   // end translation

//   const validateForm = () => {
//     let newErrors = {};
//     if (!formData.voice) newErrors.voice = "Please select a voice.";
//     if (!formData.accent) newErrors.accent = "Please select an accent.";
//     if (!formData.text) newErrors.text = "Please enter text to convert.";
//     if (!formData.projectName)
//       newErrors.projectName = "Please enter a project name.";
//     if (!excelFile) newErrors.excelFile = "Please upload an Excel file.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     adjustTextareaHeight();
//   };

//   const handleButtonofExcelClick = () => {
//     document.getElementById("excelInput").click();
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setExcelFile(file);
//   };

//   const handleSelectChange = (value, name) => {
//     setAudioFile(value);
//     setFormData({ ...formData, [name]: value });
    
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const temperature = ((formData.accentStrength / 100) * 1.5)?.toFixed(2);
//     const token = getTokenFromCookie();

//     if (validateForm()) {
//       setShowGif(true);

//       const data = new FormData();
//       data.append("text", formData.text);
//       data.append("language", formData.accent);
//       data.append("temperature", temperature);
//       data.append("speaker", formData.voice);
//       data.append("project_name", formData.projectName);
//       data.append("file", excelFile);

//       try {
//         const response = await postRequestImageVideo("/bulk_synthesize", data);
//         console.log(response, "bulkresp");
//         if (response.status === 200) {
//           setShowGif(false);
//           toast.success(response?.data?.message);
//           navigate("/Shivacha-Ai-Studio/bulk-audio");
//         }
//       } catch (error) {
//         toast.error(error.response?.data?.message || "An error occurred.");
//       } finally {
//         setShowGif(false);
//       }
//     }
//   };

//   return (
//     <div className="">
//       {showGif && (
//         <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
//           <img
//             src={`${process.env.PUBLIC_URL}/image/bulkvideo/Upload-excel-Sheet.gif`}
//             className="w-[248px] h-[248px]"
//           />
//         </div>
//       )}

//       <div className="w-full py-[16px] px-[16px] bg-white rounded-2xl ">
//         <form onSubmit={handleSubmit} className="w-full ">
//           <div className="py-4 px-4 bg-[#E8E8E8] rounded-2xl border shadow-md">
//             <div className="grid grid-cols-2 gap-[24px] mb-2 ">
//               <div className="">
//                 <label className="block text-[#212121] text-sm font-normal font-worksans mb-3">
//                   Project Name{" "}
//                   {errors.projectName && (
//                     <span className="text-red-500 font-bold">*</span>
//                   )}
//                 </label>
//                 <input
//                   type="text"
//                   name="projectName"
//                   value={formData.projectName}
//                   onChange={handleChange}
//                   placeholder="Enter the Project name"
//                   className="w-full px-4 py-2 border rounded-[8px] font-worksans font-normal text-base bg-[#F5F5F5] outline-none"
//                 />
//               </div>
//               <div className=" w-full  mb-3  ">
//                 <label className="block text-[#212121] text-sm font-normal font-worksans mb-3">
//                   Upload Excel Sheet
//                   {excelFile === "null" && (
//                     <span className="text-red-500 font-bold">*</span>
//                   )}
//                 </label>
//                 <input
//                   id="excelInput"
//                   type="file"
//                   accept=".xlsx, .xls"
//                   onChange={handleFileChange}
//                   className="w-full p-2 border rounded hidden"
//                 />
//                 <div
//                   className="flex px-4 border h-[45px] mt-1 bg-white  rounded-[8px] justify-between items-center cursor-pointer "
//                   onClick={handleButtonofExcelClick}
//                 >
//                   <div className="flex gap-2 items-center">
//                     <div className="bg-[#E8E8E8]  px-1 py-1 rounded-full shadow-lg">
//                       <img
//                         src={`${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/excel-bulk.png`}
//                         className="w-[16px] h-[16px]"
//                         alt="img"
//                       />
//                     </div>
//                     <span className="font-worksans  font-medium text-lg text-[#565656]">
//                       {excelFile === null
//                         ? "Upload Excel Sheet"
//                         : excelFile?.name}
//                     </span>
//                   </div>
//                   <div className="bg-[#E8E8E8] flex items-center justify-center  px-1 py-1 rounded-full">
//                     <img
//                       src={`${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/upload-bulk.png`}
//                       className="w-[16px] h-[16px]"
//                       alt="img"
//                     />
//                   </div>
//                 </div>
//                 {/* {errors.excelFile && <span className="text-red-500 font-bold">*</span>} */}
//               </div>
//             </div>

//             <div className="bg-[#fff] px-[8px] py-[12px] rounded-[12px]">
//               <div className="grid grid-cols-2 gap-[24px] ">
//                 <div className=" mb-4">
//                   <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
//                     Select your Accent{" "}
//                     {errors.accent && (
//                       <span className="text-red-500 font-bold">*</span>
//                     )}
//                   </label>
//                   <Select
//                     showSearch
//                     style={{ width: "100%", height: "52px" }}
//                     className="select-box"
//                     placeholder="Select an Accent"
//                     onChange={(value) => handleSelectChange(value, "accent")}
//                     filterOption={(input, option) =>
//                       (option?.label ?? "")
//                         .toLowerCase()
//                         .includes(input.toLowerCase())
//                     }
//                     options={[
//                       { value: "en", label: "English" },
//                       { value: "hi", label: "Hindi" },
//                     ]}
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
//                     Select Voice{" "}
//                     {errors.voice && (
//                       <span className="text-red-500 font-bold">*</span>
//                     )}
//                   </label>
//                   <div className="flex rounded-[12px]  items-center justify-between border px-2 py-2 bg-[#F2F2F2]">
//                     <Select
//                       showSearch
//                       style={{ width: "93%", height: "37px" }}
//                       placeholder="Select Voice"
//                       onChange={(value) => handleSelectChange(value, "voice")}
//                       filterOption={(input, option) =>
//                         (option?.label ?? "")
//                           .toLowerCase()
//                           .includes(input.toLowerCase())
//                       }
//                       options={[
//                         { value: "Rogger.wav", label: "Rogger" },
//                         { value: "Angelina.wav", label: "Angelina" },
//                         { value: "Hitesh.wav", label: "Hitesh" },
//                         { value: "Nisha.wav", label: "Nisha" },
//                       ]}
//                     />
//                     <CustomAudioPlayer audioFile={audioFile} />
//                   </div>
//                 </div>
//               </div>
//               <div className="grid grid-cols-1">
//                 <div className="mb-4">
//                   <label className="block text-[#212121] font-worksans text-base font-normal mb-2">
//                     Accent Strength
//                   </label>
//                   <input
//                     name="accentStrength"
//                     type="range"
//                     min="0"
//                     max="100"
//                     value={formData.accentStrength}
//                     onChange={handleChange}
//                     className="w-full text-[#565656]"
//                   />
//                   <div className="flex justify-between items-center leading-3">
//                     <span className="font-worksans font-normal text-xs text-[#565656]">
//                       Low
//                     </span>
//                     <span className="font-worksans font-normal text-xs text-[#565656]">
//                       High
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               <div className="">
//                 <div className="flex justify-between items-center">
//                   <label className="block text-[#565656] font-worksans font-normal text-base mb-2">
//                     Enter the prompt{" "}
//                     {errors.text && (
//                       <span className="text-red-500 font-bold">*</span>
//                     )}
//                   </label>
//                 </div>

//                 <textarea
//                   // ref={textareaRef}
//                   name="text"
//                   maxLength={250}
//                   value={formData.text}
//                   onChange={handleChange}
//                   // onInput={adjustTextareaHeight}
//                   className="w-full border focus:outline-none bg-[#F2F2F2] text-[#565656] font-worksans font-normal text-base border-gray-300 p-4 rounded-lg"
//                   placeholder="Hello {name} Welcome to Shivacha Ai."
//                   rows={2} // Start with a single row
//                   // style={{ overflow: "hidden",height:"48px" }} // Hide scrollbar
//                 />
//                 <div className="flex justify-between items-center">
//                   <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
//                     {formData.text.length} / 250
//                   </p>
//                   <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
//                     Total Remaining Quota: {250 - formData.text.length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="flex justify-start mt-[24px]">
//             <button
//               type="submit"
//               className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
//             >
//               Generate
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default BulkAudio;







import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-toastify";
import { Select,Slider } from "antd";
import { useNavigate } from "react-router-dom";
import CustomAudioPlayer from "../../customcomponent/CustomAudioPlayer";
import { postRequestImageVideo } from "../../../api";
import { getTokenFromCookie } from "../../../getTokenFromCookie";
import "./aicss.css";

import axios from "axios";

const BulkAudio = () => {
  const navigate = useNavigate();
  const textareaRef = useRef(null);
  const [audioFile, setAudioFile] = useState(null);
  const [showGif, setShowGif] = useState(false);
  const [formData, setFormData] = useState({
    voice: "",
    accent: "",
    text: "",
    projectName: "",
    accentStrength: 0.7,
    excelFile: null,
  });
  const [errors, setErrors] = useState({});

  // start translation
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("en"); // Default target language is English

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  useEffect(() => {
    adjustTextareaHeight(); // Adjust height on initial render
  }, [formData.text]);

  const translateText = async () => {
    try {
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${formData.text}&langpair=en|${targetLanguage}`
      );
      const translatedText = response.data.responseData.translatedText;
      setFormData((prevFormData) => ({
        ...prevFormData,
        text: translatedText,
      }));
      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Error translating text:", error);
    }
  };

  // end translation

  const validateForm = () => {
    let newErrors = {};
    if (!formData.voice) newErrors.voice = "Please select a voice.";
    if (!formData.accent) newErrors.accent = "Please select an accent.";
    if (!formData.text) newErrors.text = "Please enter text to convert.";
    if (!formData.projectName)
      newErrors.projectName = "Please enter a project name.";
    if (!formData.excelFile)
      newErrors.excelFile = "Please upload an Excel file.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    adjustTextareaHeight();
  };

  const handleButtonofExcelClick = () => {
    document.getElementById("excelInput").click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, excelFile: file });
  };

  const handleSelectChange = (value, name) => {
    setAudioFile(value);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const temperature = ((formData.accentStrength / 100) * 1.5)?.toFixed(2);
    const token = getTokenFromCookie();

    if (validateForm()) {
      setShowGif(true);

      const data = new FormData();
      data.append("text", formData.text);
      data.append("language", formData.accent);
      data.append("temperature", temperature);
      data.append("speaker", formData.voice);
      data.append("project_name", formData.projectName);
      data.append("file", formData.excelFile);

      try {
        const response = await postRequestImageVideo("/bulk_synthesize", data);
       
        if (response.status === 200) {
          setShowGif(false);
          toast.success(response?.data?.message);
          navigate("/Shivacha-Ai-Studio/bulk-audio");
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "An error occurred.");
      } finally {
        setShowGif(false);
      }
    }
  };

  return (
    <div className="">
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img
            src={`${process.env.PUBLIC_URL}/image/audio/Upload-excel-Sheet.gif`}
            className="w-[248px] h-[248px]"
          />
        </div>
      )}

      <div className="w-full py-[16px] px-[16px] bg-white rounded-2xl ">
        <form onSubmit={handleSubmit} className="w-full ">
          <div className="py-4 px-4 bg-[#E8E8E8] rounded-2xl border shadow-md">
            <div className="grid grid-cols-2 gap-[24px] mb-2 ">
              <div className="">
                <label className="block text-[#212121] text-sm font-normal font-worksans mb-3">
                  Project Name{" "}
                  {errors.projectName ? (
                    <span className="text-red-500 font-bold">
                      * ({errors.projectName})
                    </span>
                  ) : (
                    <span className="text-black-500 font-bold">*</span>
                  )}
                </label>
                <input
                  type="text"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleChange}
                  placeholder="Enter the Project name"
                  className="w-full px-4 py-2 border rounded-[8px] font-worksans font-normal text-base bg-[#F5F5F5] outline-none"
                />
              </div>
              <div className=" w-full  mb-3  ">
                <label className="block text-[#212121] text-sm font-normal font-worksans mb-3">
                  Upload Excel Sheet{" "}
                  {errors.excelFile ? (
                    <span className="text-red-500 font-bold ">
                      * ({errors.excelFile})
                    </span>
                  ) : (
                    <span className="text-black-500 font-bold">*</span>
                  )}
                </label>
                <input
                  id="excelInput"
                  type="file"
                  accept=".xlsx, .xls"
                  onChange={handleFileChange}
                  className="w-full p-2 border rounded hidden"
                />
                <div
                  className="flex px-4 border h-[45px] mt-1 bg-white  rounded-[8px] justify-between items-center cursor-pointer "
                  onClick={handleButtonofExcelClick}
                >
                  <div className="flex gap-2 items-center">
                    <div className="bg-[#E8E8E8]  px-1 py-1 rounded-full shadow-lg">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/excel-bulk.png`}
                        className="w-[16px] h-[16px]"
                        alt="img"
                      />
                    </div>
                    <span className="font-worksans  font-medium text-lg text-[#565656]">
                      {formData.excelFile === null
                        ? "Upload Excel Sheet"
                        : formData.excelFile?.name}
                    </span>
                  </div>
                  <div className="bg-[#E8E8E8] flex items-center justify-center  px-1 py-1 rounded-full">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/clientimage/shivachaaivideo/upload-bulk.png`}
                      className="w-[16px] h-[16px]"
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#fff] px-[8px] py-[12px] rounded-[12px]">
              <div className="grid grid-cols-2 gap-[24px] ">
                <div className=" mb-4">
                  <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
                    Select your Accent{" "}
                    {errors.accent ? (
                      <span className="text-red-500 font-bold">
                        *({errors.accent})
                      </span>
                    ) : (
                      <span className="text-black-500 font-bold">*</span>
                    )}
                  </label>
                  <Select
                    showSearch
                    style={{ width: "100%", height: "52px" }}
                    className="select-box"
                    placeholder="Select an Accent"
                    onChange={(value) => handleSelectChange(value, "accent")}
                    filterOption={(input, option) =>
                      (option?.label ?? "")
                        .toLowerCase()
                        .includes(input.toLowerCase())
                    }
                    options={[
                      { value: "en", label: "English" },
                      { value: "hi", label: "Hindi" },
                    ]}
                  />
                </div>
                <div className="mb-4">
                  <label className="block pb-[12px] font-worksans font-normal text-base text-[#212121]">
                    Select Voice{" "}
                    {errors.voice ? (
                      <span className="text-red-500 font-bold">
                        * ({errors.voice})
                      </span>
                    ) : (
                      <span className="text-black-500 font-bold">*</span>
                    )}
                  </label>
                  <div className="flex rounded-[12px]  items-center justify-between border px-2 py-2 bg-[#F2F2F2]">
                    <Select
                      showSearch
                      style={{ width: "93%", height: "37px" }}
                      placeholder="Select Voice"
                      onChange={(value) => handleSelectChange(value, "voice")}
                      filterOption={(input, option) =>
                        (option?.label ?? "")
                          .toLowerCase()
                          .includes(input.toLowerCase())
                      }
                      options={[
                        { value: "Rogger.wav", label: "Rogger" },
                        { value: "Angelina.wav", label: "Angelina" },
                        { value: "Hitesh.wav", label: "Hitesh" },
                        { value: "Nisha.wav", label: "Nisha" },
                      ]}
                    />
                    <CustomAudioPlayer audioFile={audioFile} />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1">
                <div className="mb-4">
                  <label className="block text-[#212121] font-worksans text-base font-normal mb-2">
                    Accent Strength
                  </label>
                  <input
                    name="accentStrength"
                    type="range"
                    min="0"
                    max="100"
                    value={formData.accentStrength}
                    onChange={handleChange}
                    className="w-full text-[#565656]"
                  />
                  {/* <Slider defaultValue={0} onChange={handleChange} /> */}
                  <div className="flex justify-between items-center leading-3">
                    <span className="font-worksans font-normal text-xs text-[#565656]">
                      Low
                    </span>
                    <span className="font-worksans font-normal text-xs text-[#565656]">
                      High
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="flex justify-between items-center">
                  <label className="block text-[#565656] font-worksans font-normal text-base mb-2">
                    Enter the prompt{" "}
                    {errors.text ? (
                      <span className="text-red-500 font-bold">
                        * ({errors.text})
                      </span>
                    ) : (
                      <span className="text-black-500 font-bold">*</span>
                    )}
                  </label>
                </div>

                <textarea
                  ref={textareaRef}
                  name="text"
                  maxLength={250}
                  value={formData.text}
                  onChange={handleChange}
                  onInput={adjustTextareaHeight}
                  className="w-full border focus:outline-none bg-[#F2F2F2] text-[#565656] font-worksans font-normal text-base border-gray-300 p-4 rounded-lg"
                  placeholder="Hello {name} Welcome to Shivacha Ai."
                  rows={2} // Start with a single row
                  style={{ overflow: "hidden", height: "48px" }} // Hide scrollbar
                />
                <div className="flex justify-between items-center">
                  <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
                    {formData.text.length} / 250
                  </p>
                  <p className="text-[#565656] text-xs mt-2 font-worksans font-normal">
                    Total Remaining Quota: {250 - formData.text.length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-start mt-[24px]">
            <button
              type="submit"
              className="bg-[#47B3FF] hover:bg-blue-700 text-white font-bold w-[198px] h-[48px] text-center rounded-full focus:outline-none focus:shadow-outline"
            >
              Generate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BulkAudio;
