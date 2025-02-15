import React, { useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';
import styles from './Chat.module.css';
import Greeting from '../Greeting/Greeting';

const Chat: React.FC = () => {

    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
    const [greeting, setGreeting] = useState(true);

    const getMessage = (message: string, language?: string) => {
        if (greeting) {
            setGreeting(false);
        }
        // Add user message to state
        const newMessages = [...messages, { role: "user", content: message, language: language }];
        setMessages(newMessages);
        getAIResponse(newMessages);
    }

    const getAIResponse = async (newMessages) => {
        try {
            const response = await fetch("api/chat", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ newMessages })
            })
            const data = await response.json()
            setMessages([...newMessages, {
                role: "system",
                content: data.completion.choices[0].message.content
            }])
            console.log(messages)
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className={styles.container}>
            {greeting ? 
            <Greeting 
            getMessage={getMessage} 
            /> : 
            (messages.length > 0 ? 
            <div className={styles.chatbox}>
                {messages.map((message, index) => (
                    <div className={
                        message.role === "user" ? styles.userMessage : styles.systemMessage
                    } 
                        key={index}>
                        <p key={index}>{message.content}</p>
                    </div>
                ))}
            </div> : 
            <div className={styles.welcomeMessage}>
                <h1>Welcome!</h1>
                <p>How may I help you today?</p>
            </div>)
            }
            <ChatInput 
                getMessage = {getMessage}
            />
        </div>
    )
}

export default Chat;