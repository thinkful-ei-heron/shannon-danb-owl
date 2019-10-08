import React from 'react';
import ChatItem from './ChatItem'
import STORE from '../STORE'
import cuid from 'cuid';


function Chat() {
  const chatEvents = STORE.chatEvents;
  const participants = STORE.participants;
  return (
    <div className="chat-window">
      <div className="stream">
        {chatEvents.map((item) => {
          const person = participants.filter(people => people.id === item.participantId)
          const date = new Date(item.timestamp);
          console.log(date.toString());
          return <ChatItem name={person[0].name} message={item.message} avatar={person[0].avatar} time={date.getHours() + ':' + date.getMinutes()} type={item.type} key={cuid()} />
        })}
      </div>
      <div className="input">
        <input type="text" />
      </div>
    </div>
  );
}

export default Chat;

