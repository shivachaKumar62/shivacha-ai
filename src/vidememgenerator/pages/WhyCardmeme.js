import React from 'react'
import Card from '../../customcomponent/Card';

const WhyCardmeme = () => {
 const data = [
   {
     id: 1,
     img: "./image/promovideo/image-three",
     title: "Rapid Production",
     value:
       "Create meme videos quickly, allowing you to stay ahead of trends and keep your content fresh. interaction.",
   },
   {
     id: 2,
     img: "./image/promovideo/image-two",
     title: "Consistency",
     value:
       "Maintain uniform quality and style across all meme videos, ensuring your content aligns with your brand identity.",
   },
   {
     id: 3,
     img: "./image/videomeme/card-one",
     title: "Increased Engagement",
     value:
       "Craft entertaining and relatable meme videos that capture audience attention and boost interaction",
   },
 ];
 return <Card data={data} useCase="" choose="Why Choose Shivacha AI" />;
}

export default WhyCardmeme
