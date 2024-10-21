import React, { useState } from 'react';
import chatbotIcon from './images/chatbot.jpeg'; // Replace with your chatbot icon path

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async () => {
    if (!message.trim()) {
      setError('Please enter a message.');
      return;
    }

    setChatHistory((prev) => [...prev, { sender: 'You', message }]);
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch response from AI');
      }

      const data = await response.json();
      setChatHistory((prev) => [
        ...prev,
        { sender: 'AI', message: data.response },
      ]);
      setMessage(''); // Clear input box after sending
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to get a response. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Chatbot Icon */}
      <div onClick={togglePopup} className="fixed bottom-4 right-4 cursor-pointer">
        <img src={chatbotIcon} alt="Chatbot Icon" className="w-16 h-16 rounded-full" />
      </div>

      {/* Pop-up Text Box Section */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4">Chatbot</h2>

            {/* Chat History */}
            <div className="mb-4 h-48 overflow-y-auto border border-gray-300 p-2">
              {chatHistory.map((chat, index) => (
                <p key={index} className={chat.sender === 'You' ? 'text-right' : 'text-left'}>
                  <strong>{chat.sender}:</strong> {chat.message}
                </p>
              ))}
              {loading && <p>AI is typing...</p>} {/* Loading indicator */}
              {error && <p className="text-red-500">{error}</p>} {/* Error message */}
            </div>

            {/* Text Input Box */}
            <textarea
              className="w-full h-20 p-2 border border-gray-300 rounded-md mb-4"
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
            ></textarea>

            {/* Send Message Button */}
            <button onClick={sendMessage} disabled={loading} className={`bg-blue-500 text-white px-4 py-2 rounded-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Send
            </button>

            {/* Close button */}
            <button onClick={togglePopup} className="absolute top-2 right-2 text-black text-2xl font-bold">
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
