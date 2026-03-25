import axios from 'axios';
const GROQ_API_KEY = process.env.EXPO_PUBLIC_GROQ_API_KEY;


export const api = axios.create({
    baseURL: "https://api.groq.com/openai/v1",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${GROQ_API_KEY}`
    }
  })