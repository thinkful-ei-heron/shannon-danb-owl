import React from 'react';
import STORE from './../STORE.js';
import Useritem from './Useritem'

function UserList() {
  const participants = STORE.participants;
  return (
    <div>
      {participants.map(user => {
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