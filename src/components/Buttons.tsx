import React, {useContext} from 'react';

import { AppContext } from "../App";

const Buttons = () => {
    const { setfirstNumber, firstNumber, setsecondNumber, secondNumber, operator, setOperator} = useContext(AppContext);
    function clearDisplay() {    
        setfirstNumber('')
        setsecondNumber('')
        setOperator()     
     }
    
    function getNumber(target: any) {  
        if (!operator) {  
       setfirstNumber(target.value)
       let newNum =  Number(firstNumber + target.value)
       setfirstNumber(newNum)  
        }
       if (operator) {
        setsecondNumber(target.value)  
        let newNum =  Number(secondNumber + target.value)
        setsecondNumber(newNum)  
       }
    }
     
    function getOperator(target: any) {    
        setOperator(target.value) 
     }

     function getResult() {  
       if (operator === '+'){      
        const result  = firstNumber + secondNumber
        setfirstNumber(result)    
       }
       if (operator === '-'){     
        const result  = firstNumber - secondNumber
        setfirstNumber(result)
        }
       if (operator === '*'){     
        const result  = firstNumber * secondNumber
        setfirstNumber(result)
            }
       if (operator === '÷'){     
        const result  = firstNumber / secondNumber
        console.log('result after /', result)
        setfirstNumber(result)
        }
        setsecondNumber('')
        setOperator('')
     }

    return (
        <div className="buttons-wrapper flex justify-between flex-wrap md:px-2">
            <div className='w-full mb-4 mt-8 flex justify-around'>
        <button className="button"
        value='1' onClick={(e)=> getNumber(e.target)}>1</button>
        <button className="button"
        value="2" onClick={(e)=> getNumber(e.target)}>2</button>
        <button className="button"
        value="3" onClick={(e)=> getNumber(e.target)}>3</button>
        <button className="button"
        value="+" onClick={(e)=> getOperator(e.target)}>+</button>
        </div>

        <div className='w-full mb-4 flex justify-around'>
        <button className="button"
        value="4" onClick={(e)=> getNumber(e.target)}>4</button>
        <button className="button"
        value="5" onClick={(e)=> getNumber(e.target)}>5</button>
        <button className="button"
        value="6" onClick={(e)=> getNumber(e.target)}>6</button>
        <button className="button"
        value="-" onClick={(e)=> getOperator(e.target)}>-</button>
        </div>

        <div className='w-full mb-4 flex justify-around'>
        <button className="button"
        value="7" onClick={(e)=> getNumber(e.target)}>7</button>
        <button className="button"
        value="8" onClick={(e)=> getNumber(e.target)}>8</button>
        <button className="button"
        value="9" onClick={(e)=> getNumber(e.target)}>9</button>
        <button className="button"
        value="*" onClick={(e)=> getOperator(e.target)}>*</button>
        </div>

        <div className='w-full flex justify-around'>
        <button className="button"
        value="0" onClick={(e)=> getNumber(e.target)}>0</button>
        <button className="button button--answer"
        value="=" onClick={()=> getResult()}>=</button>
        <button className="button"
        value="÷" onClick={(e)=> getOperator(e.target)}>÷</button>
        <button className="button"
        value="." onClick={()=> clearDisplay()}>C</button>
        </div>
      </div>
    )
}


export default Buttons;