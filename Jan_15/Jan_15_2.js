
//constants
const name = 'nitni';

//rest parameters
function abc(...c){
	console.log(c);
}
abc(1,2,3,4,3,5,6,8,9,9,6,5,3,3);

//destructuring

var arr = [1,2,3,4];

var first = arr[0];
var second = arr[1];

var [frt,,,frtelement] = arr;

console.log(frt, frtelement)

//arrow functions
var arr_func = param => console.log(param);
arr_func('hello');

//multi-line string or string interpolation

var str = `
	djcvxh 
	shdvczx
`;

console.log(str)

console.log('first element is ', first, 'second element is ', second);
console.log(`first element is ${first} second element is ${second}`);

obj = {
	first: first,
	second: second
}

console.log(obj)

//property shorthand

obj1 = { first, second }
console.log(obj1);

//scope

if(true){
	var x = 10;
	let y = 20;
	console.log(x, y);
}
console.log(x, y) //throws error