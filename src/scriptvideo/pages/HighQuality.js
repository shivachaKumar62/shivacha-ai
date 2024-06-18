import React from 'react'
import EasilyCreateCard from "../../customcomponent/EasilyCreateCard"

const HighQuality = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Input your polished script into the chosen platform, ensuring it follows any provided formatting guidelines, and organize it into sections or scenes to streamline the video creation process.",
    },
    {
      id: 2,
      keyOne:
        "Input your polished script into the chosen platform, ensuring it follows any provided formatting guidelines, and organize it into sections or scenes to streamline the video creation process.",
    },
    {
      id: 3,
      keyOne:
        "Input your polished script into the chosen platform, ensuring it follows any provided formatting guidelines, and organize it into sections or scenes to streamline the video creation process.",
    },
  ];
  return (
    <EasilyCreateCard
      data={data}
      title="Create High-Quality Videos from Scripts Without Extensive Editing"
      img="script/group-two.png"
      uiDirection="true"
    />
  );
}

export default HighQuality
