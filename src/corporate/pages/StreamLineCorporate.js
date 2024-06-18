import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const StreamLineCorporate = () => {
  
  const data = [
    {
      id: 1,
      keyOne:
        "Identify corporate communication areas ripe for video content, such as internal updates, training materials, product announcements, or customer outreach.",
    },
    {
      id: 2,
      keyOne:
        "Select automated video tools with customizable, user-friendly interfaces, and seamless integration to suit your corporate communication needs.",
    },
    {
      id: 3,
      keyOne:
        "Input your content into the video creation tool, allowing it to assemble elements seamlessly into a cohesive narrative, including theme selection, text overlays, and background music.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Streamline Corporate Communications with Automated Video Creation."
      img="corporate/group-three.png"
      uiDirection="true"
    />
  );
}

export default StreamLineCorporate
