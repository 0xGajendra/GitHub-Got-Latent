import React, { useEffect, useState } from 'react'
import {fetchRepoStats, fetchUserProfile} from '../api/githubApi'

const InputBox = ({setData,setRepodata, }) => {
  const [username,setUsername]=useState('');
  const handleClick = async ()=>{
    if(!username.trim()) return;
    const userData = await fetchUserProfile(username);
    const repoData = await fetchRepoStats(username);
    setData(userData);
    setRepodata(repoData);
  }
 
  return (
    <div className='flex my-5 flex-col md:flex-row '>
        <input className='p-5 rounded-lg border-2 text-center bg-black mb-4 h-8 border-[#FF6002] text-md w-60 shadow-[0_0_15px_0px_white] hover:shadow-[0_0_15px_5px_white] transition delay-10 duration-150 active:shadow-[0_0_15px_5px_white] md:w-100 md:rounded-2xl md:text-md md:h-14' type='text' placeholder='Enter Your GitHub Username Here' onChange={(e)=> setUsername(e.target.value)} ></input>
          <button className='text-white mx-5 bg-[#FF6002] h-8 rounded-lg text-lg font-bold  shadow-[0_0_15px_0px_white] hover:shadow-[0_0_15px_5px_white] transition delay-10 duration-150 md:w-40 md:rounded-2xl md:text-2xl md:h-14 ' onClick={handleClick}>
            Roast Me!
          </button>
    </div>
  )
}

export default InputBox
