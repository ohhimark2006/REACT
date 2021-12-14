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


===

6) Async and Await
	
	Promise API leads to Callback hell

	first().then(
		() ==> second(),
		() ==>
	).then(
		() ==> third(),
		() ==>
	).then(
		() ==> fourth,
		() ==>
	)

Promise based Fetch:
fetch("https://jsonplaceholder.typicode.com/users/2")
.then( response => response.json())
.then(data => console.log(data));

converted to async/await:

async function doTask() {
		let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
		let data = await response.json();
		console.log(data);
}

doTask();

=============

7) String template literal ``


var name = "Smith";

var msg = `
	Welcome ${name} to React Training,
	JavaScript Stacks

`


===

var msg = "Welcome " + name + " to React Training" 

===

8) Classes, interface and ES 6 module System ==> Webpack


============================================================================================

Node JS

https://nodejs.org/en/download/

What is nodeJS?
Platform with V8 JS engine and libuv C++ libraries

Where can i use NodeJS
1) to build APIs [ RESTful web services , GraphQL] espiceially when used with NoSQL like MonogDB
2) Realtime applications like ChatBot / Admin Dashboard
3) Streaming API like OTT platform ==> Netflix / Prime / HotStar
4) Building client side web applications [ we are using this feature]

4.1) Write code in "TypeScript / LiveScript / CoffeeScript / DART / ES 6+" and transcompile/ transpile to ES5 or lower version
which is understood by most of the browser

TypeScript

let name:string = "Banu"

4.2) Code minify and uglify

4.3) Bundle
	a.js
	b.js
	c.js

	Network call for index.html
	network call to load "a.js"
		<script src="a.js"></script>
	network call to load "b.js"
		<script src="b.js"></script>
	network call to load "c.js"
		<script src="c.js"></script>
	network call to load "d.js"
		<script src="d.js"></script>

		==> bundle.js

	<script src="bundle.js"></script>

4.4) Static Code analysis [Linting]
4.5) Testing ==> unit testing and E2E

===============================================



JavaScript Build Tools to be used on NodeJS platform
1) Grunt
Grunt is a JavaScript task runner, a tool used to automatically perform frequent tasks such as minification, compilation, unit testing, and linting
2) Gulp
3) Rush
4) Webpack

=======================

Webpack
webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, ...

Most of the modern JavaSCript frameworks and librarires are using Webpack as the default bundler [ comming with scaffolding code generator]

Angular:
ng new sampleapp

React:
npx create-react-app sampleapp

===============

NPM / YARN ==> Node Package Manager
* manage dependencies [ 3rd party moduels/libraries has to be download from repo]
* publish the module to repo
* run scripts

==============

Sample Webpack application:

1)

webpackexample> npm init -y

creates package.json [ one per project]

==> place where scripts and dependencies are configured like [pom.xml of maven]

2) install dependencies/ modules for the project
	some modules like "fs", "http", "crypto", "path" , are avaialble as default with nodejs

	npm install webpack webpack-cli -D


 -D we need the modules only for development stage and not in production

 "devDependencies": {
    "webpack": "^5.65.0",
    "webpack-cli": "^4.9.1"
  }

~5.65.0 ==> any version which has major version "5", minor and patch can be latest


^5.65.0 ==> any latest version greater than "5"

all downloaded dependencies will be in "node_modules" folder

===

other team members download the project:
and execute:

npm install

==============================

 "scripts": {
    "dev" : "webpack --mode development",
    "prod" : "webpack --mode production"
  }

  npm run dev

  check dist/main.js

  --

  npm run prod

  check dist/main.js  

 ===============


 src/index.html

 HtmlWebpackPlugin
 npm install html-webpack-plugin -D

The HtmlWebpackPlugin simplifies creation of HTML files to serve your webpack bundles [main.js as of now]. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation

Automate:
<script src="main.js"></script>

======================
CommonJS module system: 
require is to import

webpack.config.js

const HtmlWebPackPlugin = require('html-webpack-plugin'); // we installed
const path = require('path'); // builtin nodejs module

module.exports = {
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}


====

src / style.css

npm i css-loader style-loader -D

const HtmlWebPackPlugin = require('html-webpack-plugin'); // we installed
const path = require('path'); // builtin nodejs module

module.exports = {
    module: {
        rules: [
            {
                test :/\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ]
}


==

index.js

import "./style.css"

===
 
=====================

npm i webpack-dev-server -D

webpack-dev-server can be used to quickly develop an application

Real time: we build the assets [ html / bundle / css ] and deploy it
on web server ==> Apache / IIS / NginX

 "start": "webpack serve --open --mode production"

 npm start
==========

using ES6 in webpack projects

npm i -D @babel/core babel-loader @babel/preset-env


babel-loader ==> similar to css-loader but loads files with "js" extension

@babel/core ==> transpiler ==> transcompile 

@babel/preset-env ==> Polyfills

ES 6 module system:
export, import

CommonJS module System:

lib.js
module.exports = function add() {}

require('../lib');


babel.config.json ==> babel config 
or
.babelrc

===

Dependency required in Production also:

npm i lodash

===================

main.js file bloats ==> leading to FCP issues

===

optimization:
1) create multiple chunks
	main.js [ all my code here]
	bundle.js [ any module from node_modules]
	...
2) lazy loading
	Product module
	Cart module
	Customer Module
	payment module

==============

Day 1: HOF, ES 6, NodeJS and Webpack

Day 2

Server Side Rendering and Client Side Rendering

SSR templates
1) PHP
2) JSP / Thymeleaf
3) JS ==> EJS/ Pug / Jade / Handlebars / Mustache
4) ASP / ASP.NET

CSR:

