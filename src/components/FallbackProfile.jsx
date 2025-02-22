import React from 'react'

const FallbackProfile = () => {
  return (
    <div initial={{
            opacity:0,
            y:100
          }}
           animate= {{
            opacity:1,
            y:0,
           }}
           transition={{
            delay:0,
            duration: 2
           }} className="flex flex-col justify-center items-center ">
        <div className="text-white backdrop-blur-sm w-90 border-[#FF6002] border rounded-2xl flex justify-center gap-3 h-20 items-center">
          <div>
            
          </div>
          <div>
            <div className="flex items-center justify-center gap-3 ">
              <h5 className="text-white font-bold "> .......</h5>
              <div className="text-gray-300 text-sm">
               ........
                <span>@</span>
                .......
              </div>
            </div>
            <div className="text-md flex gap-2">
              <div>Followers: ......</div>
              <div>Following:.......</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FallbackProfile
