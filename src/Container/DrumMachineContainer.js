import React, {Component} from 'react';
import DrumMachineComponent from '../Components/DrumMachineComponent';
import './DrumMachineContainer.css'

import clap from '../Public/Clap.wav';
import clave from '../Public/Clave.wav';
import closedHiHat from '../Public/ClosedHiHat.wav';
import cowbell from '../Public/Cowbell.wav';
import cymbal from '../Public/Cymbal.wav';
import highConga from '../Public/HighConga.wav';
import highTom from '../Public/HighTom.wav';
import kick from '../Public/Kick.wav';
import lowConga from '../Public/LowConga.wav';
import lowTom from '../Public/LowTom.wav';
import midConga from '../Public/MidConga.wav';
import midTom from '../Public/MidTom.wav';
import openHiHat from '../Public/OpenHiHat.wav';
import rimShot from '../Public/Rimshot.wav';
import shaker from '../Public/Shaker.wav';
import snare from '../Public/Snare.wav';


class DrumMachineContainer extends Component{

  constructor(props){
    super(props);
    this.state={
      clap: {name: "Clap",
             sound: new Audio(clap)},
      clave: {name: "Clave",
             sound: new Audio(clave)},
      closedHiHat: {name: "ClosedHiHat",
             sound: new Audio(closedHiHat)},
      cowbell: {name: "Cowbell",
             sound: new Audio(cowbell)},
      cymbal: {name: "Cymbal",
             sound: new Audio(cymbal)},
      highConga: {name: "HighConga",
             sound: new Audio(highConga)},
      highTom: {name: "HighTom",
             sound: new Audio(highTom)},
      kick: {name: "Kick",
             sound: new Audio(kick)},
      lowConga: {name: "LowConga",
             sound: new Audio(lowConga)},
      lowTom: {name: "LowTom",
             sound: new Audio(lowTom)},
      midConga: {name: "MidConga",
             sound: new Audio(midConga)},
      midTom: {name: "MidTom",
             sound: new Audio(midTom)},
      openHiHat: {name: "OpenHiHat",
             sound: new Audio(openHiHat)},
      rimShot: {name: "Rimshot",
             sound: new Audio(rimShot)},
      shaker: {name: "Shaker",
             sound: new Audio(shaker)},
      snare: {name: "Snare",
             sound: new Audio(snare)}
    }
    this.playSound=this.playSound.bind(this);
  }

  playSound(audioSound){
    audioSound.currentTime = 0
    return audioSound.play();
  }

  render(){
    return (
      <div className ="DrumMachineContainer">
        <DrumMachineComponent sound={this.state.clap} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.clave} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.closedHiHat} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.cowbell} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.cymbal} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.highConga} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.highTom} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.kick} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.lowConga} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.lowTom} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.midConga} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.midTom} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.openHiHat} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.rimShot} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.shaker} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.snare} playSound={this.playSound} />
      </div>
    )
  }
}
export default DrumMachineContainer;
