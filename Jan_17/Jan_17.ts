function abc(param:number):number{
	return param;
}

// generics

function generic <T>(param : T) : T{
	return param;
}

generic<string>('');

generic<number>(1);


var numArray : Array<string>;

var nArray : [number];

export module myModule{
	export class student{
		studentName;
		constructor(){

		}
	}
	var amit = new student()
}

var amit = new myModule.student();

module myModule2{
	class school extends myModule.student {
		
		constructor() {
			super();
		}
	}
}










































// function setName(param){
// 	return function(target){
// 		target.prototype.studentName = param
// 		console.log('target: ', target.prototype.studentName)
// 	}
// }


// @setName('battig')
// class student{
// 	studentName : string;
// 	constructor() {
// 		// code...
		
// 	}
// }

// var nitin = new student();
// console.log(nitin.studentName)