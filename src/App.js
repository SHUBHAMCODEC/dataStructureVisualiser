import './App.css';
import React from 'react';
import Animation from './components/NavbarAnimation';
import Visualizer from './Visualizer';

function App() {
  return (
    <div className="app-container">
      <Animation />
      <Visualizer />
    </div>
  );
}

export default App;
