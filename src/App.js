import React from 'react';
import './App.css';
import Square from './Square';

function App() {
  return (
    <div className="App">
      <h1>Tuesday Test</h1>
      {/* Render Square and give a `this.props.size`, `this.props.border` and `this.props.color` */}
      <Square size={100} border="3" color="red" />
      <Square size={30} border="0" color="black" />
    </div>
  );
}

export default App;
