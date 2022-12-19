import React from 'react';

const Buttons = () => {

    return (
        <div className="buttons-wrapper flex justify-between flex-wrap md:px-2">
            <div className='w-full mb-4 mt-8 flex justify-around'>
        <button className="button"
        name="2" onClick={() => ''}>1</button>
        <button className="button"
        name="2" onClick={() => ''}>2</button>
        <button className="button"
        name="3" onClick={() => ''}>3</button>
        <button className="button"
        name="+" onClick={() => ''}>+</button>
        </div>

        <div className='w-full mb-4 flex justify-around'>
        <button className="button"
        name="4" onClick={() => ''}>4</button>
        <button className="button"
        name="5" onClick={() => ''}>5</button>
        <button className="button"
        name="6" onClick={() => ''}>6</button>
        <button className="button"
        name="-" onClick={() => ''}>-</button>
        </div>

        <div className='w-full mb-4 flex justify-around'>
        <button className="button"
        name="7" onClick={() => ''}>7</button>
        <button className="button"
        name="8" onClick={() => ''}>8</button>
        <button className="button"
        name="9" onClick={() => ''}>9</button>
        <button className="button"
        name="*" onClick={() => ''}>x</button>
        </div>

        <div className='w-full flex justify-around'>
        <button className="button"
        name="." onClick={() => ''}>.</button>
        <button className="button"
        name="0" onClick={() => ''}>0</button>
        <button className="button button--answer"
        name="=" onClick={() => ''}>=</button>
        <button className="button"
        name="/" onClick={() => ''}>÷</button>
        </div>
      </div>
    )
}


export default Buttons;