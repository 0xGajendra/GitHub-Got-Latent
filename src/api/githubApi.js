
const BASE_URL = import.meta.env.VITE_GITHUB_BASE_URL;



// Function to fetch repository statistics of a user
export const fetchRepoStats = async (username) => {
  
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) throw new Error("Failed to fetch repos");
    const repos = await response.json();
      let total_commits = 0;
      for(const repo of repos){
        const commits  = await getCommitsForRepo(username,repo.name)
        total_commits+=commits.length;
      }
    const repoStats = {
        // The reduce() method processes an array and reduces it to a **single value**

      total_repos: repos.length,
  
      stars: repos.reduce((sum, repo) => sum + repo.stargazers_count, 0),
  
      forks: repos.reduce((sum, repo) => sum + repo.forks_count, 0),
   
      // Determine the most used programming language
      top_language: Object.entries(repos.reduce((acc, repo) => {
        if (repo.language) {
          acc[repo.language] = (acc[repo.language] || 0) + 1; // Count occurrences of each language
        }
        return acc;
      },{})),
      total_commits,

      last_updated_repo: repos.sort(
        (a, b) => new Date(b.updated_at) - new Date(a.updated_at) // Sort by update time
      )[0]?.updated_at || "No repos found", // Get the latest update time or return "No repos found"
    };
    return repoStats;
  };
  


async function getCommitsForRepo(username,repo){
  try {
    const response = await fetch(`${BASE_URL}/repos/${username}/${repo}/commits`);
    if(!response.ok) throw new Error("Failed to fetch the repo");
    return response.json();
  } catch (error) {
      return [];
  }
}



 export const fetchUserProfile = async (username, ) => {
    const response = await fetch(`${BASE_URL}/users/${username}`);
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

