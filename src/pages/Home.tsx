import React from "react";
import HeroBg from "../components/Home/HeroBg";
import happy from "../assets/Happy.png";
import AudioPlayer from "../components/Home/AudioPlayer";

const Home = () => {
  return (
    <div className="mx-8 flex items-center h-full">
      <HeroBg />
      <div className="relative z-30 w-full lg:w-[calc(100%_-_80px)] lg:ml-14 xl:ml-60 lg:mt-0 text-white flex flex-col items-center lg:items-start text-center lg:text-left lg:px-14 max-w-2xl lg:max-w-lg lg:mr-auto md:mx-auto">
        <h1 className="text-6xl mb-2">NEW SINGLE</h1>
        <h2 className="text-lg tracking-[0.2em] mb-7">
          OUT NOW ON ALL PLATFORMS
        </h2>
        <img src={happy} alt="" className="w-40 lg:w-60 bg-cover m-auto" />

        <AudioPlayer />
      </div>
    </div>
  );
};

export default Home;
