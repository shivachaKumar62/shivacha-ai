import React, { useEffect, useState } from "react";

export default function VideoInput(props) {
  const { width, height } = props;

  const inputRef = React.useRef();

  const [source, setSource] = React.useState();
  const [showURL,setShowURL] = useState()

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    setShowURL(event.target.files[0].name);
    const url = URL.createObjectURL(file);
    setSource(url);
      props.setVideoProceed(true);
  };

  const handleChoose = (event) => {
    inputRef.current.click();
  
  };


  return (
    <div className="VideoInput">
      <input
        ref={inputRef}
        className="VideoInput_input"
        type="file"
        onChange={handleFileChange}
        accept=".mov,.mp4"
      />
      {!source && <button onClick={handleChoose}>Choose</button>}
      {source && (
        <video
          className="VideoInput_video"
          width="100%"
          height={height}
          controls
          src={source}
        />
      )}
      <div className="VideoInput_footer">{showURL}</div>
    </div>
  );
}
