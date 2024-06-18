import React from 'react'
import Card from '../../customcomponent/Card';

const SocialMediaCard = () => {
  const data = [
    {
      id: 1,
      img: "./image/bulkvideo/image-three",
      title: "Quick Production",
      value: "Create videos rapidly, keeping your content fresh and timely",
    },
    {
      id: 2,
      img: "./image/bulkvideo/image-one",
      title: "Personalization",
      value: "Customize content to resonate with specific audience segments.",
    },
    {
      id: 3,
      img: "./image/bulkvideo/image-two",
      title: "Scalability",
      value:
        "Easily scale up video production to meet increasing content demands.",
    },
  ];
  return <Card data={data} useCase="Uses Case" choose="Why Choose Shivacha AI" />;
}

export default SocialMediaCard
