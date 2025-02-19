import React, { useEffect, useState } from 'react'
import videoDesktop from "./assets/background-video.webm";
import InputBox from "./components/InputBox";
import Star from "./components/Star";
import Profile from"./components/Profile"
import Roast from './components/Roast';
const LazyComponent = () => {
  const [data, setData] = useState(null);
  const [repodata, setRepodata] = useState({});
  return (
    <div className='h-screen overflow-y-scroll'>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={videoDesktop} type="video/webm" />
      </video>

      {/* Overlay Text */}
      <div className='overflow-y-auto'>
      <div className="fixed top-0 p-10 right-0 text-white cursor-pointer z-50" >
      <Star />
      </div>
      <div className="flex flex-col items-center justify-center text-white text-center sticky mt-55">
        <h3 className="text-l font-[--font-vt323] font-bold sm:text-xl">Welcome to </h3>
        <h1 className="text-3xl font-bold sm:text-5xl ">GitHub's Got Latent</h1>
        <p className="text-md mt-4 mx-20 sm:text-lg sm:mt-5">Less contributions, more humiliation. Get a GitHub roast hotter than your CPU!</p>
        <InputBox setData={setData} setRepodata={setRepodata} />
      </div>
        <div className='flex flex-col items-center mt-10 space-y-6 w-full px-4'>
          <Profile data={data} repodata={repodata}/>
          <Roast data={data} repodata={repodata} />
          </div>
      </div>
    </div>
  )
}

export default LazyComponent
