import React from 'react'

import SecondCustomComp from '../../customcomponent/SecondCustomComp';

const FirstComp = () => {
   
    const data = [
      {
        id: 1,
        paraOne: " Easily craft ",
        paraTwo: "meme videos ",
        paraThree: "using AI",
        paraFour:
          "Quickly produce meme videos with AI automation, saving time and effort",
        img: "videomeme/video-meme.png",
      },
    ];
  return <SecondCustomComp data={data} />;
}

export default FirstComp
