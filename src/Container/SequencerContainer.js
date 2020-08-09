import React, {Component} from 'react';

class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      bpm: 120,
      pattern: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      playing: false
    }
    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
    this.activateButton3 = this.activateButton3.bind(this);
    this.activateButton4 = this.activateButton4.bind(this);
  }

  play() {
    this.setState(() => ({
      playing: true
    }))
    this.interval = setInterval(() => {
      this.state.pattern.map((button, index) => (button === 1 ? this.props.playSound() : null))
    }, (60000 / this.state.bpm))
  }

  pause() {
    this.setState(() => ({
      playing: false
    }))
    clearInterval(this.interval)
  }

  activateButton1(){
    if (this.state.pattern[0] === 0){
      this.state.pattern[0] = 1;
    }
    else this.state.pattern[0] = 0;
  }

  activateButton2(){
    if (this.state.pattern[1] === 0){
      this.state.pattern[1] = 1;
    }
    else this.state.pattern[1] = 0;
  }

  activateButton3(){
    if (this.state.pattern[2] === 0){
      this.state.pattern[2] = 1;
    }
    else this.state.pattern[2] = 0;
  }

  activateButton4(){
    if (this.state.pattern[3] === 0){
      this.state.pattern[3] = 1;
    }
    else this.state.pattern[3] = 0;
  }


  render(){
    return(
      <div>
      <button type="button" onClick={() => {
                if (this.state.playing) this.pause()
                else this.play()
              }}>
              Start
      </button>
      <button onClick={this.activateButton1}>{this.state.pattern[0]}</button>
      <button onClick={this.activateButton2}>{this.state.pattern[1]}</button>
      <button onClick={this.activateButton3}>{this.state.pattern[2]}</button>
      <button onClick={this.activateButton4}>{this.state.pattern[3]}</button>
      </div>
    )
  }

}

export default SequencerContainer;
