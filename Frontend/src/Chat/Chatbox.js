import React, { useState } from 'react';
import SendLogo from './assets/send-fill.svg';
import './styles/Chatbox.css';

const Chatbox = (props) => {
  const [message, setMessage] = useState('');
  const { selectedChat } = props;

  const onChangeMessage = (e) => {
    setMessage(e.target.value)
  }

  const onClickSend = () => {
    if(message !== '') {
      console.log('Sending message button click...', message);
      setMessage('');
    }
  }
  
  const handleEnterMessage = (event) => {
    if(event.key === 'Enter') {
      if(message !== '') {
        console.log('Sending message...', message);
        setMessage('');
      }
    }
  }

  return (
    <div>
      {selectedChat ? 
        `Chat with ${selectedChat}` :
        null
      }

      <div className="chat-input-container">
        <input className="chat-input"
          value={message}
          onChange={(e) => onChangeMessage(e)}
          placeholder="Type a message..."
          onKeyDown={handleEnterMessage}
        />
        <img 
          className="send-button"
          src={SendLogo}
          alt="Send Logo"
          onClick={onClickSend}
        />
      </div>
    </div>
  )
}

export default Chatbox;
