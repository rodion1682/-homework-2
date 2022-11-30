import './index.css';
import JS_IMAGE from './assets/js.png';

console.log('Hello World');

const jsImageHTML = document.createElement('img');
jsImageHTML.className = 'js-image';
jsImageHTML.src = JS_IMAGE;
const title = document.createElement('div');
title.textContent = 'I love JavaScript';

document.body.append(title);
document.body.append(jsImageHTML);