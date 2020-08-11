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
import playIcon from '../Public/play.png';
import stopIcon from '../Public/stop.png';

class DrumMachineContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      clap: {
        name: "Clap",
        sound: new Audio(clap),
        keyStroke: 87,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      clave: {
        name: "Clave",
        sound: new Audio(clave),
        keyStroke: 82,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      closedHiHat: {
        name: "Closed Hi-Hat",
        sound: new Audio(closedHiHat),
        keyStroke: 52,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      cowbell: {
        name: "Cowbell",
        sound: new Audio(cowbell),
        keyStroke: 69,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      cymbal: {
        name: "Cymbal",
        sound: new Audio(cymbal),
        keyStroke: 81,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      highConga: {
        name: "High Conga",
        sound: new Audio(highConga),
        keyStroke: 67,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      highTom: {
        name: "High Tom",
        sound: new Audio(highTom),
        keyStroke: 68,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      kick: {
        name: "Kick",
        sound: new Audio(kick),
        keyStroke: 49,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      lowConga: {
        name: "Low Conga",
        sound: new Audio(lowConga),
        keyStroke: 90,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      lowTom: {
        name: "Low Tom",
        sound: new Audio(lowTom),
        keyStroke: 65,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      midConga: {
        name: "Mid Conga",
        sound: new Audio(midConga),
        keyStroke: 88,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      midTom: {
        name: "Mid Tom",
        sound: new Audio(midTom),
        keyStroke: 83,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      openHiHat: {
        name: "Open Hi-Hat",
        sound: new Audio(openHiHat),
        keyStroke: 51,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      rimShot: {
        name: "Rimshot",
        sound: new Audio(rimShot),
        keyStroke: 70,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      shaker: {
        name: "Shaker",
        sound: new Audio(shaker),
        keyStroke: 86,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      snare: {
        name: "Snare",
        sound: new Audio(snare),
        keyStroke: 50,
        currentPattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      },
      playing: false,
      bpm: 120
    }
    this.playSound = this.playSound.bind(this);
    this.handleBPM = this.handleBPM.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }

  playSound(audioSound){
    audioSound.currentTime = 0
    return audioSound.play();
  }

  startSequence(){
    this.setState({playing: true});
  }

  stopSequence(){
    this.setState({playing:false});
  }

  handleBPM(event) {
    let newBPM = event.target.value;
    this.setState({bpm: newBPM});
  }

  handleSave(newPattern){
    this.setState({clap: {name: "Clap",
    sound: new Audio(clap),
    keyStroke: 87,
    currentPattern: newPattern}})
  }

  render(){
    return (
      <div className ="DrumMachineContainer">
      <div className="controls">
      <img alt="Play" className="StartButton" src={this.state.playing ? stopIcon : playIcon} onClick={() => {
        if (this.state.playing) this.stopSequence()
        else this.startSequence()
      }}/>
      <button className="SaveAllButton" type="button" onClick={this.handleSave}>Save All</button>
      <span className="bpm">{this.state.bpm} BPM
      <input className="slider"
      type="range"
      min="40"
      max="180"
      step="1"
      value={this.state.bpm}
      onChange={this.handleBPM}
      />
      </span>
      </div>
        <div className="drum-pads">
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.kick} playSound={this.playSound}/>
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.snare} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.openHiHat} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.closedHiHat} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.cymbal} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.clap} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.cowbell} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.clave} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.lowTom} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.midTom} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.highTom} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.rimShot} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.lowConga} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.midConga} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.highConga} playSound={this.playSound} />
        <DrumMachineComponent save={this.handleSave} bpm={this.state.bpm} playing={this.state.playing} sound={this.state.shaker} playSound={this.playSound} />
        </div>
      </div>
    )
  }
}

export default DrumMachineContainer;
