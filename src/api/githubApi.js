const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_KEY;
import axios from 'axios';
 const BASE_URL = "https://api.github.com/users/"


// Function to fetch repository statistics of a user
export const fetchRepoStats = async (username) => {
  
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }, // Use token for authentication
    });
    if (!response.ok) throw new Error("Failed to fetch repos");
    const repos = await response.json();
    const repoStats = {
        // The reduce() method processes an array and reduces it to a **single value** 
        // (e.g., sum, product, object, or another aggregated result). 
     
        // Syntax:
        // array.reduce((accumulator, currentValue) => {
        //     // Process each item and update accumulator
        //     return updatedAccumulator;
        // }, initialValue);
     
        // Parameters:
        // - accumulator: Stores the ongoing result.
        // - currentValue: The current element in the loop.
        // - initialValue (optional): The starting value of accumulator.
      total_repos: repos.length,
  
      stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  
      forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
   
      // Determine the most used programming language
      top_language: Object.entries(repos.reduce((acc, repo) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1; // Count occurrences of each language
        }
        return acc;
      }, {})), // Start with an empty object
  
      // Find the most recently updated repository
      last_updated_repo: repos.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at) // Sort by update time
      )[0]?.updated_at || "No repos found", // Get the latest update time or return "No repos found"
    };
  
    // Step 5: Return the processed statistics
    return repoStats;
  };
  

 export const fetchUserProfile = async (username, ) => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });
    if(!response) return null;
    if (!response.ok) return "user not found";
    const data = await response.json();
    return {
      name: data.name,
      bio: data.bio || "No bio provided",
      followers: data.followers,
      following: data.following,
      created_at: data.created_at,
      username: data.login,
      profilePicture: data.avatar_url,
    };
  };

