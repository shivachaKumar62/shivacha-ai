import React from 'react'
import Card from '../../customcomponent/Card';

const CorporateCard = () => {
   const data = [
     {
       id: 1,
       img: "./image/bulkvideo/image-three",
       title: "Brand Consistency",
       value:
         "Ensure all videos align with your corporate branding through customizable templates and settings.",
     },
     {
       id: 2,
       img: "./image/bulkvideo/image-one",
       title: "Time Efficiency",
       value:
         "Accelerate video production with AI automation, reducing the time required to create high-quality videos.",
     },
     {
       id: 3,
       img: "./image/bulkvideo/image-two",
       title: "Cost Savings",
       value:
         "AI text-to-video tools create videos in minutes, saving hours of manual work.",
     },
   ];
   return (
     <Card
       data={data}
       useCase="Uses Case"
       choose="Why Choose Shivacha AI Videos Generator"
     />
   );
}

export default CorporateCard
