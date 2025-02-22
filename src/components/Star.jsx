import React from 'react'
import star from '../assets/star.png';
const Star = () => {

    

  return (
    <a href="https://github.com/0xGajendra/GitHub-Got-Latent"  className="block w-full" target='_blank'>
    <div className='flex gap-x-2 w-22 font-bold h-10 px-2 md:w-46 justify-center md:h-14 items-center bg-black rounded-xl shadow-[0_0_15px_1px_#FF6002] md:rounded-2xl '>
      <img className="w-4 md:w-8" src={star}/><div className='text-xs tracking-tighter md:text-lg'>Star on GitHub</div>
    </div>
    </a>
  )
}

export default React.memo(Star);
