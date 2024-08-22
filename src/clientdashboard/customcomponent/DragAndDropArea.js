import React, { useState } from "react";

const DragAndDropArea = () => {
  const [files, setFiles] = useState({ audio: null, video: null });
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type.startsWith("audio/")) {
      setFiles((prevFiles) => ({ ...prevFiles, audio: selectedFile }));
      setFile(selectedFile);
    }
  };

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("border-green-500");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("border-green-500");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("border-green-500");

    const droppedFiles = Array.from(e.dataTransfer.files).filter(
      (file) => file.type.startsWith("audio/") || file.type.startsWith("video/")
    );

    const newFiles = { ...files };
    droppedFiles.forEach((file) => {
      if (file.type.startsWith("audio/") && !newFiles.audio) {
        newFiles.audio = file;
        setFile(file);
      } else if (file.type.startsWith("video/") && !newFiles.video) {
        newFiles.video = file;
      }
    });

    setFiles(newFiles);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className="p-4 w-full m-2 border-2 border-dashed rounded border-gray-500"
    >
      <div className="mb-2 flex items-center justify-center rounded-full">
        <div className="bg-[#DBDEE4] px-2 py-2 rounded-full">
          <img
            src={
              process.env.PUBLIC_URL +
              "/image/clientimage/audio-voice-clone.png"
            }
            className="w-[24px] h-[24px]"
            alt="audio icon"
          />
        </div>
      </div>
      <div>
        <p className="text-gray-700 text-sm font-bold mb-2 text-center">
          Upload an audio file by dragging and dropping it here
        </p>
        <p className="text-[#565656] font-inter font-normal text-center text-xs mt-[8px]">
          Upload High Quality Audio Sample
        </p>
        <div className="flex justify-center items-center">
          <input
            id="fileInput"
            type="file"
            accept="audio/*"
            onChange={handleFileChange}
            className="hidden"
          />
          {!files.audio && (
            <button
              type="button"
              onClick={handleButtonClick}
              className="mt-[24px] px-4 py-2 text-[#565656] font-inter font-medium text-sm rounded-[20px] border border-[#565656] hover:bg-[#E8E8E8] hover:shadow-md focus:outline-none"
            >
              Upload Audio
            </button>
          )}
        </div>
      </div>
      <div className="mt-4">
        {files.audio && (
          <div className="p-2 border-b border-gray-300">
            <p>{files.audio.name}</p>
            <audio controls className="w-full">
              <source
                src={URL.createObjectURL(files.audio)}
                type={files.audio.type}
              />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
        {files.video && (
          <div className="p-2 border-b border-gray-300">
            <p>{files.video.name}</p>
            <video controls className="w-full">
              <source
                src={URL.createObjectURL(files.video)}
                type={files.video.type}
              />
              Your browser does not support the video element.
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default DragAndDropArea;
