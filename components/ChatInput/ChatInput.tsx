import React, { useState } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
    getMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ getMessage }) => {
    const [question, setQuestion] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        getMessage(question);
        setQuestion('');
    };

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <textarea
                    value={question}
                    className={styles.input}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Chat with me..."
                />
                {/* <button type="submit">Send</button> */}
                <img src="/assets/send.svg" alt="Send" className={styles.sendButton} onClick={handleSubmit} />
            </form>
        </div>
    );
};

export default ChatInput;