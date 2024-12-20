import React, { useState } from 'react';
import ChatInput from '../ChatInput/ChatInput';

const Chat: React.FC = () => {

    const getMessage = (message) => {
        console.log("This is from Chat.tsx:", message);
    }

    return (
        <div>
            <ChatInput 
            getMessage = {getMessage}
            />
        </div>
    )
}

export default Chat;