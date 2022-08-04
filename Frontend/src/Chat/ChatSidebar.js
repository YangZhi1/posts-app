import React, { useState } from 'react';
import './styles/ChatSidebar.css';

const ChatSidebar = ({setSelectedChat, selectedChat}) => {
  const users = ['John The Third of the Family', 'Mary', 'Susan'];

  return (
    <>
      <div className="users">
        {users && users.map((user, index) => {
          return (
            <button
              className="user-button"
              onClick={() => setSelectedChat(user)}
              disabled={user===selectedChat}
              key={index}
            >  
              {user}
            </button>
          )
        })}
      </div>
    </>
  )
}

export default ChatSidebar;
