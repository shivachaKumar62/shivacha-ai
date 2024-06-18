import React, { useState, useEffect, useRef } from "react";

const VideoSection = () => {
  const [videoSize, setVideoSize] = useState({ width: "55vw", height: "55vh" });
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newWidth = Math.min(
        window.innerWidth,
        window.innerWidth * 0.55 + scrollY * 0.9
      );
      const newHeight = newWidth * 0.5625; // Maintain aspect ratio
      setVideoSize({ width: newWidth, height: newHeight });
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMute = () => {

    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="container">
      <div className="relative flex justify-center md:h-[180vh]">
        <div className="sticky top-0 mb-[136px] flex w-full flex-col items-start justify-start md:mb-[160px] md:h-[100vh]">
          <div className="absolute z-0 hidden h-[52px] w-full items-center justify-center md:top-[25%] md:left-[20%] md:flex md:h-[364px] md:w-[584px] VideoSection_gradientClass__g6YZN"></div>
          <div className="relative flex w-full items-center justify-center">
            <div role="presentation">
              <div
                className="relative hidden md:block"
                style={{
                  height: videoSize.height,
                  width: videoSize.width,
                  marginTop: "200px",
                }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="z-90 relative h-full w-full object-cover px-0"
                  style={{ borderRadius: "0px" }}
                >
                  <source
                    src="https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/mixed.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/986b-445d-4270-abe3-566dc7137926.mp4"
                    type="video/mp4"
                  />
                </video>

                <div className="z-100 absolute top-[3%] left-[2%]  ">
                  <button
                    className="flex items-center rounded-full px-[8px] py-[8px] gap-[0.5rem] VideoSection_buttonStyle__hEbmT"
                    onClick={() => toggleMute()}
                  >
                    <img
                      src={`https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/${
                        isMuted ? "volume_off.svg" : "volume_on.svg"
                      }`}
                    //   alt={isMuted ? "Volume Off" : "Volume On"}
                    />
                    {isMuted ? "Sound off" : "Sound on"}
                  </button>
                </div>
                {/* <div className="z-100 absolute bottom-[2%] right-[2%]  w-[175px] ">
                  <button
                    className="flex items-center rounded-full gap-[0.5rem] px-[8px] py-[8px] VideoSection_buttonStyle__hEbmT"
                    style={{ background: "rgba(15, 17, 21, 0.2)" }}
                    onClick={() => toggleMute()}
                  >
                    <img
                      src={`https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/${
                        isMuted ? "volume_off.svg" : "volume_on.svg"
                      }`}
                      alt={isMuted ? "Volume Off" : "Volume On"}
                    />
                    <span className="text-white">
                      {isMuted ? "Sound off" : "Sound on"}
                    </span>
                  </button>
                </div> */}
              </div>
              <div className="relative block md:hidden">
                {/* <video
                  ref={videoRef}
                  autoPlay
                  loop
                  playsInline
                  muted={isMuted}
                  className="z-90 relative h-full w-full object-cover px-0"
                  style={{ borderRadius: "0px" }}
                >
                  <source
                    src="https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/mixed.webm"
                    type="video/webm"
                  />
                  <source
                    src="https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/986b-445d-4270-abe3-566dc7137926.mp4"
                    type="video/mp4"
                  />
                </video> */}
                {/* <div
                  className="absolute bottom-0 VideoSection_bottomGradient__5V5tS"
                  style={{ borderRadius: "0px" }}
                ></div> */}
                {/* <div className="z-100 absolute top-[3%] left-[2%] block lg:hidden">
                  <button
                    className="flex items-center rounded-full px-[8px] py-[8px] gap-[0.5rem] VideoSection_buttonStyle__hEbmT"
                    onClick={() =>toggleMute}
                  >
                    <img
                      src={`https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/${
                        isMuted ? "volume_off.svg" : "volume_on.svg"
                      }`}
                      alt={isMuted ? "Volume Off" : "Volume On"}
                    />
                  </button>
                </div> */}
                {/* <div className="z-100 absolute bottom-[2%] right-[2%] hidden w-[175px] lg:block">
                  <button
                    className="flex items-center rounded-full gap-[0.5rem] px-[8px] py-[8px] VideoSection_buttonStyle__hEbmT"
                    style={{ background: "rgba(15, 17, 21, 0.2)" }}
                    onClick={toggleMute}
                  >
                    <img
                      src={`https://d4qgj78fzsl5j.cloudfront.net/Landing+Page/${
                        isMuted ? "volume_off.svg" : "volume_on.svg"
                      }`}
                      alt={isMuted ? "Volume Off" : "Volume On"}
                    />
                    <span className="text-white">
                      {isMuted ? "Sound off" : "Sound on"}
                    </span>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
