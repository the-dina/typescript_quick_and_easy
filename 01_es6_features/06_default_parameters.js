var test_default_parameters = function () {
    var getNumbers = function (reversed) {
        if (reversed === void 0) { reversed = false; }
        var result = [1, 2, 3, 4, 5];
        return reversed ? result.reverse() : result;
    };
    console.log("numbers");
    console.log(getNumbers());
    console.log("numbers reversed");
    console.log(getNumbers(true));
};
