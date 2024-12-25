import React, { useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';

const Chat: React.FC = () => {

    const [response, setResponse] = useState<string>("");
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);

    const getMessage = (message) => {
        console.log("This is from Chat.tsx:", message);
        getAIResponse(message);
    }

    const getAIResponse = async (message) => {
        setMessages([...messages, {
            role: "user",
            content: message
        }])
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
            setMessages([...messages, {
                role: "system",
                content: data.completion.choices[0].message.content
            }])
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div>
            <ChatInput 
            getMessage = {getMessage}
            />
            {/* {response && <p>{response}</p>} */}
            {messages.filter(message => message.role = "user").map((message, index) => (
                <p key={index}>{message.role}: {message.content}</p>
            ))}
        </div>
    )
}

export default Chat;