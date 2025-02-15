import React, { useEffect, useState } from 'react'
import video from "./assets/background-video.webm";
import InputBox from "./components/InputBox";
import Star from "./components/Star";
import Profile from"./components/Profile"
const LazyComponent = () => {
  return (
    <div>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={video} type="video/webm" />
      </video>

      {/* Overlay Text */}
      <div className="fixed top-0 p-10 right-0 text-white cursor-pointer z-50" >
      <Star />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <h3 className="text-xl font-bold ">Welcome to </h3>
        <h1 className="text-5xl font-bold ">GitHub's Got Latent</h1>
        <p className="text-lg mt-5 mx-20">Less contributions, more humiliation. Get a GitHub roast hotter than your CPU!</p>
        <InputBox/>
        <Profile/>
      </div>
    </div>
  )
}

export default LazyComponent
