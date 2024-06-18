import React from 'react'
import SecondCustomComp from '../../customcomponent/SecondCustomComp';

const Header = () => {
  const data = [
    {
      id: 1,
      paraOne: " Custom ",
      paraTwo: " Scripted Videos   ",
      paraThree: "Using AI",
      paraFour:"Create scripted videos tailored to your needs using advanced AI technology.",
      img: "script/group-one.png",
    },
  ];
  return <SecondCustomComp data={data} />;
}

export default Header
