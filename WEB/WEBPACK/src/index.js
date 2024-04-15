"use strict"

// import'./index.css'cls

// import $ from "jquery";



// import'./index.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

// write bootstrao for eslint
bootstrap

import "./register/register.js"
import "./products/product"
// Import all of Bootstrap's css
// import 'bootstrap/dist/css/bootstrap.min.css'




import { Header } from "./components/header/Header.js"


window.customElements.define('header-component', Header)


import image from './images/ho.jpg'

const img = document.querySelector('img')
img.src=image;
console.log('kkk')
console.log(Math.pow(2,3))


