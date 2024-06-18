import React from 'react'
import Card from '../../customcomponent/Card';

const ScriptCard = () => {
  const data = [
    {
      id: 1,
      img: "./image/bulkvideo/image-three",
      title: "Time-Saving",
      value:
        "Generate videos quickly by converting scripts to visuals, reducing production time.",
    },
    {
      id: 2,
      img: "./image/bulkvideo/image-one",
      title: "Consistency",
      value:
        "Maintain uniformity in video quality and style across all projects.",
    },
    {
      id: 3,
      img: "./image/bulkvideo/image-two",
      title: "Personalization",
      value:
        "Customize videos to match specific audiences and purposes effortlessly.",
    },
  ];
  return (
    <Card
      data={data}
      useCase=""
      choose="Why Choose Shivacha AI"
    />
  );
}

export default ScriptCard
