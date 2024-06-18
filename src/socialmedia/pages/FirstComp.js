import React from 'react'
import SecondCustomComp from '../../customcomponent/SecondCustomComp';

const FirstComp = () => {
  const data = [
    {
      id: 1,
      paraOne: "  ",
      paraTwo: " Social Media    ",
      paraThree: "Videos with AI",
      paraFour:
"Produce captivating social media videos effortlessly with AI-driven tools for maximum impact.",      
img: "socialmedia/group-one.png",
    },
  ];
  return <SecondCustomComp data={data} />;
}

export default FirstComp
