import Buttons from 'components/Buttons';
import Display from 'components/Display';
import React from 'react';

const Calculator = () => {

    return (
       <div className='calculator rounded-xl'>
        <Display/>
        <Buttons/>
       </div>
    )
}


export default Calculator;