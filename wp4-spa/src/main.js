let modA = require('@/utils/a');

// let modB = require('./utils/mod/mod2/b');
// console.log('$',$)
// console.log('modB',modB)

// require('style-loader!css-loader!./assets/css/a.css')
require('@/assets/css/a')

import b from '@/utils/mod/mod2/b'

import bg from './assets/images/bg.jpg'
let img = new Image();
img.src=bg;
document.body.appendChild(img)

import userBj from './assets/images/userBj.png'
let img2 = new Image();
img2.src=userBj;
document.body.appendChild(img2)

import cannon from './assets/mp3/cannon.mp3'
console.log(cannon)

let audio = new Audio()
audio.src=cannon;
audio.play()

let app = document.getElementById('app');
app.innerHTML = modA.html

