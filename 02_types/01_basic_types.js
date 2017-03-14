// number
var n = 17;
n = 0x11; // hex
n = 17; // binary
n = 17; // octal
// boolean
var b = true;
b = false;
b = !!(n); // n == 0 ? false : true
b = !!(null); // false
// string
var s = 'Hello buddy';
s = "Hello buddy";
s = "My number is " + n; // My number is 17
// undefined and null
n = undefined;
s = undefined;
b = undefined;
n = null;
s = null;
b = null;
// any
var a;
a = 2;
a = "string";
a = false;
// void
var v;
v = undefined;
v = null;
// array
var nArray = [1, 2, 3];
var sArray = ["Hi", "Hello", "Hey"];
var aArray = [1, "2"];
// tuple
var t = ["Malcolm Turnbull", 63, 507000];
t[1] = 62;
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var e = Color.Green;
e = 0;
n = Color.Red;
// object
var o = {
    name: "Obama"
};
var o2 = {
    name: "Obama"
};
