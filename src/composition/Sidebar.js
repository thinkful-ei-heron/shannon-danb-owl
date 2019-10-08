import React from 'react';
import './Sidebar.css';
import Userlist from './Userlist';

function Sidebar () {
  return (
    <div className= "js-Sidebar">
      <nav>
        <ul className= "navToolsList">
          <li>Chat</li>
          <li>Participants</li>
          <li>Settings</li>
          <li>URL</li>
          <li>FAQ</li>
        </ul>
      </nav>
      <div className='Chat'>
      </div>
      <div className='Participants'>
        <Userlist />
      </div>
    </div>
  );
}


export default Sidebar;

