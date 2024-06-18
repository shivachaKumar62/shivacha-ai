import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const AmplifyBrand = () => {
   const data = [
     {
       id: 1,
       keyOne:
         "Understand your audience's preferences and behaviors on social media to create video memes that resonate effectively.",
     },
     {
       id: 2,
       keyOne:
         "Maintain consistency in tone, style, and messaging across your video memes to reinforce brand awareness and recognition among your audience.",
     },
     {
       id: 3,
       keyOne:
         "Ensure your video memes are optimized for shareability by keeping them short, visually appealing, and easy to understand.",
     },
   ];
   return (
     <div>
       <EasilyCreateCard
         data={data}
         img="videomeme/group-four.png"
         title="Amplify Brand Awareness Through Shareable and Entertaining Video Memes."
         uiDirection="true"
       />
     </div>
   );
}

export default AmplifyBrand
