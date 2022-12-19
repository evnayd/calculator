
import './App.css';
import React from 'react';
//import Calculator from 'components/Calculator';
import Buttons from 'components/Buttons';
import Display from 'components/Display';

function App() {
  return (
    <div className='calculator rounded-xl'>
    <Display/>
    <Buttons/>
   </div>
  );
}

export default App;
