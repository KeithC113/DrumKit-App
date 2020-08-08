import React, {Component} from 'react';


const SequencerComponent = (props) => {


     const sequenceButtons = props.sequencePattern.map((button, index) =>{
    return <button key={index}>{button}</button>
  })



    return(
      <div>
      {sequenceButtons}
      </div>
    )



}
export default SequencerComponent;
