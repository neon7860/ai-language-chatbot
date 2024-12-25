import React, { useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';

const Chat: React.FC = () => {

    const [response, setResponse] = useState<string>("");

    const getMessage = (message) => {
        console.log("This is from Chat.tsx:", message);
        getAIResponse(message);
    }

    const getAIResponse = async (message) => {
        try {
            const response = await fetch("api/chat", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message })
            })
            const data = await response.json()
            setResponse(data.completion.choices[0].message.content);
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <ChatInput 
            getMessage = {getMessage}
            />
            {response && <p>{response}</p>}
        </div>
    )
}

export default Chat;