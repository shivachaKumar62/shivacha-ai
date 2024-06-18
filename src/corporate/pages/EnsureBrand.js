import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const EnsureBrand = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Select AI video tools enabling seamless integration of brand elements, like logos and colors, for cohesive video creation.",
    },
    {
      id: 2,
      keyOne:
        "your brand's values, mission, and unique strengths, resonating authentically with your audience across videos.",
    },
    {
      id: 3,
      keyOne:
        "Ensure visual elements adhere to brand guidelines, maintaining consistency in style, aesthetics, and overall presentation across videos.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Ensure brand consistency in corporate communications using AI video generation."
      img="corporate/group-four.png"
      uiDirection="true"
    />
  );
}

export default EnsureBrand
