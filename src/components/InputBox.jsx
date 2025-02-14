import React from 'react'

const InputBox = () => {
  return (
    <div className='flex my-5 flex-col md:flex-row '>
        <input className='p-5 rounded-2xl border-2 bg-black mb-4 h-14 border-[#FF6002] w-60 shadow-[0_0_15px_0px_white] hover:shadow-[0_0_15px_5px_white] transition delay-10 duration-150 active:shadow-[0_0_15px_5px_white] md:w-100' type='text' placeholder='Enter Your GitHub Username Here' ></input>
          <button className='text-white mx-5 bg-[#FF6002] h-14 rounded-2xl text-2xl font-bold  shadow-[0_0_15px_0px_white] hover:shadow-[0_0_15px_5px_white] transition delay-10 duration-150 md:w-40'>
            Roast Me!
          </button>
    </div>
  )
}

export default InputBox
