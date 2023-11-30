import React, { useState } from 'react';
import axios from 'axios';
import './ChatBox.css';
import Eclipse from '../Assets/Ellipse.svg'
import { Link } from 'react-router-dom';
import blacklogo from '../Assets/vitaguideblack.png';
import './Chat.css';

const API_KEY = "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";
const API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = async () => {
    // Add user's message to the chat
    setMessages([...messages, { text: inputText, isUser: true }]);
    
    try {
      // Send user's message to OpenAI API
      const response = await axios.post(
        API_URL,
        {
          prompt: inputText,
          max_tokens: 150, // You can adjust this based on your needs
          temperature: 0.5 // Controls the randomness of the response
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
          }
        }
      );

      // Add OpenAI's response to the chat
      setMessages([...messages, { text: response.data.choices[0].text.trim(), isUser: false }]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }

    // Clear input after sending message
    setInputText('');
  };

  return (
    <div className='welcome-main-container'>
        <aside className='welcome-left'>
              <div className='welcome-img-container-left'>
                <Link  to='/login'>
                    <img className='nav-logo' src={blacklogo} alt="" />
                  </Link>
              </div>
        </aside>

        <div className='chat-right'>
            <div className='chat-user-input'>
                <div className='chat-input'>
                    {messages.map((message, index) => (
                    <div key={index} className={message.isUser ? 'user-message' : 'ai-message'}>{message.text}
                </div>
                ))}
                </div>
                <div><img className='chat-image' src={Eclipse} alt="" /></div>
            </div>

            <div>
                <div className="input-container">
                    <input
                    className='chat-input-type'
                    type="text"
                    placeholder="Type a message..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    />
                        <button className='btn-input' onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Chatbox;