import React from "react";

import EasilyCreateCard from "../../customcomponent/EasilyCreateCard";

const VarietyVideo = () => {
  const data = [
    {
      id: 1,
      keyOne:
        "Customize your video's settings, including duration, style, visuals, and audio, and input specific content or data totailor it to your preferences and needs.",
    },
    {
      id: 2,
      keyOne:
        "Personalize content to resonate with your audience byscripting dialogue, selecting visuals, and incorporatingbranding elements.",
    },
    {
      id: 3,
      keyOne:
        "After customizing your settings and content, click 'GenerateVideo' to let Shivacha AI create your video. Review theoutput, make adjustments if needed, and finalize the video.",
    },
  ];
  return (
    // <div className="py-[48px]">
    //   <div className="container">
    //     <div className="grid grid-cols-2 gap-x-6">
    //       <div>
    //         <img
    //           src={process.env.PUBLIC_URL + "./image/bulkvideo/variety.png"}
    //         />
    //       </div>
    //       <div>
    //         <div>
    //           <h1 className="font-worksans  font-semibold text-[40px] text-[#000000]">
    //             Produce a variety of video types using our Shivacha AI platform.
    //           </h1>
    //         </div>
    //         <div className="flex flex-col pt-[24px] ">
    //           <div className=" flex gap-3">
    //             <p className="font-semibold font-worksans  text-lg text-[#565656] ">
    //               1
    //             </p>
    //             <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
    //               Customize your video's settings, including duration, style,
    //               visuals, and audio, and input specific content or data to
    //               tailor it to your preferences and needs.
    //             </p>
    //           </div>
    //           <div className=" flex gap-3">
    //             <p className="font-semibold font-worksans  text-lg text-[#565656] ">
    //               2
    //             </p>
    //             <p className="font-worksans pb-[24px]  text-lg font-medium text-[#565656] ">
    //               Personalize content to resonate with your audience by
    //               scripting dialogue, selecting visuals, and incorporating
    //               branding elements.
    //             </p>
    //           </div>
    //           <div className=" flex gap-3">
    //             <p className="font-semibold font-worksans  text-lg text-[#565656] ">
    //               3
    //             </p>
    //             <p className="font-worksans  text-lg font-medium text-[#565656] ">
    //               After customizing your settings and content, click "Generate
    //               Video" to let Shivacha AI create your video. Review the
    //               output, make adjustments if needed, and finalize the video.
    //             </p>
    //           </div>
    //         </div>
    //         <div className="pt-[36px]">
    //           <Button
    //             text="Get Started For Trial"
    //             bg="white"
    //             textColor="blue-500"
    //             iconBg="blue-500"
    //             iconText="white"
    //             borderPart="border-2"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <EasilyCreateCard
      data={data}
      title="Produce a variety of video types using our Shivacha AI platform."
      img="bulkvideo/variety.png"
      uiDirection="false"
    />
  );
};

export default VarietyVideo;
