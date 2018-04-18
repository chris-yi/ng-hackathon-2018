import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {

   sendText = async (e) => {
    console.log(" here is the message", this.refs.text.value ) 
    this.refs.text.value = "";
  }
  onEnter = (e) => {
    if(e.which === 13){
      this.sendText()
    }
  }

  render() {
    return (
      <div>
        <div className="text-display-container">
        </div>
        <div className="text-input-container">
            <input type="text" className="text-input" ref="text" onKeyPress={this.onEnter}/>
            <button onClick={this.sendText}>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
