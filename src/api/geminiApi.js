

const BASE_URL = import.meta.env.VITE_GEMINI_BASE_URL

export const generateRoast = async (roastPrompt)=>{
    try {
        const response = await fetch(`${BASE_URL}`,{
            method: "POST",
            //  Tell the server you're sending JSON
            headers: { 
                "Content-Type": "application/json" //  Tell the server you're sending JSON
            },
            //body should be string
            body:JSON.stringify({roastPrompt})
        })
        if (!response.ok) throw new Error("Failed to generate roast");
        const data = await response.json();
        return data.roast;
        
    } catch (error) {
        console.log("Error Ocuured While generating Roast", error);
        return "OOPS!! Forget about the code, looks like someone don't even know how to type your own github username"
    }
}