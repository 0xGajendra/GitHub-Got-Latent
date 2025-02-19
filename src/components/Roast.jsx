import React, { useState, useEffect } from "react";
import { generateRoast } from "../api/geminiApi";

const Roast = ({ data, repodata }) => {
  const date = new Date();
  const [roast, setRoast] = useState("");
  const currentDate = new Date();
  useEffect(() => {
    async function getRoast() {
      const roastPrompt = `Roast this GitHub user with pure savagery. Make it structured and merciless.
DO NOT include unnecessary phrases like '[object Object]'. Stick to the facts.

Username: ${data.username}
Total Repos: ${repodata.total_repos}
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
Make it dark, funny, and Instagram-comment-style. Keep it around 250 words, not less, not more.
`;

      // Call the API and update state with response
      const roastResponse = await generateRoast(roastPrompt);
      setRoast(roastResponse);
    }

    // Call the function immediately
    getRoast();
  }, [data, repodata]); // Dependencies that will trigger useEffect when changed

  // Log current roast value (for debugging)
  console.log(data, repodata);

  // Render the roast in a styled container
  if (!data) {
    return <></>;
  }
  return (
    <div className="h-full drop-shadow-2xl backdrop-blur-sm w-3xl mt-10 border border-amber-50 rounded-2xl tracking-wider">
      {roast}
    </div>
  );
};

export default Roast;
