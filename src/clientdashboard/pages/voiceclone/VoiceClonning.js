



import React, { useState, useEffect, useRef } from "react";
import { Select } from "antd";
import VoiceRecorder from "./VoiceRecorder";
import { toast } from "react-toastify";
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { CiVolumeHigh } from "react-icons/ci";
import {Slider} from "antd"
import "../aistudio/aicss.css";
import { deleteRequest, postRequestImageVideo } from "../../../api";
const VoiceClonning = () => {
  const textareaRef = useRef(null);
  const [accent, setAccent] = useState("");
  const [volumeDeleteModal, setVolumeDeleteModal] = useState(true);
  const [accentStrength, setAccentStrength] = useState(0);
  const [deleteId, setDeleteId] = useState();
  const [showGif, setShowGif] = useState(false);
  const [audioPart,setAudioPart] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showResponeModal, setShowResponseModal] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
   const [responseAudio, setResponseAudio] = useState(null);
  const [formData, setFormData] = useState({
    text: "",
    audio:null
  });
  const [agree, setAgree] = useState(false);

  const [audioURL, setAudioURL] = useState(null);

  console.log(audioPart, "audo");

  const textData = [
    {
      value: "en",
      text: "Once upon a time, there was a small village where lived a kind boy named Raju and a clever dog named Timmy. Raju and Timmy were the best of friends. They always played together and helped each other out",
    },
    {
      value: "hi",
      text: "एक बार की बात है, एक छोटा सा गांव था। वहाँ एक प्यारा सा लड़का, राजू, और एक चालाक कुत्ता, टिम्मी, रहते थे। राजू और टिम्मी बहुत अच्छे दोस्त थे। दोनों हमेशा साथ खेलते और एक-दूसरे की मदद करते थे।",
    },
  ];

  useEffect(() => {
    const defaultText = textData.find((data) => data.value === accent)?.text;
    setFormData((prevFormData) => ({
      ...prevFormData,
      text: defaultText || "",
    }));
    adjustTextareaHeight();
  }, [accent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleSelectChange = (value) => {
    setAccent(value);
  };
 

 const handleSubmit = async (event) => {
   event.preventDefault();
   setShowGif(true)
   const temperature = ((accentStrength / 100) * 1.5)?.toFixed(2);

   
   
const data = new FormData();
data.append("text", formData.text);
    // data.append("temperature", accentStrength ===0?0.7: parseFloat(temperature));
    data.append("temperature",0.7);
    data.append("language", accent);
    data.append("voice_sample", audioFile); 
   

     try {
       const response = await postRequestImageVideo("/voice_clone", data);
console.log(response,'g')
       if (response.status === 200) {

          setDeleteId(response?.data?.audio_id);
          setShowGif(false);
         setShowResponseModal(true);
        

         // Decode base64 audio data
         const binaryString = atob(response?.data?.audio_data);
         const binaryLength = binaryString.length;
         const bytes = new Uint8Array(binaryLength);
         for (let i = 0; i < binaryLength; i++) {
           bytes[i] = binaryString.charCodeAt(i);
         }
         const audioBlob = new Blob([bytes], { type: "audio/wav" });
         const url = URL.createObjectURL(audioBlob);

         setResponseAudio(url);
         setFormData({
           voice: "",
           accent: "",
           text: "",
           accentStrength: 0,
         });
       }
     } catch (error) {
      //  toast.error(error.response?.data?.message);
     } finally {
      //  setShowGif(false);
      //  setTimerGif(false);
     }
   
 };
 const handleDelete = async () => {
   try {
     await deleteRequest(`/delete_cloned_audio/${deleteId}`);
     toast.success("Audio deleted successfully");
     setShowDeleteModal(false);
   } catch (error) {
     toast.error("Failed to delete Audio");
   }
 };

  const handleStopRecording = (audioUrl) => {
    setAudioURL(audioUrl);
    // setShowGif(true)
  };


const handleDeleteGenerate = () => {
  setShowResponseModal(false);
  setVolumeDeleteModal((data) => !data);
  setShowDeleteModal(true);
};
  

  return (
    <div>
      {showGif && (
        <div className="fixed inset-0 z-40 w-[100%] flex justify-center items-center bg-black bg-opacity-50">
          <img
            src={`${process.env.PUBLIC_URL}/image/audio/Upload-excel-Sheet.gif`}
            className="w-[248px] h-[248px]"
          />
        </div>
      )}
      {showDeleteModal && (
        <div className="fixed  inset-0 z-40 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-[16px] w-[429px] px-[36px] py-[36px] z-20">
            <div className="flex justify-center items-center mb-[38px]">
              <img
                src={
                  process.env.PUBLIC_URL + "./image/clientimage/deleteicon.png"
                }
                className="w-[48px] h-[48px]"
                alt="icon"
              />
            </div>
            <div className="flex justify-center items-center mb-[16px]">
              <p className="font-worksans text-xl font-semibold text-[#212121]">
                Delete Audio
              </p>
            </div>
            <div>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                Are you sure you want to delete this Audio?
              </p>
              <p className="text-center font-inter font-medium text-base text-[#565656]">
                This Action can't be undone.
              </p>
            </div>
            <div className="flex justify-center items-center gap-5 mt-[41px]">
              <button
                onClick={() => setShowDeleteModal(false)}
                className="w-[170px] h-[42px] bg-[#F3F3F3] rounded-[8px] text-center font-worksans font-medium text-lg text-[#000000]"
              >
                Cancel
              </button>
              <button
                className="w-[170px] h-[42px] bg-[#FF4439] rounded-[8px] text-center font-worksans font-medium text-lg text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* translation api end */}
      {showResponeModal && (
        <div className="fixed inset-0 w-[100%] z-40 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white rounded-[16px] w-[50%] H-[315px] px-[40px] py-[32px]">
            <div
              className="flex justify-end  cursor-pointer"
              onClick={() => setShowResponseModal(false)}
            >
              <span>
                <RxCross1 />
              </span>
            </div>
            <div className="flex justify-center  cursor-pointer">
              <span>
                <CiVolumeHigh className="text-black text-5xl" />
              </span>
            </div>
            <div className="mt-[20px]">
              <span className="font-worksans font-normal text-base text-[#212121] pb-[12px] block">
                Audio duration
              </span>
              <audio controls src={responseAudio} className="w-full" />
            </div>

            <div
              className={` flex items-center justify-center bg-[#E8E8E8] hover:text-white w-[200px] hover:bg-red-500 gap-2 rounded-[8px] mt-[20px]   py-[8px] my-1   mx-auto cursor-pointer`}
              onClick={handleDeleteGenerate}
            >
              <RiDeleteBin5Line className="" />
              <p>Delete</p>
            </div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-[12px] px-[16px] py-[24px]">
        <p
          style={{
            background: "linear-gradient(to right, #0096FF, #8E54E9, #8E54E9)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          className="font-medium font-worksans text-xl"
        >
          Clone Your Voice with Ai
        </p>
        <p className="font-worksans font-normal pt-2 text-base text-[#565656]">
          Clone a voice with AI to perfectly match the original tone, timbre,
          and emotion!
        </p>
      </div>
      <div className="w-full mt-[24px] bg-white">
        <form
          onSubmit={handleSubmit}
          className="w-full mx-auto p-4 border rounded-lg shadow-md"
        >
          <div className="grid grid-cols-2 gap-[24px]">
            <div className="">
              <label className="block text-[#212121] text-base font-normal font-worksans mb-[12px]">
                Select Your Accent
              </label>
              <Select
                showSearch
                style={{ width: "100%", height: "52px" }}
                className="select-box"
                placeholder="Select an Accent"
                // value={accent}
                onChange={handleSelectChange}
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

            <div className="">
              <label className="block text-[#212121] text-base font-normal font-worksans mb-[12px]">
                Accent Strength -
              </label>
              <Slider
                defaultValue={50}
                // value={accentStrength}
                onChange={(checked) => setAccentStrength(checked)}
              />
              {/* <input
                type="range"
                min="0"
                max="100"
                value={accentStrength}
                onChange={(e) => setAccentStrength(e.target.value)}
                className="w-full"
              /> */}
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
          <div className="mt-[24px]">
            <label className="block text-[#565656] text-base font-worksans font-normal mb-[12px]">
              Read the Story
            </label>
            <textarea
              className="w-full border focus:outline-none bg-[#F2F2F2] text-[#565656] font-worksans font-normal text-base border-gray-300 p-4 rounded-lg"
              ref={textareaRef}
              readOnly
              name="text"
              value={formData.text}
              onChange={handleChange}
              placeholder="Transform your ideas into stunning audio effortlessly with Shivacha AI. Type your script and let us bring your vision to life!"
              rows={4}
              style={{ overflow: "hidden" }}
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

          <div className="flex flex-col mt-[24px]">
            <div className="flex justify-start items-start">
              <input
                type="checkbox"
                checked={agree}
                onChange={(e) => setAgree(e.target.checked)}
                className="form-checkbox mt-[3px]"
              />
              <span className="pl-4 text-[#565656] font-inter font-normal text-sm">
                I confirm that I own the rights to the audio files used for
                cloning this voice and will not use it to produce any sexual,
                hateful, abusive, illegal, fraudulent, or deceitful content.
              </span>
            </div>
            <span className="pl-7 pt-2 text-[#565656] font-inter font-normal text-sm">
              I fully understand and agree to the terms of use and Privacy
              Policy of Shivacha AI.
            </span>
          </div>

          <div className="flex w-full justify-between items-center mt-[24px] ">
            <VoiceRecorder
              handleStop={handleStopRecording}
              showGif={showGif}
              setAudioPart={setAudioPart}
              setShowGif={setShowGif}
              handleSubmit={handleSubmit}
              setAudioFile={setAudioFile}
              audioFile={audioFile}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default VoiceClonning;
