import React from 'react'
import SecondCustomComp from '../../customcomponent/SecondCustomComp';
const PromoVideo = () => {
  const data = [
    {
      id: 1,
      paraOne: " AI ",
      paraTwo: "Promo video ",
      paraThree: "Generator",
      paraFour:
        "Craft Compelling Promotional Videos Tailored to Your Brand's Vision and Audience",
      img: "promovideo/promo-video.png",
    },
  ];
  return (
    
    <SecondCustomComp data={data} />
  );
}

export default PromoVideo
