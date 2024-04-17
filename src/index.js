import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './views/Counter.jsx';
import reportWebVitals from './reportWebVitals';

let seconds = 0
setInterval(() => {
  const One = Math.floor((seconds / 1) % 10)
  const Two = Math.floor((seconds / 10) % 10)
  const Three = Math.floor((seconds / 100) % 10)
  const Four = Math.floor((seconds / 1000) % 10)
  const Five = Math.floor((seconds / 10000) % 10)
  const Six = Math.floor((seconds / 100000) % 10)
  seconds += 1

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Counter FirstDigit = {One} SecondDigit = {Two} ThirdDigit = {Three} FourthDigit = {Four} FifthDigit = {Five} SixthDigit = {Six} />
    </React.StrictMode>
    );
  }, 1000

) 



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
