import React, {useContext} from 'react';
import { AppContext } from "../App";

const Display = () => {
    const {  firstNumber, secondNumber, operator} = useContext(AppContext);
    
    return (
        <div className='bg-white p-2 rounded-xl h-10 flex justify-between'>
        <div>{firstNumber} {operator} {secondNumber}</div>
        </div>
    )
}


export default Display;