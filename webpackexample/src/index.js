import "./style.css"
import Person from './Person';
import {add, sub} from './lib';
import _ from 'lodash';

console.log("Hello Webpack!!!");

console.log(add(4,5));
console.log(sub(4,5));

let p = new Person("Gopal", 34);

console.log(p.getName(), p.getAge());

console.log(_.join("Hello", "World" , "Webpack" , "example"));