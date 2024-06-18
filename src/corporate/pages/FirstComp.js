import React from 'react'
import FirstCompCustom from '../../customcomponent/FirstCompCustom'

const FirstComp = () => {
    const data = [
      {
        id: 1,
        paraOne: "Customized AI Videos  ",
        paraTwo: "Generator for ",
        paraThree: "Corporate",
        paraFour:
          "Optimize Your Marketing Campaigns with Data-Driven Automation Tools",
        paraFive: "",
        img: "corporate/group-four.png",
      },
    ];
  return (
    <div>
      <FirstCompCustom data={data} />
    </div>
  );
}

export default FirstComp
