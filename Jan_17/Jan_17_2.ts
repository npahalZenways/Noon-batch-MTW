// import { myModule } from './Jan_17';
// import * as Jan_17_file from './Jan_17';

// var stu = new Jan_17_file.myModule.student();

// decorators

// decorator definition
function setSkill(target){
	target.prototype.skill = 'front-player';
	console.log("target is: ", target);
}

// class decorators
@setSkill
class player{
	skill: string;
}

var footballPlayer = new player();

console.log(footballPlayer.skill);

function mySkill(param){
	return function(target){
		target.prototype.skill = param;
	}
}

@mySkill('bowling')
class cricketer{
	skill;
}

var play = new cricketer();
console.log('parameterized decorator working: ', play.skill)