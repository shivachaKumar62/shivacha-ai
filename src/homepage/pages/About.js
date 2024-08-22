import React from 'react'

const About = () => {
  return (
    <div className=" sm:py-[96px] max-sm:py-[10px] ">
      <div className="container">
        <div className="sm:pb-[20px] max-sm:pb-[0px]">
          <p className="text-sm sm:text-center font-semibold font-worksans text-[#000000] ">
            About
          </p>
        </div>
        <div className="sm:pb-[24px] max-sm:pb-[10px]">
          <p className="font-semibold text-center font-worksans text-[40px] text-[#000000] ">
            Shivacha.Ai
          </p>
        </div>
        <div>
          <p className="font-worksans max-sm:text-center font-medium text-base text-[#565656]">
            This Website provides users with access to bulk videos sourced from
            extensive human-created premium libraries and AI-generated assets,
            encompassing stock videos, animations, background music, properties,
            and more. With such a comprehensive array of multimedia resources at
            their disposal, users can effortlessly enhance their projects,
            ensuring versatility and creativity in their endeavors. By
            consolidating premium libraries and AI-generated assets into a
            single platform, the app optimizes efficiency and productivity,
            allowing users to focus on the creative aspect of their work without
            the constraints of resource limitations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About
