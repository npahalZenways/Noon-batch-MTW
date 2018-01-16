var phone: number;
var names : string;
var isTrue : boolean;
var array : [number];
var strArray : [string];
var mix : [number | string] = [1];
mix.push(1);
mix.push('hgfd');
var tup : [number, string, number, boolean] = [1, '', 1, true];
var obj : object;
var test : any = 1;
var col : [string] = ['Red', 'Green', 'Blue'];

enum Color {Red = 5, Green = 6, Blue = 3};
var c : Color = Color.Green;
console.log(c);
var c1 = Color[5];
console.log(c1);

function my_function(param:number):any{
	if(param == 10){
		return true;
	} else {
		// return false;
	}
}

my_function(765);

// unions
function return_padding(padding: number | string):string{
	if(typeof padding == 'number'){
		return padding + 'px';
	}
	if(typeof padding == 'string'){
		return padding;
	}
}

console.log(return_padding(10));
console.log(return_padding('15px'));

