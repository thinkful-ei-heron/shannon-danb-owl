import React from 'react';
import ChatItem from './ChatItem'
import STORE from '../STORE'


function Chat() {
  return (
    <div className="chat-window">
			<div className="stream">

        <ChatItem />
      </div>
      <div className="input">
        <input type="text" />
      </div>
    </div>
  );
}

export default Chat;

