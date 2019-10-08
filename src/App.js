import React from 'react';
import './App.css';
import Stage from './composition/Stage'
import Footer from './composition/Footer'
import STORE from './STORE'

function App() {
  return (
    <div className="App">
      <Stage />



      <Footer />
    </div>
  );
}

export default App;



    //
    //<Sidebar />
    //  If chatting
    //    <Chat />
    //      <ChatItem />
    //  If !chatting
    //    <UserList />
    //      <UserItem />


    //  <Actor />   //Can we just use the UserItem and chage the css? Or pototype it?
    //<Footer />
