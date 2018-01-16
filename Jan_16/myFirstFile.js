var phone;
var names;
var isTrue;
var array;
var strArray;
var mix = [1];
mix.push(1);
mix.push('hgfd');
var tup = [1, '', 1, true];
var obj;
var test = 1;
var col = ['Red', 'Green', 'Blue'];
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var c1 = Color[5];
console.log(c1);
function my_function(param) {
    if (param == 10) {
        return true;
    }
    else {
    }
}
my_function(765);
function return_padding(padding) {
    if (typeof padding == 'number') {
        return padding + 'px';
    }
    if (typeof padding == 'string') {
        return padding;
    }
}
console.log(return_padding(10));
console.log(return_padding('15px'));
//# sourceMappingURL=myFirstFile.js.map