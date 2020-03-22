import React from 'react';
import DrumPad from './DrumPad'


class DrumBox extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      const drums = this.props.drumset.map((i) => {
        return(
          <DrumPad
            id={i.id}
            url={i.url}
            keyTrigger={i.keyTrigger} 
            keyCode={i.keyCode}
            updateDisplay={this.props.updateDisplay}/>  
          )
        
      });       
        
      return(
        <div className="Drumbox">
          {drums}        
        </div>
      )
    }
  }

  export default DrumBox;