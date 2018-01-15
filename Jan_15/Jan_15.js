// single line comment

/*
	
	multi-line comments

*/

var str = "This is a sting";

console.log(str.length);

console.log(str.indexOf('is a'));

console.log(str.concat(' hello'));

console.log(str.split(''));

console.log(str.slice(3, 6));

UStr = str.toUpperCase();
console.log(str.toUpperCase());

console.log(UStr.toLowerCase());

//functions

function outer_function(/*parameters*/){
	//function body | expressions
	return function inner_function(){
		return 'helllo';
	}
}

var assigned = outer_function;
var assigned2 = assigned();
var assigned3 = assigned2();

// console.log(assigned);
// console.log(assigned2);
// console.log(assigned2ned3);

// anonymous function

var any = function(){
	console.log('I am an anonymous function');
}

any();

// IIFE - Immediately invoking function expression | Self-invoking function
(function(){
	console.log('I am an IIFE');
})();


//callbacks

function callback(name){
	console.log('>>2<< Received name is: ', name);
}

function consume(callback_function){
	console.log('>>1<< Consume called');
	callback_function('nitin');
	console.log('>>3<< callback complete');
}

// consume(callback);

consume(function(name){
	console.log('>>2<< Received name is: ', name);
});

var testStr = 'hello this is a test string';

//setTimeout(callback, time) 1000 = 1sec
setTimeout(function(){console.log('setTimeout called')}, 3000);

//promises
var myPromise = new Promise(function(resolve, reject){
	if(testStr == 'hello this is a test string'){
		setTimeout(function(){
			resolve('response from resolve');
		}, 3000);
	} else{
		setTimeout(function(){
			reject('Promise iis rejected');
		}, 2000);
	}
});
//then - if promise is resolved, catch - if promise is rejected

myPromise.then(function(res){
	console.log(res,', then is called');
}).catch(function(err){
	console.log(err,', catch is called');
});


//events
var eventNumber = 10;
function callFunction(){
	console.log(eventNumber);
}

var para = document.getElementById('mypara');

// element.addEventListener('eventname', callback)
para.addEventListener('mouseenter', function(event){
	event.target.style.backgroundColor = "red";
	event.target.innerHTML = "Test changed";
});
para.addEventListener('mouseleave', function(event){
	event.target.style.backgroundColor = "transparent";
	event.target.innerHTML = "Test reveresed";
});

// window.alert('hello')

console.log(para.hasAttribute('id'));

para.setAttribute("style", "font-size: 30px; background-color:yellow")