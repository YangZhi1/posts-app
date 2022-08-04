import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Chatbox from './Chatbox';
import ChatSidebar from './ChatSidebar';
import './styles/styles.css';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token === "null") {
      window.location.href = '/login';
    }
  })

  const onClickChat = (user) => {
    setSelectedChat(user);
  }

  return (
    <div>
      <Navbar />
      
      <div className="chat-container">
        <div className="chat-sidebar">
          <ChatSidebar
            setSelectedChat={setSelectedChat}
            selectedChat={selectedChat}
          />
        </div>
        
        <Chatbox 
          selectedChat={selectedChat}
        />
      </div>
    </div>
  )
}

export default Chat;
