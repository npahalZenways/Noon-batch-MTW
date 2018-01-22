function abc(param) {
    return param;
}
function generic(param) {
    return param;
}
generic('');
generic(1);
var numArray;
var nArray;
export var myModule;
(function (myModule) {
    class student {
        constructor() {
        }
    }
    myModule.student = student;
    var amit = new student();
})(myModule || (myModule = {}));
var amit = new myModule.student();
var myModule2;
(function (myModule2) {
    class school extends myModule.student {
        constructor() {
            super();
        }
    }
})(myModule2 || (myModule2 = {}));
//# sourceMappingURL=Jan_17.js.map