import React from 'react';

function ChatItem(props) {
    if (props.type === 'message') {
      return (
        <div>
          <div>
            <img className="message-img" src={props.img} alt="" />
          </div>
          <div>
            <header className="message-header">
              <h5>{props.name}</h5>
              <p>{props.time}</p>
            </header>
            <div className="message-body">
              {props.message}
            </div>
          </div>
        </div>
      )
    }
    else {
      return (
        <div>
        {props.name} + {props.type}
        </div>
      )
    }
  }

export default ChatItem;
