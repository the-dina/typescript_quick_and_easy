var test_for_of_loop = function () {
    var iterable = [3, 5, 7];
    iterable.arrayOwner = 'Angelina_Jolie';
    console.log("for in loop");
    for (var i in iterable) {
        console.log(iterable[i]);
    }
    console.log("for of loop");
    for (var _i = 0, iterable_1 = iterable; _i < iterable_1.length; _i++) {
        var i = iterable_1[_i];
        console.log(i);
    }
};
