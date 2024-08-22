import React, { useState } from "react";
// import { AudioRecorder } from "react-audio-voice-recorder";

const AudioRecorders = ({ onSave }) => {
  const [audioData, setAudioData] = useState(null);

  const handleSave = () => {
    onSave(audioData);
  };

  return (
    <div>
      {/* <AudioRecorder onStop={(data) => setAudioData(data)} /> */}
      <button onClick={handleSave}>Save Recording</button>
    </div>
  );
};

export default AudioRecorders;
