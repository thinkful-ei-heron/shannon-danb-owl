import React from 'react';
import './Stage.css';
import Actor from './Actor.js'
import STORE from '../STORE'

function Stage(){
  const participants = STORE.participants
  return (
    <div className="stage">
   	{participants.map((person) => {
      if(person.onStage){
        return (
        <Actor 
          name={person.name}
          key={person.id}
          img={person.avatar}
        />
        )
      }
    })}
		</div>
)
}

export default Stage;
