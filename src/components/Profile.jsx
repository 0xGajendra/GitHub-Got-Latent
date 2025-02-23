import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Correct import// Direct import
import { fetchRepoStats, fetchUserProfile } from "../api/githubApi";

const Profile = ({ username, setData, setRepodata, data }) => {
  useEffect(() => {
    async function fetchUser() {
      if (!username.trim()) return;
      try {
        const userData = await fetchUserProfile(username);
        if (userData.status === "404") {
          setData({ status: "404" }); // Set data to indicate "Not Found"
          setRepodata({}); // Clear repo data
          return;
        }
        const repoData = await fetchRepoStats(username);
        setData(userData);
        setRepodata(repoData);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setData({ status: "error", message: error.message }); // Handle other errors
      }
    }

    fetchUser();
  }, [username, setData, setRepodata]);

  // Check if data is null or undefined
  if (!data) {
    return <div className="text-white">Loading profile...</div>; // Show a loading state
  }

  // Handle 404 case
  if (data.status === "404") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 2 }}
        className="flex flex-col justify-center items-center"
      >
        <div className="text-white backdrop-blur-sm w-90 border-[#FF6002] border rounded-2xl flex justify-center gap-3 h-20 items-center">
          <div>
            <div className="flex items-center justify-center gap-3">
              <h5 className="text-white font-bold">Username Not Found</h5>
              <div className="text-gray-300 text-sm">
                <span>@</span>
                {username}
              </div>
            </div>
            <div className="text-md flex gap-2">
              <div>Followers: N/A</div>
              <div>Following: N/A</div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }
  // Render profile data
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0, duration: 2 }}
      className="flex flex-col justify-center items-center"
    >
      <div className="text-white backdrop-blur-sm w-90 border-[#FF6002] border rounded-2xl flex justify-center gap-3 h-20 items-center">
        <div>
          <img
            src={data.profilePicture}
            className="rounded-2xl w-14 left-0"
            alt="user-pfp"
          />
        </div>
        <div>
          <div className="flex items-center justify-center gap-3">
            <h5 className="text-white font-bold">{data.name}</h5>
            <div className="text-gray-300 text-sm">
              <span>@</span>
              {data.username}
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
};

export default Profile;