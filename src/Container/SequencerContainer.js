import React, {Component} from 'react';

let numSteps = 16;

class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      bpm: 120,
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    this.activateButton1 = this.activateButton1.bind(this);
    this.activateButton2 = this.activateButton2.bind(this);
    this.activateButton3 = this.activateButton3.bind(this);
    this.activateButton4 = this.activateButton4.bind(this);
    this.activateButton5 = this.activateButton5.bind(this);
    this.activateButton6 = this.activateButton6.bind(this);
    this.activateButton7 = this.activateButton7.bind(this);
    this.activateButton8 = this.activateButton8.bind(this);
    this.activateButton9 = this.activateButton9.bind(this);
    this.activateButton10 = this.activateButton10.bind(this);
    this.activateButton11 = this.activateButton11.bind(this);
    this.activateButton12 = this.activateButton12.bind(this);
    this.activateButton13 = this.activateButton13.bind(this);
    this.activateButton14 = this.activateButton14.bind(this);
    this.activateButton15 = this.activateButton15.bind(this);
    this.activateButton16 = this.activateButton16.bind(this);
  }

  componentDidUpdate(){
    if(this.props.playing === true){
      this.play()
    } else {
      this.pause()
    }
  }

  play(){
    let step = 0;

    if(!this.timer){
      this.timer = setInterval(
        () => {
          this.state.pattern.map( (button, i) => {
            if(this.state.pattern[step] === 1) {
              this.props.playSound();
            }
            return null;
          })
          step++;
          step %= numSteps;
        },
        (60000 / this.state.bpm)
      );
    }
  }

  pause(){
    clearInterval( this.timer );
    this.timer = null;
  }

  activateButton1(){
    let pattern = [...this.state.pattern];
    let button = pattern[0];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[0] = button;
    this.setState({pattern});
  }

  activateButton2(){
    let pattern = [...this.state.pattern];
    let button = pattern[1];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[1] = button;
    this.setState({pattern});
  }

  activateButton3(){
    let pattern = [...this.state.pattern];
    let button = pattern[2];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[2] = button;
    this.setState({pattern});
  }

  activateButton4(){
    let pattern = [...this.state.pattern];
    let button = pattern[3];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[3] = button;
    this.setState({pattern});
  }

  activateButton5(){
    let pattern = [...this.state.pattern];
    let button = pattern[4];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[4] = button;
    this.setState({pattern});
  }

  activateButton6(){
    let pattern = [...this.state.pattern];
    let button = pattern[5];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[5] = button;
    this.setState({pattern});
  }

  activateButton7(){
    let pattern = [...this.state.pattern];
    let button = pattern[6];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[6] = button;
    this.setState({pattern});
  }

  activateButton8(){
    let pattern = [...this.state.pattern];
    let button = pattern[7];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[7] = button;
    this.setState({pattern});
  }

  activateButton9(){
    let pattern = [...this.state.pattern];
    let button = pattern[8];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[8] = button;
    this.setState({pattern});
  }

  activateButton10(){
    let pattern = [...this.state.pattern];
    let button = pattern[9];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[9] = button;
    this.setState({pattern});
  }

  activateButton11(){
    let pattern = [...this.state.pattern];
    let button = pattern[10];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[10] = button;
    this.setState({pattern});
  }

  activateButton12(){
    let pattern = [...this.state.pattern];
    let button = pattern[11];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[11] = button;
    this.setState({pattern});
  }

  activateButton13(){
    let pattern = [...this.state.pattern];
    let button = pattern[12];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[12] = button;
    this.setState({pattern});
  }

  activateButton14(){
    let pattern = [...this.state.pattern];
    let button = pattern[13];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[13] = button;
    this.setState({pattern});
  }

  activateButton15(){
    let pattern = [...this.state.pattern];
    let button = pattern[14];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[14] = button;
    this.setState({pattern});
  }

  activateButton16(){
    let pattern = [...this.state.pattern];
    let button = pattern[15];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[15] = button;
    this.setState({pattern});
  }

  render(){

    // let sequencer = this.state.pattern.map( ( button, i ) => {
    //
    //   return <button onClick={this.activateButton1}>{this.state.pattern[i]}</button>
    //
    // })

    return(
      <div>


      <button onClick={this.activateButton1}>{this.state.pattern[0]}</button>
      <button onClick={this.activateButton2}>{this.state.pattern[1]}</button>
      <button onClick={this.activateButton3}>{this.state.pattern[2]}</button>
      <button onClick={this.activateButton4}>{this.state.pattern[3]}</button>
      <button onClick={this.activateButton5}>{this.state.pattern[4]}</button>
      <button onClick={this.activateButton6}>{this.state.pattern[5]}</button>
      <button onClick={this.activateButton7}>{this.state.pattern[6]}</button>
      <button onClick={this.activateButton8}>{this.state.pattern[7]}</button>
      <button onClick={this.activateButton9}>{this.state.pattern[8]}</button>
      <button onClick={this.activateButton10}>{this.state.pattern[9]}</button>
      <button onClick={this.activateButton11}>{this.state.pattern[10]}</button>
      <button onClick={this.activateButton12}>{this.state.pattern[11]}</button>
      <button onClick={this.activateButton13}>{this.state.pattern[12]}</button>
      <button onClick={this.activateButton14}>{this.state.pattern[13]}</button>
      <button onClick={this.activateButton15}>{this.state.pattern[14]}</button>
      <button onClick={this.activateButton16}>{this.state.pattern[15]}</button>



      </div>
    )
  }

}

export default SequencerContainer;
