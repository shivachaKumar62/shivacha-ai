import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const SaveTime = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Research various online meme creation tools to find one with a user-friendly interface, customizable templates, and diverse meme styles, catering to your creative needs.",
    },
    {
      id: 2,
      keyOne:
        "Choose a meme template from the tool's library or upload your own images. Ensure the template aligns with the message or theme you want to convey in your meme.",
    },
    {
      id: 3,
      keyOne:
        "Customize the meme by incorporating text, captions, stickers, or other elements to align with your audience and desired tone, be it humorous, informative, or promotional.",
    },
  ];
  return (
    <div>
      <EasilyCreateCard
        data={data}
        img="videomeme/group-three.png"
        title="Save Time and Effort on Meme Creation with Automated Tools"
        uiDirection="false"
      />
    </div>
  );
  
}

export default SaveTime
