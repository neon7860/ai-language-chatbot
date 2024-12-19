import React, { useState } from 'react';

const QuestionInput: React.FC = () => {
    const [question, setQuestion] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.target.value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(question);
        setQuestion('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={question}
                onChange={handleInputChange}
                placeholder="Ask a question..."
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default QuestionInput;