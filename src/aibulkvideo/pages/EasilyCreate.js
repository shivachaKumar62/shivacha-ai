import React from 'react'

import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const EasilyCreate = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Log in to your Shivacha AI account or sign up if you're a newuser. Once logged in, navigate to the 'Create Video' section of the platform.",
    },
    {
      id: 2,
      keyOne:"Select the option to create a video from prompts or Excel data. If you choose prompts, input the text prompts you want to include in the video. For Excel data, upload the Excel file containing the data you wish to visualize.",
    },
    {
      id: 3,
      keyOne:"Customize your video's settings, then click 'Generate Video' for Shivacha AI to automatically create your customized video.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Easily create videos from prompts or Excel data on our Shivacha AI."
      img="homepage/howtowork.png"
      uiDirection="true"
    />
  );
}

export default EasilyCreate
