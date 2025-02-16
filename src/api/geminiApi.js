import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const generateRoast = async (roastPrompt)=>{
    try {
        console.log(roastPrompt);
        const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"})
        const result = await model.generateContent(roastPrompt);
        const response = await result.response;
        console.log(response.text());
        return response.text();
    } catch (error) {
        console.log("Error Ocuured While generating Roast", error);
        return "OOPS!! Forget about the code, looks like someone don't even know how to type your own github username"
    }
}