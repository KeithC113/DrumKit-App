import React, {Component} from 'react';

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
import test from '../Public/test.mp3';

// let canvas, ctx, source, context, analyser, fbc_array, bar_count, bar_pos, bar_width, bar_height;
//
// let audio = new Audio();

class EqualiserComponent extends Component {
  constructor(props){
    super(props)

    this.createVisualization = this.createVisualization.bind(this)

    this.test = new Audio(test);
    // this.clap = new Audio(clap);
    let testing = this.props.eq;
    this.testing = new Audio(testing);

  }



  componentDidMount(){
    this.createVisualization()
  }

  createVisualization(){
    let context = new AudioContext();
    let analyser = context.createAnalyser();
    let canvas = this.refs.analyzerCanvas;
    let ctx = canvas.getContext('2d');
    let audio = this.refs.audio;
    let gradient = ctx.createLinearGradient(0,150,0,0);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(1, "blue");
    audio.crossOrigin = "anonymous";
    let audioSrc = context.createMediaElementSource(audio);
    audioSrc.connect(analyser);
    audioSrc.connect(context.destination);
    analyser.connect(context.destination);

    function renderFrame(){
      let freqData = new Uint8Array(analyser.frequencyBinCount)
      requestAnimationFrame(renderFrame)
      analyser.getByteFrequencyData(freqData)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      console.log(freqData)
      //ctx.fillStyle = '#9933ff';
      ctx.fillStyle = gradient;
      let bars = 100;
      for (var i = 0; i < bars; i++) {
        let bar_x = i * 6;
        let bar_width = 4;
        let bar_height = -(freqData[i] / 2);
        ctx.fillRect(bar_x, canvas.height, bar_width, bar_height)
      }
    };
    renderFrame()
  }

  render() {
    return (
      <div className="eql">
        {/* <div class="accordion">
          <input type="radio" name="select" class="accordion-select" />
          <div class="accordion-title"><span>How to use</span>
        </div>
          <div class="accordion-content"></div>
          <input type="radio" name="select" class="accordion-select" />
          <div class="accordion-title"><span>Visualiser</span>
        </div>
          <div class="accordion-content"><h2></h2> */}
          <div id="mp3_player">
            <div id="audio_box">
              <audio
                ref="audio"
                autoPlay={false}
                controls={true}
                //this is the link to my song url feel free to use it or replace it with your own
                src={test}
                >
                </audio>
              </div>
              <canvas
                ref="analyzerCanvas"
                id="analyzer"
                >
                </canvas>
              </div>
            {/* // </div></div> */}
          // </div>

        );
      }

    }
    export default EqualiserComponent;
