import React, {Component} from 'react';
import DrumMachineContainer from './DrumMachineContainer';
import SequencerComponent from '../Components/SequencerComponent';

class SequencerContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      bpm: 100,
      sequencePattern: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  }


  render(){
    return(
      <SequencerComponent sequencePattern={this.state.sequencePattern}/>
    )


  }
}
export default SequencerContainer;
