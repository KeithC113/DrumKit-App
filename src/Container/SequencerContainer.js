import React, {Component} from 'react';

const sequencePatterns = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]

class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      bpm: 120,
      patterns: sequencePatterns,
      playing: false
    }

  }

  play() {
    this.setState(() => ({
      playing: true
    }))

    this.interval = setInterval(() => {
      this.state.patterns.map((pattern, index) => (pattern === 1 ? this.props.playSound() : null))
    }, (60000 / this.state.bpm))
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
              Start
            </button>
      </div>
    )
  }

}

export default SequencerContainer;
