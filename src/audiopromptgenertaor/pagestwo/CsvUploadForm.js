import React, { useState } from "react";
import axios from "axios";

const CsvUploadForm = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("csv", file);
    formData.append("user_id", "66701c9bc274b8e94295b763");

    try {
      const response = await axios.post("http://15.206.37.90:8000/csv/upload/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully", response.data);
    } catch (error) {
      console.error("Error uploading file", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept=".csv" onChange={handleFileChange} />
      <button type="submit">IMPORT CSV</button>
    </form>
  );
};

export default CsvUploadForm;
