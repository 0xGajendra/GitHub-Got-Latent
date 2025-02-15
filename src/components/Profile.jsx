import React from 'react'

const Profile = () => {
  return (
    <div className='text-white backdrop-blur-sm w-80 border-[#FF6002] border rounded-2xl flex justify-center gap-3 h-20 items-center'>
        <div>
       <img src="https://avatars.githubusercontent.com/u/176354934?v=4" className='rounded-2xl w-14 left-0' alt="user-pfp" />
       </div>
       <div>

       <div className='flex items-center justify-center gap-3 '>
       <h5 className='text-white font-bold '> Gajendra Rao </h5>
       <div className='text-gray-300 text-sm'> <span>@</span>0xGajendra </div>
       </div>
       <div className='text-2xl-white flex gap-2'>
       <div>
       Followers: 5
        </div> 
        <div>
        Following: 7
        </div>
       </div>
       </div>
       
       
        
    </div>
  )
}

export default Profile
