


import React, { useState, useRef, useEffect } from 'react';
import { BsRobot } from 'react-icons/bs';
import '../styles/SimpleChatBot.css';

const SimpleChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi 👋! Welcome to Space Zone India. How can I assist you?', sender: 'bot' }
  ]);
  const [userInput, setUserInput] = useState('');
  const chatRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);
  const closeChat = () => setIsOpen(false);

  const handleSend = () => {
    if (!userInput.trim()) return;

    const userMessage = { text: userInput, sender: 'user' };
    const botReply = generateReply(userInput);
    setMessages(prev => [...prev, userMessage, botReply]);
    setUserInput('');
  };

  const generateReply = (input) => {
    const lowerInput = input.toLowerCase();

    if (lowerInput.includes('hi') || lowerInput.includes('hello')) {
      return { text: 'Hello 👋! Feel free to ask me anything about Space Zone India.', sender: 'bot' };
    }
    if (lowerInput.includes('price') || lowerInput.includes('fees') || lowerInput.includes('cost')) {
      return { text: 'Our pricing depends on the program or course you select. Kindly contact our team directly for accurate details.', sender: 'bot' };
    }
    if (lowerInput.includes('buy') || lowerInput.includes('purchase')) {
      return { text: 'For purchases or admissions, please contact us at +91 73959 60012.', sender: 'bot' };
    }
    if (lowerInput.includes('contact')) {
      return { text: 'You can reach us at +91 73959 60012 or email: info@spacezoneindia.com.', sender: 'bot' };
    }
    if (lowerInput.includes('courses') || lowerInput.includes('training') || lowerInput.includes('program')) {
      return { text: 'We offer training in Satellite Technology, Rocketry, CubeSats, Nano Satellites, and much more 🚀.', sender: 'bot' };
    }
    if (lowerInput.includes('location') || lowerInput.includes('where are you')) {
      return { text: 'We are located in Chennai, India. You can find us easily on Google Maps: Space Zone India.', sender: 'bot' };
    }
    if (lowerInput.includes('admission') || lowerInput.includes('join')) {
      return { text: 'Admission inquiries? Please call +91 73959 60012 or visit our official website.', sender: 'bot' };
    }
    return { text: "I'm still learning 😊. You can directly contact our team at +91 73959 60012 for more details.", sender: 'bot' };
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div className="chatbot-float" onClick={toggleChat}>
        <BsRobot size={32} color="white" />
      </div>

      {isOpen && (
        <div className="chat-window" ref={chatRef}>
          <div className="chat-header">
            <span>Space Zone ChatBot 🤖</span>
            <button className="close-btn" onClick={closeChat}>×</button>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleChatBot;
