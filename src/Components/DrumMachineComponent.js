import React from 'react';
import './DrumMachineComponent.css'

const DrumMachineComponent = (props) => {

  const triggerSound =() => {
      return props.playSound(props.sound.sound);
}
  const keySound =(event) => {
    console.log(event);
    if(event.type === 'click' || event.type==='keyDown'
       ){
      return props.playSound(props.sound.sound);
  }
}
  return (
    <div>
      <button onKeyDown = {keySound} className = "DrumPadButton" onClick={triggerSound}>{props.sound.name} </button>
    </div>
  )

}

export default DrumMachineComponent;
