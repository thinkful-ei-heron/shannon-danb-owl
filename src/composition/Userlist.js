import React from 'react';
import STORE from './../STORE.js';
import Useritem from './Useritem'

function UserList() {
  const participants = STORE.participants;
  const list = [];
  
  participants.forEach(item => {
    if (item.onStage){
      list.push(item);
    }
  });
  participants.forEach(item => {
    if (item.inSession && !item.onStage) {
      list.push(item);
    }
  })
  participants.forEach(item => {
    if (!item.inSession && !item.onStage) {
      list.push(item)
    }
  });

  return (
    <div>
      {list.map(user => {
        return <Useritem
          key={user.id}
          avatar={user.avatar}
          name={user.name}
          onStage={user.onStage}
          inSession={user.inSession}
        />
      })}
    </div>
  );
}


export default UserList;