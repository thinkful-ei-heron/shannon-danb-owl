import React from 'react';
import './Actor.css';

function Actor(props){
  console.log(props)
  return (
    <div className="actor">
      <h3 className="actor-name">{props.name}</h3>
      <img src={props.img} alt="" />
    </div>
  )
}

export default Actor;

