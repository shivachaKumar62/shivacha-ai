import React, { useState } from "react";
import axios from "axios";

const AudioUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select an audio file first!");
      return;
    }

    const formData = new FormData();
    formData.append("audio", file);

    try {
      const response = await axios.post("/api/upload-audio", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Audio uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading audio", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      <button type="submit">Upload Audio</button>
    </form>
  );
};

export default AudioUploadForm;
