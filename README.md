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

