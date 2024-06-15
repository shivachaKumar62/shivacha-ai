import React from "react";
import EasilyCreateCard from "../../customcomponent/EasilyCreateCard";

const SaveTime = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Thoroughly plan your video production process by defining objectives, target audience, and key messages, creating a storyboard or script to outline content and visual elements.",
    },
    {
      id: 2,
      keyOne:
        "Maximize workflow efficiency by assigning clear roles, utilizing project management tools, and fostering collaboration, reducing wasted time and resources.",
    },
    {
      id: 3,
      keyOne:
        "Optimize productivity by batching similar tasks, such as shooting multiple videos in one session to minimize setup time and leverage momentum, ultimately saving time and resources.",
    },
  ];
  return (
    <div className="container">
      <EasilyCreateCard
        data={data}
        img="promovideo/save-time.png"
        title="Save Time and Resources on Video Production While Maintaining Quality"
        uiDirection="false"
      />
    </div>
  );
};

export default SaveTime;
