import React from 'react'
import Button from '../../customcomponent/Button';
import FirstCompCustom from '../../customcomponent/FirstCompCustom';

const GenerateBulk = () => {
  const data = [
    {
      id: 1,
      paraOne: " Effortlessly Generate Bulk",
      paraTwo: "Videos with ",
      paraThree: "AI Technology",
      paraFour: "Streamline Your Video Production with",
      paraFive: "AI-Powered Bulk Generation",
      img: "bulkvideo/bulk-video-top.png",
    },
  ];
  return (
    <FirstCompCustom data={data} />
  );
}

export default GenerateBulk
