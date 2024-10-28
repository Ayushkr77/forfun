import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

function GeminiResponse() {
  const [response, setResponse] = useState('');

  const geminiResponse = async () => {
    try {
      const genAi = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API);
      const model = await genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt = "You are a computer science expert explaining the concept of machine learning to a 5th grader.";
      const result = await model.generate({ prompt });
      
      setResponse(result?.text || 'No response from API.');
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("Error occurred while fetching response.");
    }
  };

  return (
    <div>
      <h1>Gemini Response</h1>
      <button onClick={geminiResponse}>Get Response</button>
      <p>{response}</p>
    </div>
  );
}

export default GeminiResponse;
