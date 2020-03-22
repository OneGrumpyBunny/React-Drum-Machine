import React from 'react';


const activate = {
    animation: '.5s activateDrumPad'
};

const deactivate = {
   animation: 'none'
};

class DrumPad extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        padStyle: deactivate
      }
      this.playSound = this.playSound.bind(this);    
      this.handleKeyPress = this.handleKeyPress.bind(this);
      this.activatePad = this.activatePad.bind(this);
    } 
    
    componentDidMount() {
      document.addEventListener('keydown', this.handleKeyPress);
    }
    componentWillUnmount() {
      document.removeEventListener('keydown', this.handleKeyPress);
    }
    
    
    handleKeyPress(e) {
      if (e.keyCode === this.props.keyCode) {
        this.playSound();
      }
    }
    
    activatePad() {
      this.setState({
        padStyle: activate
      })
    }
    
    deActivatePad() {
      this.setState({
        padStyle: deactivate
      })
    }
    
    playSound(e) {
      const sound = document.getElementById(this.props.keyTrigger);
      sound.currentTime = 0;
      sound.play();    
      this.activatePad();
      this.props.updateDisplay(this.props.id.replace(/-/g, ' '));
      setTimeout(() => this.deActivatePad(), 500);
      
    }
    
    render() { 
      return(
        <div id={this.props.id} 
          onClick={this.playSound} 
          className="drum-pad"
          style={this.state.padStyle}>
          <div id={this.props.id}>
            <audio className='clip' id={this.props.keyTrigger} src={this.props.url}></audio>
            {this.props.keyTrigger}
          </div>
        </div>
      )
    }
  }

  export default DrumPad;