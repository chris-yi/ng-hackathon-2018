import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="text-display-container">
        </div>
        <div className="text-input-container">
            <input type="text" className="text-input" />
            <div className="emoji-container"></div>
            <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
