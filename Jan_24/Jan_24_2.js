//Difference es5 and es6
//constant

const owner_name = 'Amit';

// arrow functions
var func = name => console.log('myName: ', name);

func(owner_name);

//rest parameters

function myParams(...b){
	var abc = '10';
	console.log(b);
}

myParams(1,2,3,4,5,6,7);

//destructuring

var arr = [1,2,3,4];
var first = arr[0];
var second = arr[1];

[,,third, fourth] = arr;

console.log(third, fourth);

//spread operators

function printArray(array){
	console.log(array)
}
var o = [1,2, ...arr];
console.log(o)
printArray(arr)

//multi-line strings or string interpolation

var myStr = `
askdbcs
jszvxc
jszvxc
jszhxvc
`

console.log(`Third ele is: ${third},  fourth ele is: ${fourth}`);

//property shorthand

var oobj = {
	third,
	fourth
}

console.log(oobj);

//scoping
if(true){
	let abc = 10;
}