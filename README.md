# Notes

## Commands

```sh
# To start the project
$ npm start

# To run the tests and check if the App component is working
$ npm run test

# To create a "/build" folder with a regular frontend project (index.html + CSS + JS)
$ npm run build


```


## Square component

```js
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
```