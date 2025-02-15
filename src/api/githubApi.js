const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_API_KEY;
import axios from 'axios';
 const BASE_URL = "https://api.github.com/users/"

export const fetchGitHubUser = async(username)=>{
    try{
        const response = await axios.get(`${BASE_URL}${username}`,{
            headers: {
                Authorization: `token ${GITHUB_TOKEN}`
            }
        })
        console.log(response.data);
        return response.data
        
    }
    catch(error){
        console.log(error);
        return null;
    }
 }


