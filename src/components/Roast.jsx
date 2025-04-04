import React, { useState, useEffect } from "react";
import { generateRoast } from "../api/geminiApi";
import { motion } from "motion/react";
import Tubespinner from "../assets/tube-spinner.svg?react";

const Roast = ({ data, repodata }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [roast, setRoast] = useState("");
  const currentDate = new Date();
 
    useEffect(() => {
      async function getRoast() {
        const roastPrompt = `Roast this GitHub user with pure savagery. Make it structured and merciless.
  DO NOT include unnecessary phrases like '[object Object]'. Stick to the facts.
  
  Username: ${data.username}
  Total Public Repos: ${repodata.total_repos}
  Stars: ${repodata.stars}
  Forks: ${repodata.forks}
  Most Used Language: ${repodata.top_language}
  Last Updated Repo: ${repodata.last_updated_repo}
  Followers: ${data.followers}
  Following: ${data.following}
  Total Public Commits/Contributions: ${repodata.total_commits}
  Today's Date: ${currentDate.toDateString()}
  
  Make fun of their stats, call them out on their dead projects, question their coding choices, and make sure the roast is mercilessly funny. It should sound like a mix of a cyberbully, a disappointed senior developer, and a stand-up comedian tearing apart a bad set. Go all in.
  No sugarcoating. Just pure disrespect.
  
  Today's date is ${currentDate.toDateString()}, so use that as a reference for how outdated their repos are. Absolutely destroy their coding skills, their activity (or lack thereof), and their overall contribution to GitHub. Act like a disappointed senior developer, a ruthless cyberbully, and a stand-up comedian all at once.
  
  Produce the roast line by line, and don’t use special characters like * or "".
  Make it dark, funny, and Instagram-comment-style. Keep it around 150 words, not less, not more.
  `;
  
        // Call the API and update state with response
        const roastResponse = await generateRoast(roastPrompt);
        setRoast(roastResponse);
        console.log(roastResponse);
        setIsLoading(false);
      }
      // Call the function immediately
      setIsLoading(true)
      
      if(repodata){
        getRoast();
      }
    }, [data, repodata]); // Dependencies that will trigger useEffect when changed
    // Log current roast value (for debugging)
    console.log(data, repodata);

  // Render the roast in a styled container
  if(isLoading){
    return (
      <div>
      <motion.div initial={{
        opacity:0,
        y:100
      }}
      animate= {{
        opacity:1,
        y:0,
      }}
      transition={{
        delay:1,
        duration: 1
      }} className="h-auto drop-shadow-2xl font-mono backdrop-blur-sm w-sm text-sm mt-6 md:mt-10 border text-white border-amber-50 rounded-2xl flex justify-center items-center mb-10 p-3 md:p-10 md:w-3xl md:text-lg sm:w-md  m-20 ">
        Loading
      </motion.div>
         </div>
    );
  }
  if(!isLoading){
    return (
      <div>
      <motion.div initial={{
        opacity:0,
        y:100
      }}
      animate= {{
        opacity:1,
        y:0,
      }}
      transition={{
        delay:1,
        duration: 2
      }} className="h-auto drop-shadow-2xl font-mono backdrop-blur-sm w-sm text-sm mt-6 md:mt-10 border text-white border-amber-50 rounded-2xl flex justify-center items-center mb-10 p-3 md:p-10 md:w-3xl md:text-lg sm:w-md m-20 ">
        {roast}
      </motion.div>
         </div>
    );
  }

  }
export default Roast;
