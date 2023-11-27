// Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';
// const API KEY = 
const Chatbot = () => {
  const [userInput, setUserInput] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const sendMessage = async () => {
    // Make a request to the chatbot API with the user's input
    const response = await axios.post('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', {
      userInput,
      // other parameters if required by the API
    });

    // Update the chat history with the bot's response
    setChatHistory([...chatHistory, { type: 'user', message: userInput }]);
    setChatHistory([...chatHistory, { type: 'bot', message: response.data.botResponse }]);

    // Clear the user input field
    setUserInput('');
  };

  return (
    <div>
      {/* Display chat history */}
      {chatHistory.map((chat, index) => (
        <div key={index} className={chat.type}>
          {chat.message}
        </div>
      ))}

      {/* User input field */}
      <input
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />

      {/* Send button */}
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chatbot;