import { OpenAI } from "openai";
import dotenv from "dotenv";
import { NextApiRequest, NextApiResponse } from "next";

dotenv.config();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

export default async function handler (req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === "POST") {
      const language  = req.body.newMessages[0].language;

       // Debugging statements
       console.log("Received language:", language);

      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { "role": "system", content: `You are a ${language} speaker. Always respond to the user in ${language}` },
            ...req.body.newMessages
        ]
    });
      res.status(200).json({ completion });
    }
  }
  catch (error) {
    res.status(500).json({ error: error});
  }
}



  
