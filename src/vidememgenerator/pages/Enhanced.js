import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard';

const Enhanced = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Research your target audience and the social media platforms to tailor your video memes effectively based on their demographics, preferences, and behaviors.",
    },
    {
      id: 2,
      keyOne:
        "Develop creative and humorous content that resonates with your audience. Keep your video memes short, attention-grabbing, and easy to share across social media platforms.",
    },
    {
      id: 3,
      keyOne:
        "Utilize analytics tools to track the performance of your video memes, monitoring metrics like views, likes, shares, and comments. Adapt your strategies based on insights to optimize engagement and effectiveness.",
    },
  ];
  return (
    <div>
      <EasilyCreateCard
        data={data}
        img="videomeme/group-two.png"
        title="Enhance Social Media Engagement with Customizable Video Memes"
        uiDirection="true"
      />
    </div>
  );
}

export default Enhanced
