import React from 'react';
import './DrumMachineComponent.css'

const DrumMachineComponent = (props) => {

  const triggerSound =() => {
    return props.playSound(props.sound.sound);

  }

  return (
    <div>
      <button className = "DrumPadButton" onClick={triggerSound}>{props.sound.name} </button>
    </div>
  )

}

export default DrumMachineComponent;
