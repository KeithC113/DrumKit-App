import React from 'react';
import DrumMachineContainer from './Container/DrumMachineContainer.js';
import SequencerContainer from './Container/SequencerContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <DrumMachineContainer/>
      <SequencerContainer/>
    </div>
  );
}

export default App;
