import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000'); // Backend server URL

const Chat = () => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Attach the listener
    const handleMessage = (msg) => {
      setChat((prevChat) => [...prevChat, msg]);
    };

    socket.on('message', handleMessage);

    // Cleanup listener on component unmount or re-render
    return () => {
      socket.off('message', handleMessage);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('message', message);
      setMessage('');
    }
  };

  return (
    <div>
      <h2>Chat Room</h2>
      <div>
        {chat.map((msg, index) => (
          <p key={index}>{msg}</p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
