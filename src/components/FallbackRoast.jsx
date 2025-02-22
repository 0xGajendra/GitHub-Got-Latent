import React from 'react'

const FallbackRoast = () => {
  return (
    <div>
      <div className="h-full">
      <motion.div initial={{ 
        opacity : 0,
        y: 100
       }} 
       animate = {{height : "100%",
        opacity:1,
        y:0

       }} transition=
       {{duration : 3,
        
       }} className=" drop-shadow-2xl h-120 backdrop-blur-sm w-sm animate-pulse text-sm mt-6 md:mt-10 border text-white border-amber-50 rounded-2xl flex justify-center items-center mb-10 p-3 md:p-10 md:w-3xl md:text-lg sm:w-md m-20 ">
          
      </motion.div>
        </div>
    </div>
  )
}

export default FallbackRoast
