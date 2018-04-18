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
          <form>
            <input type="text" className="text-input" />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
