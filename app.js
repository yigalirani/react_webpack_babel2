import React from 'react';
import ReactDOM from 'react-dom'
import {Label} from './widgets.js'

function App(){
  return <Label>hello react</Label>
}
ReactDOM.render(<App />,document.querySelector('#root') );
