import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const IncreaseGoals = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Clarify your objectives for AI-generated social media videos, whether it's driving traffic, boosting sales, or raising brand awareness, to steer your video creation.",
    },
    {
      id: 2,
      keyOne:
        "Create captivating videos that match your goals and resonate with your audience, featuring demos, testimonials, educational content, or behind-the-scenes footage.",
    },
    {
      id: 3,
      keyOne:
        "Analyze video performance using platform analytics to adjust content and strategies for better goal achievement.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Increase Goals with AI-generated social media videos directing users. "
      img="socialmedia/group-three.png"
      uiDirection="false"
    />
  );
}

export default IncreaseGoals
