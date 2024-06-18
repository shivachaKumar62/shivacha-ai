import React from 'react'
import EasilyCreateCard from "../../customcomponent/EasilyCreateCard";
const PersonalizeScript = () => {
   const data = [
     {
       id: 1,
       keyOne:
         "Elevate visual appeal and storytelling by integrating pertinent images, graphics, animations, and transitions that harmonize with the script, reinforcing essential messages.",
     },
     {
       id: 2,
       keyOne:
         "Review the video for coherence, accuracy, and alignment with the script, making any necessary edits to refine its flow, pacing, and overall quality.",
     },
     {
       id: 3,
       keyOne:
         "After generating the video, review it for coherence, accuracy, and alignment with the script, making any needed edits to refine its flow, pacing, and overall quality.",
     },
   ];
   return (
     <EasilyCreateCard
       data={data}
       title="Personalize Video Content Effortlessly to Match Your Brand’s Voice"
       img="script/group-three.png"
       uiDirection="false"
     />
   );
}

export default PersonalizeScript
