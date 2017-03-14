let test_default_parameters = function () {

    let getNumbers = function (reversed = false) {
        let result = [1, 2, 3, 4, 5];
        return reversed ? result.reverse() : result;
    }

    console.log("numbers");
    console.log(getNumbers());

    console.log("numbers reversed");
    console.log(getNumbers(true));
}