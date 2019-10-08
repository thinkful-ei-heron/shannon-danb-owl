import React from 'react';
import './App.css';
import Sidebar from './composition/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      {/* //
    //<Sidebar />
    //  If chatting
    //    <Chat />
    //      <ChatItem />
    //  If !chatting
    //    <UserList />
    //      <UserItem />


    //  <Actor />   //Can we just use the UserItem and chage the css? Or pototype it?
    //<Footer /> */}
    </div>
  );
}

export default App;
