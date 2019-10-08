import React from 'react';
import ChatItem from './ChatItem'
import STORE from '../STORE'


function Chat() {
  const chatEvents = STORE.chatEvents
  const participants = STORE.participants
  return (
    <div className="chat-window">
			<div className="stream">
    {chatEvents.map((item) =>
        <ChatItem name={participants[item.id]} message={item.message} avatar='g' time={item.timestamp} type={item.type} />
    )}
      </div>
      <div className="input">
        <input type="text" />
      </div>
    </div>
  );
}

export default Chat;

