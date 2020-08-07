import React from 'react';

const DrumMachineComponent = (props) => {

  const triggerSound =() => {
    return props.playSound(props.sound);

  }

  return (
    <div>
      <button onClick={triggerSound}> Clap</button>
    </div>
  )

}

export default DrumMachineComponent;
