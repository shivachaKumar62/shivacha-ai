import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const BuildBrand = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Define your brand's essence, mission, and standout features, shaping the narrative communicated in your social media videos.",
    },
    {
      id: 2,
      keyOne:
        "Research your target audience's social media preferences to tailor video content effectively.",
    },
    {
      id: 3,
      keyOne:
        "Utilize AI for visually striking, scalable, and personalized social media videos, ensuring consistency across channels.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Build brand loyalty with dynamic AI-generated social media videos"
      img="socialmedia/group-two.png"
      uiDirection="true"
    />
  );
}

export default BuildBrand
