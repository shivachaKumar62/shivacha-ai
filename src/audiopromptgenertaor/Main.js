import React, { useState, useEffect } from "react";
import TextInput from "./pages/TextInput";
import Slider from "./pages/Slider";
import Dropdown from "./pages/Dropdown";
// import AudioRecorder from "./pages/AudioRecorder";
import AudioPlayer from "./pages/AudioPlayer";
import axios from "axios";
import AudioUploadForm from "./pagestwo/AudioUploadForm";
import CsvUploadForm from "./pagestwo/CsvUploadForm";


const Main = () => {
  const [text, setText] = useState(
    "Even in the darkest nights, a single spark of hope can ignite the fire of determination within us, guiding us towards a future we dare to dream."
  );
  const [speed, setSpeed] = useState(0.8);
  const [languages, setLanguages] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [speakers, setSpeakers] = useState([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState("Rogger");
  const [audioSrc, setAudioSrc] = useState(null);

  useEffect(() => {
    // Fetch languages
    axios.get("/languages.json").then((response) => {
      setLanguages(response.data);
      setSelectedLanguage(Object.keys(response.data)[0]);
    });

    // Fetch speakers
    updateSpeakers();
  }, []);

  const updateSpeakers = () => {
    // Fetch speakers from the server
    axios.get("/speakers").then((response) => {
      setSpeakers(response.data);
      setSelectedSpeaker(response.data[0]);
    });
  };

  const handleTextChange = (newText) => setText(newText);
  const handleSpeedChange = (newSpeed) => setSpeed(newSpeed);
  const handleLanguageChange = (newLanguage) =>
    setSelectedLanguage(newLanguage);
  const handleSpeakerChange = (newSpeaker) => setSelectedSpeaker(newSpeaker);

  const handleAudioSave = (audioData) => {
    const formData = new FormData();
    formData.append("file", audioData);
    formData.append("filename", "new_speaker");

    axios.post("/upload_audio", formData).then(() => {
      updateSpeakers();
    });
  };

  const handleSubmit = () => {
    axios
      .post("/generate_voice", {
        text,
        speed,
        speaker: selectedSpeaker,
        language: selectedLanguage,
      })
      .then((response) => {
        setAudioSrc(response.data.audioUrl);
      });
  };

 

  
  return (
    <div>
      <h1>Shivachi.ai Voice Cloning</h1>
      <TextInput value={text} onChange={handleTextChange} />
      {/* <Slider
        value={speed}
        onChange={handleSpeedChange}
        min={0.1}
        max={1.99}
        step={0.01}
      />
      <Dropdown
        options={Object.keys(languages)}
        value={selectedLanguage}
        onChange={handleLanguageChange}
        label="Language/Accent"
      />
      <Dropdown
        options={speakers}
        value={selectedSpeaker}
        onChange={handleSpeakerChange}
        label="Select Speaker"
      /> */}
      {/* <AudioRecorder onSave={handleAudioSave} /> */}
      {/* <button onClick={handleSubmit}>Convert</button>
      {audioSrc && <AudioPlayer src={audioSrc} />} */}
<CsvUploadForm />
      <AudioUploadForm />
    </div>
  );
};

export default Main
