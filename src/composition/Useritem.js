import React from 'react';
import './Useritem.css';

function Useritem(props){
  return (
    <div className= "eachParticipantInfo">
      <img src= {props.avatar} alt= 'avatar' className= 'avatar' />
      <ul className= "participantInfo">
        <li>{props.name}</li>
        <li><span className= {props.onStage || props.inSession ? 'greenCircle' : 'greyCircle'}></span>{props.onStage ? 'on stage' : props.inSession ? 'in session' : 'left session'}</li>
      </ul>
  </div>
  );
}


export default Useritem;