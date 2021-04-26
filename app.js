import React from 'react';
import ReactDOM from 'react-dom'
import {Label} from './widgets.js'


function App(){ //probably should consolidate some of these state variables
  return <Label>hello react</Label>
}
ReactDOM.render(<App />,document.querySelector('#root') );
