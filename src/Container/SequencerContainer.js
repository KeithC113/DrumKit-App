import React, {Component} from 'react';
import kick from '../Public/Kick.wav';

const sequencePatterns = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]

class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      bpm: 120,
      patterns: sequencePatterns,
      playing: false,
      step: 0,
      steps: 16,
      kick: {
        name: "Kick",
        sound: new Audio(kick),
        keyStroke: 49
      }
    }

  }

  play() {
    const { bpm } = this.state

    this.setState(() => ({
      playing: true
    }))

    this.interval = setInterval(() => {this.setState(state => ({step: state.step < state.steps - 1 ? state.step + 1 : 0}), () => {const next = this.state.patterns.map((pattern, index) => (pattern === 1 ? this.state.kick.sound.play() : null)).filter(x => x)})}, (60 * 1000) / this.state.bpm / 2)
  }

  pause() {
    this.setState(() => ({
      playing: false,
      step: 0
    }))

    clearInterval(this.interval)
  }


  render(){
    return(
      <div>
      <button
              type="button"
              className={this.state.playing ? 'active' : ''}
              onClick={() => {
                if (this.state.playing) this.pause()
                else this.play()
              }}
            >
              Play
            </button>
      </div>
    )
  }

}

export default SequencerContainer;
