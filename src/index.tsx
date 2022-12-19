import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export {default as Buttons} from 'components/Buttons';


const root = ReactDOM.createRoot(document.getElementById('root')!);
console.log('root', root)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

console.log('typescript is here 2022');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