JavaScript templates:
1) jQuery
2) Handlebars #list / Mustache {{ name }}
3) Frameworks: Backbone, Angular , CanJS
4) View Libraries : REACT

SPA ==> Single Page Application ==> one HTML but many views
Challenges in building SPA:
1) data binding ==> one way binding or two way binding
2) Dependency management
3) Router 
	index.html

	http://cisco.com/products
	http://cisco.com/customers
	http://cisco.com/locations

	http://amazon.com/mobiles/
	http://amazon.com/mobiles/iPhone12
	http://amazon.com/mobiles/Pixel4
	http://amazon.com/tv
	http://amazon.com/tv/SonyBravia

	http://amazon.com/cart

	Advantanges:
	a) Navigation between views instead of pages
	b) Bookmark
	c) Security
	d) Lazy Loading
		mobiles.chunk.js
		tv.chunk.js
		cart.chunk.js

========

BackboneJS ==> MVC Framework

Model ==> data
View ==> Presentation
Controller => Locus between View and Model

========

Angular ==> MVC Framework [ MVVP]

Angular 1.x ==> 1.6
Angular 2.x ==> 11 version
	==> Component, Directives, Service, Guards, Routers, Interceptor, Http ..

==================================

REACT ==> View Library
	Component , Routers

	3rd Party:
	State Management: Redux / Mobx / flux
	API calls: fetch / Axios / Request

==============================================
React in CodePen:

Babel as Preprocessor

Libraries:
https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js

https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js

===

let Welcome = React.createElement("h1", {style:{'color': 'red'}}, "Welcome to React");

console.log(Welcome);

ReactDOM.render(Welcome, document.getElementById("root"));

==

Document Object Model


==================================

Reconcillation ==> ReactDOM.render()

Runs Diff algorithm on VDOM

const diffs = [
	{
		newnode: { /* new version of data */},
		oldnode: { / * orignal content * /},
		index: 2
	},
	{
		newnode: { /* new content */},
		index: 6
	}
]



===========

Functional Components

function Welcome() {
  return <div>
        	<h1>Welcome to React!!!</h1>
         	<h3>Virtual ClassRoom sessions </h3>
         </div>
}

Functional components returns JSX ==> JavaScript XML

React.createElement("div", null , React.createElement("h1", null, "Welcome to React!!1"));

===
props ==> parent passing data to child

function Welcome(props) {
  return <div>
        <h1>{props.title}</h1>
         <h3>{props.where}</h3>
    </div>
}
 
ReactDOM.render(<Welcome title="Welcome to React" where="Virtual ClassRoom" />, document.getElementById("root"));


===
Deconstructing props:

function Welcome({title, where}) {
  return <div>
          <h1>{title}</h1>
          <h3>{where}</h3>
    </div>
}

===

var data = [
    		{"id":1,"name":"iPhone","price":124447.44,"category" : "mobile"},
    		{"id":2,"name":"Onida","price":4444.44,"category" : "tv"},
    		{"id":3,"name":"OnePlus 6","price":98444.44,"category" : "mobile"},
    		{"id":4,"name":"HDMI connector","price":2444.00,"category" : "computer"},
      		{"id":5,"name":"Samsung","price":68000.00,"category" : "tv"}
      	];


function ProductList({title, products}) {
	return <div>
		<h1>{title} </h1>
		{
			products.map( product => <Product product={product} />)
		}
	</div>
}

function Product({product}) {
	return <div>
			<h2>{product.name} </h2>
			<h3> {product.price}, {product.category} </h3>
			<hr/>
		</div>
}


ReactDOM.render(<ProductList title="Product List" products={data} />, document.getElementById("root"));

=====
older version:

npm i create-react-app -g

create-react-app customerapp

Now:

npx create-react-app customerapp

=================


React class components
1) state
2) behaviour

class Welcome extends React.Component {
	state = {
		count : 0
	}

	constructor(props) {
		super(props);
		// initialization
	}

	increment() {
		logic to increment count
	}

	render() {
		return <div>
 			...
		</div>
	}
}


What you return from functional component should be part of render()

=======================

Thinking in React

main.chunk.js ==> our components

vendor.chunk.js ==> node_modules 

bundle.js ==> react compiler, libraries


 delEvent ={this.deleteCustomer.bind(this)} 

 or

  delEvent ={(id) => this.deleteCustomer(id)}

  Don't use 

  delEvent ={this.deleteCustomer}  /* context is lost "this" is undefined

 ================

 customerapp> npm i cypress -D

 Resume @ 2:00

=============================

 
Unit testing JavaScript testing libraries:
1) Mocha 
2) Jasmine
3) Jest

Angular ==> Angular Test Bed is built using Jasmine

React Testing Library ==> built on JEST

==========

E2E testing
1) Cypress
2) Protroctor ==> Angular 
3) Selenium

===============


React Testing Library

AAA ==> Assemble Action Assert
// Test suite
describe("test suite for customer list", () => {

	// test spec
	it("delete customer", () => {
		// perform button click
		// assert that the customer is deleted
	});

	// test spec
	it("filter customers", () => {
		// perform change on text in  textbox
		// assert customers are deleted
	});

	// test spec
	test("render customers", () => {

	})
})

====

RTL utility methods to access components/dom elements

1) getByText(/Customer Application/i)

	<h1>Customer Application</h1>

	gets <h1> tag which contains "Customer Application"

2) getByPlaceHolderText("search by name")
  <input type="text" placeholder="search by name" onChange={(e) => props.filterEvent(e.target.value)}/>


3) getByRole("button")
	gets first occurence of <button>

fetching Multiple elements:
getAllByRole("..")
getAllByPlaceHolderText(..)
getAllByText();

======

getByXXX() ==> throws exception if not found
queryByXXX() ==> returns null if not found
findByXXX() ==> component created by Promise API

===

npm test

