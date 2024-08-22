// src/SupportCenter.js
import React from "react";

const HelpSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className=" mx-auto bg-white shadow-lg rounded-[20px] p-8">
        <h1 className="text-3xl font-worksans font-bold mb-6 text-center pb-[64px]">
          Shivacha Ai Help/Support
        </h1>
        <p className="mb-8 text-gray-600">
          Welcome to the Shivacha AI Studio Support Center! We are here to help
          you make the most out of our voice and video generation tools. Whether
          you are using the Voice Generator, Video Generator, Bulk Audio
          Generator, or Bulk Video Generator, we have resources and support
          available to assist you.
        </p>
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Getting Started</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Voice Generator:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    <strong>Creating Your First Voice Over:</strong> Learn how
                    to create high-quality voice overs from your scripts with
                    step-by-step instructions.
                  </li>
                  <li>
                    <strong>Customization Options:</strong> Explore how to
                    adjust pitch, speed, and tone to match your needs.
                  </li>
                  <li>
                    <strong>Integration Tips:</strong> Discover how to integrate
                    the voice over with your existing projects.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-lg">Voice Cloning:</h3>
                <ul className="list-disc pl-6 text-gray-600">
                  <li>
                    <strong>Video Creation Basics:</strong> A guide to starting
                    your first video project, from script to final output.
                  </li>
                  <li>
                    <strong>Customization Options:</strong> Explore how to
                    adjust pitch, speed, and tone to match your needs.
                  </li>
                  <li>
                    <strong>Integration Tips:</strong> Discover how to integrate
                    the voice over with your existing projects.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h3 className="font-semibold text-lg">Video Generator:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <strong>Video Creation Basics:</strong> A guide to starting your
                first video project, from script to final output.
              </li>
              <li>
                <strong>Customization Options:</strong> Explore how to adjust
                pitch, speed, and tone to match your needs.
              </li>
              <li>
                <strong>Integration Tips:</strong> Discover how to integrate the
                voice over with your existing projects.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="font-semibold text-lg">Bulk Audio Generator:</h3>
            <ul className="list-disc pl-6 text-gray-600">
              <li>
                <strong>Batch Processing:</strong> Instructions on how to
                generate multiple audio files simultaneously.
              </li>
              <li>
                <strong>Consistency and Quality:</strong> Tips for maintaining
                consistent quality across all generated audio files.
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
