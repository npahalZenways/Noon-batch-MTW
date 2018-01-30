function click123(){
	console.log('button is clicked')
}

var div = document.getElementById('myDiv');
div.addEventListener('mouseenter', function(event){
	event.target.innerHTML = "Hi this is dynamic content";
	event.target.style.backgroundColor = 'blue';
	event.target.style.color = 'white';
});

div.addEventListener('mouseleave', function(event){
	event.target.innerHTML = "This is my div";
	event.target.style.backgroundColor = 'transparent';
	event.target.style.color = 'black';
});

console.log(x);

//Declarations are always hoisted
//Initializations are never hoisted

var x = 10;

var arr = [9,8,7,6,5,4,3,2,1];

console.log(arr.length) ///returns length of the array

//return type if an index
console.log(arr.indexOf(4));

//slice(starting index, ending index),
//returns a new array in which starting index is included and ending index is excluded

// var newArr = arr.slice(3,7)
// console.log(newArr, arr);

//splice(starting index, number of deletions)
// var newSplicedArr = arr.splice(5, 2)
// console.log(newSplicedArr, arr);
//arr.splice(4, 1, 'hello');

//push
//returns new length
// console.log(arr.push(0))

//pop
//return element deleted
// console.log(arr.pop());

//unshift
// console.log(arr.unshift(20));

//shift
// console.log(arr.shift());

// arr.forEach(function(iteratedValue, index, array){
// 	console.log(iteratedValue, index, array);
// })

// arr.filter(function(item){
// 	return item%2 == 0;
// })

// arr.reduce(function(sum, item){
// 	return sum + item;
// }, 5)

// arr.map(function(item){
// 	return item *2;
// })

var str = 'Hello my string';
str.length;

str.indexOf(' my');

str.slice(2,4);

str.concat('hello');

str.split(' ');

str.toUpperCase();
str.toLowerCase();


function function_name(/*function parameters*/){
	//expressions;
	return function inner_function(){
		return 'hello';
	}
}

//anonymous function
var x = function(){

};

//IIFE - Immediately invoking function expression

(function(){
	console.log('Hi this is IIFE')
})();

var functionVariable = function_name;
var inner = functionVariable();
var val = inner();

//callbacks

function myCallback(res){
	console.log('This is a callback function', res);
}

function consume(param){
	console.log('Callback started');
	param('12345');
	console.log('Callback ended');
}

consume(myCallback);
consume(function(item){
	console.log('anonymous param: ', item)
})

//Promises

var myPromise = new Promise(function(resolve, reject){
	if(false){
		resolve('hello');
	} else{
		reject('bye');
	}
});

myPromise.then(function(res){
	console.log(res)
}).catch(function(res){
	console.log(res);
});

