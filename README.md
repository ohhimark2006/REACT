# REACT

Banuprakash C

Full Stack Architect,

Co-founder Lucida Technologies Pvt Ltd.,

Corporate Trainer,

Email: 

banu@lucidatechnologies.com; 

banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/

GitHub: https://github.com/BanuPrakash/REACT

-------------------------------------------------------------
Softwares Required:
1) Chrome Web browser with following extensions
	1.1) add React Developer tools [ https://chrome.google.com/webstore/search/react Search : react]
	1.2) add Redux DevTools [ https://chrome.google.com/webstore/search/redux Search : redux]
2) Visual Studio Code [ https://code.visualstudio.com/ ]
3) NodeJS Latest LTS [ https://nodejs.org/en/download/ ]

===============================================================

JS Recap; Functional Style of Programming; ES 6 features; NodeJS

3 days React

=========================

JavaScript 
Scripting language ==> JIT ; loosely typed language; event loop based

var keyword to declare a variable

var name = "Tim"; 

name.toUpperCase();

var age = 30;
age++;

number, boolean, String, Object, undefined, null, array


var employeed = true;

var test; // undefined


var person = null;


var data = [5,2,5,11];

=================

JavaScript engines
V8 ==> Google ==> Chrome, nodeJS

JavaScriptCore ==> Safari

SpiderMonkey ==> FireFox

Chakra ==> IE

NashHorn ==> Oracle / Java

===========
ECMA Version 5 ==> ES 5

file.js

var g = 100; // global variable

function doTask() {
	var a = 10; // local variable
	if(g > a) {
		var b = 20;
		c = 30;
	}
	console.log(g, a, b, c);
}

doTask();

console.log(g, a, b, c);


===========================

function add(x, y) {
	return x + y;
}

var result = add(4,5); // 9

==============


function add(x, y) {
	return 
		x + y;
}

var result = add(4,5); // undefined

=======================================

Event Loop and Callbacks

console.log("Hello!!");


$("#btn").click(function clicked() {
	console.log("You Clicked!!!");
});

setInterval(function timed() {
	console.log("interval!!!")
}, 100);


console.log("Bye!!");

===

setInterval(function timed() {
	fetch("http://server.com/users"). ...
}, 100);

==========================

Functional Style of Programming
uses High Order Functions:
1) function accepting function as arguments
2) function returning a function

treat function as first class members similar to primitive or object

var data = [5,2,6,23,77];

for(i = 0; i < data.length; i++) {
	console.log(data[i]);
}

for(i = 0; i < data.length; i++) {
	alert(data[i]);
}

===

var elems = ["Hello","Have" , "a ", "nice", "Day"];
var numbers = [5,2,6,23,77];

// HOF
function forEach(data, action) {
	for(i = 0; i < data.length; i++) {
		action(data[i]);
	}
}

forEach(elems, console.log);
forEach(elems, alert);
forEach(numbers, alert);

===========

Commonly used HOF:
1) map ==> to transform data
2) filter ==> subset
3) reduce ==> aggregate [sum(), avg, count()]
4) forEach
5) limit
6) skip
7) flatMap

 

HOF: function returning a function

function greeting(name, msg) {
	return msg + " " + name;
}

greeting("Raj", "Good morning");
greeting("Rita", "Good morning");
greeting("Rajeev", "Good morning");

greeting("Raj", "Good Day");

==

function greeting(msg) {
	return function(name) {
		return msg + " " + name;
	}
}

var morningGreet = greeting("Good morning");

morningGreet("Sita"); // msg will be a part of Closure
morningGreet("Harry"); // msg will be a part of Closure

==

If an outer function returns a function; the returned function has access to all the members of outer function
==> refered as closure

function adder(base) {
	return function(no) {
		return base + no;
	}
}

var fiveAdder = adder(5); // base value is 5

fiveAdder(2); // 7
fiveAdder(3); // 8

var tenAdder = adder(10); // base value is 10;

tenAdder(3); // 13

tenAdder(5); // 15


==============

HOF with CLosure for Memoize design pattern [ React.memo()]

It comes from the functional language and is used to remember the result of the function


getEmployee(5); JS ==> RESTAPI call ==> Spring Boot ==> MySQL ==> returnred value ==> json and send to client

