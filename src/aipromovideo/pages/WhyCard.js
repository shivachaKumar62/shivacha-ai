import React from "react";
import Card from "../../customcomponent/Card";

const WhyCard = () => {
  const data = [
    {
      id: 1,
      img: "./image/promovideo/image-three",
      title: "Increased Engagement",
      value:
        "AI-generated videos captivate audiences with personalized, relevant content, leading to higher viewer interaction.",
    },
    {
      id: 2,
      img: "./image/promovideo/image-two",
      title: "Time Efficiency",
      value:
        "Your video production processes reduce creation time, allowing for quicker deployment of marketing campaigns.",
    },
    {
      id: 3,
      img: "./image/promovideo/money",
      title: "Data-Driven Optimization",
      value:
        "Utilize AI analytics to gain insights into video performance, enabling continuous improvement and targeted marketing strategies.",
    },
  ];
  return <Card data={data} useCase="" choose="Why Choose Shivacha AI" />;
};

export default WhyCard;
