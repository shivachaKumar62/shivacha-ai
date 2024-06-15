import React from 'react'
import Card from '../../customcomponent/Card';

const WhyCard = () => {
    const data = [
      {
        id: 1,
        img: "./image/bulkvideo/image-three",
        title: "AI Technology",
        value:
          "Shivacha uses AI-driven technology to convert existing posts into dynamic videos.",
      },
      {
        id: 2,
        img: "./image/bulkvideo/image-one",
        title: "AI Generate Bulk Videos",
        value:
          "AI streamlines video production from text and Excel, making it fast and effective.",
      },
      {
        id: 3,
        img: "./image/bulkvideo/image-two",
        title: "AI Generate Bulk Videos",
        value:
          "AI text-to-video tools create videos in minutes, saving hours of manual work.",
      },
    ];
  return <Card data={data} useCase="Uses Case" choose="Why Choose Shivacha AI Videos Generator" />;
}

export default WhyCard