getEmployee(5); ==> should get from cache [ memoized]


=========================================================


OOP with JS

Object has state and behaviour

1) Constructor pattern

function Product(name, price) {
	this.name = name; // state of object
	this.price = price; // state of object
}

// adding behaviour / action / methods

Product.prototype.getName = function() {
	return this.name;
}

Product.prototype.setName = function (n) {
	this.name = n;
}

var p1  = new Product("iPhone", 98000.00); // p1 is a object of type Product
var p2 = new Product("LG Nano Cell", 68000.00); // p2 is a object of type Product

p1.getName() ; // iPhone

p2.getName();

getName(); // window will be the default context

2) JSON {}
JavaScript Object Notation

var p = {}; // p is a object

var p =  { "id":5, "name":"Samsung", "price":68000.00, "category" : "tv"};


p.id ; // 5
p.name; // Samsung


3) 
var obj = new Object();
obj.name = "Peter";
obj.age = 22;

=======================

var book = {
	price: 560.00
}

var p = {
	"name": "iPhone",
	"price" : 98000.00,
	getPrice: function() {
		return this.price;
	}
}

p.getPrice();

var ref = p.getPrice; // get function definition but context is lost

ref(); // undefined

var cref = p.getPrice.bind(p); // 98000

var nref = p.getPrice.bind(book); // 560

=============================================

ES 2015 ==> ES 6 version ==> ECMA JavaScript Version


https://caniuse.com/

Write code in ES 6 or ES Next then transcompile to ES5 or lower version 

Babel
Babel is a free and open-source JavaScript transcompiler that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript 

Traceur is a JavaScript.next-to-JavaScript-of-today compiler that allows you to use features from the future today.

======================

Features of ECMA 2015 / ES 6

1) Block level scope [ let and const]


var g = 100; // global variable
const PI = 3.14159 ; // constant

function doTask() {
	var a = 10; // local variable
	if(g > a) {
		let b = 20; // not hoisted to function scope
		c = 30;
	}
	console.log(g, a, b, c); // b is not visible
}

doTask();

console.log(g, a, b, c);

===

2) Arrow Functions

let add = (x,y) => x + y;

same as 

function add(x,y) {
	return x + y;
}

Arrow Functions uses the calling context 
Don;t use arrow functions as object methods



var p = {
	"name": "iPhone",
	"price" : 98000.00,
	getPrice: () => {
		return this.price;
	}
}

p.getPrice(); // undefined because called in global context

======



var p = {
	"name": "iPhone",
	"price" : 98000.00,
	getPrice: () => {
		return this.price;
	},
	doTask: function () {
		setTimeout(() => {
			console.log(this.price); // picks "p" as context
		}, 100);
	}
}

p.getPrice(); // undefined because called in global context; window


p.doTask();

======================

3) Destructuring and spread operators [...]


var p =  { "id":5, "name":"Samsung", "price":68000.00, "category" : "tv"};


var {name, price} = p;

console.log(name);
console.log(price);

or in ES 5
console.log(p.name);
console.log(p.price);

---

var colors = ["red", "green", "blue", "orange"];

var [r,g,...others] = colors;


console.log(r) ; // red

console.log(others);  ["blue", "orange"]

ES 5:
console.log(colors[0]);
console.log(colors[1]);

=========

4) Clone


var p =  { "id":5, "name":"Samsung", "price":68000.00, "category" : "tv"};

var ref = p; // refernece and not a clone

ref.name = "Oppo";

p.name; // Oppo


var cpy = {...p}; // clone
cpy.price = 9999;

===

var data = [6,3,2];

var ref = data; // reference and not a copy

ref[0] = 999; // will change data also

var ref = [...data]; // clone of array
ref[0] = 999; // wont change data


============================

5) Promise API for Asynchronous functions

function doTask() {
	some async operations will return Promise
}

Promise is one which returns Future result [ could be resolved or rejected]

doTask().then(
	(data) => console.log(data), // resolved
	(err) => console.log(err) // rejected
)
console.log("not blocked");


==

var result = doTask(); // non Promise based functions which are synchrounous
console.log("blocked");

===

Aggregator Application like MMT , HolidayIQ 
accumulate travel quotes from REdFox, Taj Vivanta, Ginger and give pricing





