import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const BoostAudience = () => {
  
   const data = [
     {
       id: 1,
       keyOne:
         "Research platforms with script-to-video capabilities, prioritizing user-friendly interfaces, customizable tools, and multimedia integration options.",
     },
     {
       id: 2,
       keyOne:
         "Input your script into the chosen platform and customize the visuals to enhance engagement. Add relevant images, animations, and text overlays that complement the script and captivate viewers.",
     },
     {
       id: 3,
       keyOne:
         "Optimize your videos for various platforms and devices by considering factors such as aspect ratio, video length, and content format to maximize compatibility and reach.",
     },
   ];
   return (
     <EasilyCreateCard
       data={data}
       title="Boost Audience Engagement with Dynamic Script-to-Video Transformations"
       img="script/group-four.png"
       uiDirection="true"
     />
   );
}

export default BoostAudience
