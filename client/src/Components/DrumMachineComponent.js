import React, {Component} from 'react';
import SequencerComponent from "./SequencerComponent"
import './DrumMachineComponent.css'

class DrumMachineComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected: false
    }
    this.triggerSound = this.triggerSound.bind(this);
    this.keyTrigger = this.keyTrigger.bind(this);
    this.selectedSound = this.selectedSound.bind(this);
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

  selectedSound(){
    if(this.state.selected === false){
      this.setState({selected: true})
    } else {
      this.setState({selected: false})
    }
  }

  render(){
    return (
      <div className = "drum-channel">
        <button className = "DrumPadButton" onClick={this.selectedSound}>{this.props.sound.name} </button>
        <SequencerComponent save={this.props.save} selected={this.state.selected} bpm={this.props.bpm} playing={this.props.playing} audio={this.props.sound} playSound={this.triggerSound}/>
      </div>
    )
  }

}

export default DrumMachineComponent;
