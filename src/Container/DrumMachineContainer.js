import React, {Component} from 'react';
import DrumMachineComponent from '../Components/DrumMachineComponent';

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
      clap: new Audio(clap),
      clave: new Audio(clave),
      closedHiHat: new Audio(closedHiHat),
      cowbell: new Audio(cowbell),
      cymbal: new Audio(cymbal),
      highConga:new Audio(highConga),
      highTom:new Audio(highTom),
      kick: new Audio(kick),
      lowConga: new Audio(lowConga),
      lowTom: new Audio(lowTom),
      midConga: new Audio(midConga),
      midTom: new Audio(midTom),
      openHiHat: new Audio(openHiHat),
      rimShot: new Audio(rimShot),
      shaker: new Audio(shaker),
      snare: new Audio(snare)

    }
    this.playSound=this.playSound.bind(this);
  }

  playSound(audioSound){
    return audioSound.play();
  }

  render(){
    return (
      <div>
        <DrumMachineComponent sound={this.state.clap} playSound={this.playSound} />
        <DrumMachineComponent sound={this.state.clave} playSound={this.playSound} />
      </div>
    )
  }
}
export default DrumMachineContainer;
