import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const BoostConversations = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Create compelling videos tailored to your conversion goals, showcasing product benefits, customer testimonials, and exclusive promotions to drive action.",
    },
    {
      id: 2,
      keyOne:
        "Utilize AI tools to craft captivating videos that scale production, personalize content, and drive engagement across social platforms, optimizing for conversion.",
    },
    {
      id: 3,
      keyOne:
        "AI-generated videos on social platforms drive audience engagement, fostering actions that support your marketing goals and business objectives.s",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title=" Boost conversions with AI-generated videos across social platforms. "
      img="socialmedia/group-four.png"
      uiDirection="true"
    />
  );
}

export default BoostConversations
