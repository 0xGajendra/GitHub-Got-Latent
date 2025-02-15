import React, { useState, useEffect } from "react";
import { generateRoast } from "../api/geminiApi";

const Roast = ({ data, repodata }) => {
  const [roast, setRoast] = useState("");
  const handleRoast = async () => {
    const roastPrompt = `GitHub User Roast:
👤 Username: ${data.username}  
📌 Total Repos: ${repodata.total_repos}  
⭐ Stars: ${repodata.stars}  
🍴 Forks: ${repodata.forks}  
📝 Most Used Language: ${repodata.top_language}  
💀 Last Updated Repo: ${repodata.last_updated_repo}  
Roast them brutally but make it funny!`;
    const roastResponse = await generateRoast(roastPrompt);
    setRoast(roastResponse);
  };
  console.log(roast);
  return (
    <div className="h-full drop-shadow-2xl backdrop-blur-sm w-3xl mt-10 border border-amber-50 rounded-2xl">
      {roast}
    </div>
  );
};

export default Roast;
