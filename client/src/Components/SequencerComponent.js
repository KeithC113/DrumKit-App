import React, {Component} from 'react';
import "./SequencerComponent.css";
import saveIcon from '../Public/save.png';
import clearIcon from '../Public/clear.png';

let numSteps = 16;


class SequencerContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      pattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      savedPattern: []
    }

    this.activateButton = this.activateButton.bind(this);

    this.savePattern = this.savePattern.bind(this);
    this.clearAll = this.clearAll.bind(this);
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
        (60000 / this.props.bpm) / 4
      );
    }
  }

  pause(){
    clearInterval( this.timer );
    this.timer = null;
  }

  activateButton(index){
    let pattern = [...this.state.pattern];
    let button = pattern[index];
    if (button === 0){
      button = 1;
    }
    else {
      button = 0
    }
    pattern[index] = button;
    this.setState({pattern});
  }

  clearAll(){
    let pattern = [...this.state.pattern];
    let clearedPattern = pattern.map((button) => {
      return button = 0;
    })
    this.setState({pattern: clearedPattern});
  }

  savePattern(event){
    let pattern = [...this.state.pattern];
    this.props.save(this.props.name, pattern);
  }
  // savePattern(event){
  //   let pattern = [...this.state.pattern];
  //   let newPattern = {};
  //   pattern.forEach((button, index) => {
  //     newPattern[index] = button
  //   })
  //   this.setState({
  //     savedPattern: newPattern
  //     })
  //     this.props.save(newPattern);
  //     console.log(newPattern);
  // }

  // loop over pattern []
    // create key value pair on each iteration
      // where key is a number
        // value is at current iteration of array we're looping over
        // Then send object back to top level
        // .put into new pattern object

  render(){
    // let sequencer = this.state.pattern.map( ( button, i ) => {
    //
    //   return <button onClick={this.activateButton1}>{this.state.pattern[i]}</button>
    //
    // })
    return(
      <div className={this.props.selected ? "show-sequencer" : "hide-sequencer"}>

        <div className="sequencer">
          <button className={this.state.pattern[0] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(0)}></button>
          <button className={this.state.pattern[1] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(1)}></button>
          <button className={this.state.pattern[2] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(2)}></button>
          <button className={this.state.pattern[3] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(3)}></button>
          <button className={this.state.pattern[4] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(4)}></button>
          <button className={this.state.pattern[5] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(5)}></button>
          <button className={this.state.pattern[6] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(6)}></button>
          <button className={this.state.pattern[7] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(7)}></button>
          <button className={this.state.pattern[8] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(8)}></button>
          <button className={this.state.pattern[9] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(9)}></button>
          <button className={this.state.pattern[10] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(10)}></button>
          <button className={this.state.pattern[11] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(11)}></button>
          <button className={this.state.pattern[12] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(12)}></button>
          <button className={this.state.pattern[13] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(13)}></button>
          <button className={this.state.pattern[14] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(14)}></button>
          <button className={this.state.pattern[15] === 1 ? "button-on" : "button-off"} onClick={() => this.activateButton(15)}></button>
          <img alt="Save" src={saveIcon} className="save-icon"
            onClick = {this.savePattern}/>
          <img alt="Clear" src={clearIcon} className="clear-icon" onClick={this.clearAll}/>

          </div>

      </div>
    )
  }
}


export default SequencerContainer;
