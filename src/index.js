import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld01 from './hello/HelloWorld01';
import HelloWorld02 from './hello/HelloWorld02';
//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

const app = 

<div>
    <h1>Hello</h1>
    <HelloWorld01 />
    <HelloWorld01 />
    <HelloWorld02 />
</div>



ReactDOM.render(app,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
