import React from 'react';
import './App.css';
import Sidebar from './composition/Sidebar';
import Footer from './composition/Footer';
import Stage from './composition/Stage';
import Chat from './composition/Chat';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Chat />
      <Stage />
      <Footer />
    </div>
  );
}

export default App;
