var test_let_and_const = function () {
    const unchangeableValue = "Tax rate is 36%";
    console.log(unchangeableValue);

    for (var i = 1; i < 4; i++) {
        let inBlockVariable = i;
        console.log(inBlockVariable);
    }
};
