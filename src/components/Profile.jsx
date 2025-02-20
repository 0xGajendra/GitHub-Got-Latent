
import React from "react";
import {motion} from "motion/react"

const Profile = ({ data, repodata }) => {
  if (data) {
    return (
      <motion.div initial={{
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
            <img
              src={data.profilePicture}
              className="rounded-2xl w-14 left-0"
              alt="user-pfp"
            />
          </div>
          <div>
            <div className="flex items-center justify-center gap-3 ">
              <h5 className="text-white font-bold "> {data.name}</h5>
              <div className="text-gray-300 text-sm">
                {" "}
                <span>@</span>
                {data.username}{" "}
              </div>
            </div>
            <div className="text-md flex gap-2">
              <div>Followers: {data.followers}</div>
              <div>Following: {data.following}</div>
            </div>
          </div>
        </div>
        
      </motion.div>
    );
  }
  return <></>;
};

export default Profile;
