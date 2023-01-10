import React from 'react';
import Buttons from 'components/Buttons';
import Display from 'components/Display';
export const AppContext = React.createContext<number | any>('');

function App() {
  const [firstNumber, setfirstNumber] = React.useState<number  |  string>('');
  const [secondNumber, setsecondNumber] = React.useState<number  |  string>('');
  const [operator, setOperator] = React.useState<number  |  string>('');
  return (
    <AppContext.Provider 
    value={{firstNumber, setfirstNumber, secondNumber, setsecondNumber, operator, setOperator  }}
    >
      <div className='calculator rounded-xl'>
    <Display/>
    <Buttons/>
    </div>
    </AppContext.Provider>
  );

}

export default App;
