var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function setSkill(target) {
    target.prototype.skill = 'front-player';
    console.log("target is: ", target);
}
let player = class player {
};
player = __decorate([
    setSkill
], player);
var footballPlayer = new player();
console.log(footballPlayer.skill);
function mySkill(param) {
    return function (target) {
        target.prototype.skill = param;
    };
}
let cricketer = class cricketer {
};
cricketer = __decorate([
    mySkill('bowling')
], cricketer);
var play = new cricketer();
console.log('parameterized decorator working: ', play.skill);
//# sourceMappingURL=Jan_17_2.js.map