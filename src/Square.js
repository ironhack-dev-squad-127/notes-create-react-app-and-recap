import React, { Component } from 'react';

// Definition of a Square component
// We can reuse this component inside other components by writing:
// At the top: 
//   import Square from './Square'
// Inside a JSX
//   <Square />
class Square extends Component {
  render() {
    console.log("The square is rendered!")
    let style = {
      border: this.props.border+"px solid black",
      backgroundColor: this.props.color,
      width: this.props.size,
      height: this.props.size,
    }
    return <div style={style} />
  }
}

export default Square;
