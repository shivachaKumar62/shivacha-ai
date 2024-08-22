import React, { useState } from "react";
import axios from "axios";

const VideoUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a video file first!");
      return;
    }

    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await axios.post("/api/upload-video", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Video uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading video", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button type="submit">Upload Video</button>
    </form>
  );
};

export default VideoUploadForm;
