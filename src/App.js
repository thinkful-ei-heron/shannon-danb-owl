import React from 'react';
import './App.css';
import Sidebar from './composition/Sidebar';
import Footer from './composition/Footer'
import Stage from './composition/Stage'

function App() {
  return (
    <div className="App">
      <Sidebar />

      <Stage />
      <Footer />
    </div>
  );
}

export default App;
