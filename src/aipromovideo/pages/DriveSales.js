import React from 'react'
import EasilyCreateCard from '../../customcomponent/EasilyCreateCard'

const DriveSales = () => {
    const data = [
      {
        id: 1,
        keyOne:
          "Define clear objectives and identify your target audience's demographics, preferences, and pain points to tailor effective promo videos.",
      },
      {
        id: 2,
        keyOne:
          "content creation using AI tools, which assist with tasks like video editing, text-to-speech conversion, and image enhancement, ensuring efficient production of high-quality promo videos.",
      },
      {
        id: 3,
        keyOne:
          "Promo videos to match the preferences and interests of various audience segments, creating personalized experiences that resonate with viewers.",
      },
    ];
  return (
    <div>
      <EasilyCreateCard
      data={data}
      img="promovideo/Drivesales.png"
      title="Drive Sales and Brand Awareness with AI-Powered Promo Videos"
      uiDirection="true"
      />
    </div>
  );
}

export default DriveSales
