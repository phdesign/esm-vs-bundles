import { ES6_MODULES } from './module.js';
import { fromEvent } from 'rxjs';

const sayHi = () => `Hi from ${ES6_MODULES}`;
const result = document.querySelector('.result');
result.innerText = sayHi();

fromEvent(document.getElementById('hello'), 'click')
    .subscribe(() => result.innerText = "Hello");
