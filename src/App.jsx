import React from "react";
import video from "./assets/background-video.mp4";
import InputBox from "./components/InputBox";

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-xl font-bold ">Welcome to </h3>
        <h1 className="text-5xl font-bold ">GitHub's Got Latent</h1>
        <p className="text-lg mt-4 mx-20">Less contributions, more humiliation. Get a GitHub roast hotter than your CPU!</p>
        <InputBox/>
      </div>

    </div>
  );
};

export default App;
