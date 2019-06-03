// import React,{Component} from 'react'
// import ReactDOM from 'react-dom'

// ReactDOM.render(
//     <h2>我是react</h2>,
//     document.querySelector('#root')
// )

import './css/a.css'
import './less/a.less'
// import './sass/a.scss'
//import $ from 'jquery'

// $('#box').css({
//     width:'100px',
//     height:'100px',
//     background:'yellow'
// })

import {a,b, cc} from './js/a.js';

import imgSrc from './images/404.jpg';
console.log(cc);

let oImg =new Image();

oImg.onload = function(){
    document.body.appendChild(oImg);
};

oImg.src = imgSrc;