import React, {Component} from 'react';
import SequencerContainer from "../Container/SequencerContainer"
import './DrumMachineComponent.css'

class DrumMachineComponent extends Component {

  constructor(props){
    super(props);
    this.triggerSound = this.triggerSound.bind(this);
    this.keyTrigger = this.keyTrigger.bind(this);
  }

  keyTrigger(event){
      if(event.keyCode === this.props.sound.keyStroke) {
        this.triggerSound();
      }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.keyTrigger, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.keyTrigger, false);
  }

  triggerSound(){
    return this.props.playSound(this.props.sound.sound);
  }

  render(){
    return (
      <div>
        <button className = "DrumPadButton" onClick={this.triggerSound}>{this.props.sound.name} </button>
        <SequencerContainer audio={this.props.sound} playSound={this.triggerSound}/>
      </div>
    )
  }

}

export default DrumMachineComponent;
