import React, { useState } from 'react';
import './chatbot.css'; // Import your CSS for styling if needed
import { FaTrash } from 'react-icons/fa'; // Import the delete icon from react-icons/fa

const Chatbot = () => {
    const [messages, setMessages] = useState([
        { id: 1, text: 'Hi! How can I help you ?', sender: 'bot' }
    ]);
    const [userMessage, setUserMessage] = useState('');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (userMessage.trim() === '') return; // Prevent empty messages

        // Add user message to the chat
        const newMessage = { id: Date.now(), text: userMessage, sender: 'user' };
        setMessages([...messages, newMessage]);
        setUserMessage('');

        // Simulate bot reply (replace with actual chatbot logic)
        setTimeout(() => {
            const botReply = { id: Date.now() + 1, text: 'I am a simple chatbot.', sender: 'bot' };
            setMessages([...messages, botReply]);
        }, 500);
    };

    const handleDeleteMessage = (id) => {
        const updatedMessages = messages.filter(message => message.id !== id);
        setMessages(updatedMessages);
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages">
                {messages.map((message) => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        {message.text}
                        {message.sender === 'user' && (
                            <button className="delete-message" onClick={() => handleDeleteMessage(message.id)}>
                                <FaTrash />
                            </button>
                        )}
                    </div>
                ))}
            </div>
            <form onSubmit={handleMessageSubmit} className="chatbot-form">
                <input
                    type="text"
                    placeholder="Type a message..."
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
