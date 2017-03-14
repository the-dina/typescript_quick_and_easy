var test_destructuring = function () {
    var theArray = [1, 2, 3];
    var a = theArray[0], b = theArray[1], c = theArray[2];
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    var x = 100;
    var y = 200;
    _a = [y, x], x = _a[0], y = _a[1];
    console.log("x: " + x);
    console.log("y: " + y);
    var person = { name: 'Obama', age: 38 };
    var v1 = person.name, v2 = person.age;
    console.log("v1: " + v1);
    console.log("v2: " + v2);
    var _a;
};
