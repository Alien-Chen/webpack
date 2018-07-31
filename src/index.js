import React,{Component} from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(
    <h2>ooooo</h2>,
    document.querySelector('#react')
    
)
import './css/a.css'
import './less/a.less';
import './sass/a.scss';
import {a,b,cc} from './js/a.js';
// import $ from 'jquery';
$('#box').css({
    width:'300px',
    height:'300px',
    background:'blue'
})
console.log(cc);
var oRoot = document.querySelector('#root');
oRoot.innerHTML = 'hello^_^ '