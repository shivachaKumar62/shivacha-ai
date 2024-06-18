import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const TailorCorporate = () => {
   const data = [
     {
       id: 1,
       keyOne:
         "Define your target audience and message purpose clearly for effective corporate communication, whether it's for internal updates, customer engagement, or brand promotion.",
     },
     {
       id: 2,
       keyOne:
         "Gather audience data including demographics and preferences to tailor video content effectively for maximum resonance.",
     },
     {
       id: 3,
       keyOne:
         "Ensure personalized video quality, then share them via email, social media, or website embedding to reach your target audience effectively.",
     },
   ];
   return (
     <EasilyCreateCard
       data={data}
       title="Tailor Corporate Messages with Personalized AI-Generated Videos."
       img="corporate/group-two.png"
       uiDirection="false"
     />
   );
}

export default TailorCorporate
