import React from 'react';

const DrumMachineComponent = (props) => {

  const triggerSound =() => {
    return props.playSound(props.sound.sound);

  }

  return (
    <div>
      <button onClick={triggerSound}>{props.sound.name} </button>
    </div>
  )

}

export default DrumMachineComponent;
