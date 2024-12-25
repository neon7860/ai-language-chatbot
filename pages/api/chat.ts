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
      const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { "role": "system", content: "You are a language bot assistant who can conversate with the user in a language of their preference so that they may practice the langauge and improve. You must give feedback on the users grammar, choice of words and correct them to help them improve their language learning. Respond to the user in a friendly manner. Do not explain every message the user sends. Just maintain a conversation with them. " },
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



  
