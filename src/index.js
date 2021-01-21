import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld01 from './hello/HelloWorld01';
import HelloWorld02 from './hello/HelloWorld02';
import VolymeControl from './volymecontrol/VolumeControl';

const app = 

<div>
    <VolymeControl min={0} max={100} startVolume={50} step={5}/> 
    <VolymeControl min={20} max={30} startVolume={25} step={1}/> 
</div>


ReactDOM.render(app,document.getElementById('root'));

{
    












/* <div>
    <h1>Hello</h1>
    <HelloWorld01 />
    <HelloWorld01 />
    <HelloWorld02 />
</div> */}


//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
