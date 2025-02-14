import React from 'react'

const InputBox = () => {
  return (
    <div className='flex my-5 @md:flex-col'>
        <input className='p-5 rounded-2xl border-2 border-[#FF6002] w-100' type='text' placeholder='Enter Your GitHub Username Here' ></input>

          <button className='text-white mx-5 bg-[#FF6002] rounded-2xl text-xl w-40'>
            Roast Me!
          </button>
    </div>
  )
}

export default InputBox
