import React, { useState } from 'react'
import VideoInput from '../../../customcomponent/VideoInput';
import "../../../css/videoinput.css";
const AddVideo = () => {
    const [showVideoProceed,setVideoProceed] = useState(false)
  return (
    <div className="bg-white rounded-[16px] py-[24px] px-[16px] h-[90vh]">
      <div className="flex justify-between items-center">
        <p className="font-worksans font-medium text-xl text-[#000000]">
          Hitesh Kumar
        </p>
        <div>
          {showVideoProceed && <button className="bg-[#47B3FF] text-white rounded-[8px] font-worksans font-medium text-base px-2 py-1 hover:bg-blue-500">Proceed</button>}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-[377px] my-auto mx-auto h-[500px] ">
        <div className="bg-[#DBDEE4] opacity-40 px-2 py-2 rounded-full ">
          <img
            src={
              process.env.PUBLIC_URL +
              "./image/clientimage/shivachaaivideo/add-video-icon.png"
            }
            className="w-[24px] h-[24px]"
          />
        </div>
        <div className="mt-[24px]">
          <p className="text-center font-inter font-medium text-base text-[#212121]">
            Upload an audio file by dragging and dropping it here
          </p>
        </div>
        <div className="mt-[8px]">
          <p className="text-center font-inter font-normal text-sm text-[#565656]">
            Video file up to 100 Mb
          </p>
        </div>
        <div className="pt-[24px]">
          {/* <button className='border hover:border-none hover:bg-[#E8E8E8] rounded-[20px] border-[#565656] text-[#565656] font-inter font-medium text-sm  px-3 py-2'>Upload Video</button> */}
          <VideoInput setVideoProceed={setVideoProceed} />
        </div>
      </div>
    </div>
  );
}

export default AddVideo
