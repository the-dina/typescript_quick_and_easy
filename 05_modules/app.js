System.register(["./products", "./users", "./ezMath"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var products_1, userManager, ezMath_1, testThings;
    return {
        setters: [
            function (products_1_1) {
                products_1 = products_1_1;
            },
            function (userManager_1) {
                userManager = userManager_1;
            },
            function (ezMath_1_1) {
                ezMath_1 = ezMath_1_1;
            }
        ],
        execute: function () {
            testThings = function () {
                console.log("Number of products: " + products_1.productReporter.remainedProductsNumber());
                products_1.productEmailSender.emailTheBigBoss();
                var users = userManager.userHelper.getAll();
                for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
                    var user = users_1[_i];
                    console.log(user.name);
                }
                console.log("10 Times 2: " + ezMath_1.default.operators.times(10, 2));
                console.log("10 Power 2: " + ezMath_1.default.functions.power(10, 2));
            };
            document.getElementById("testBtn").addEventListener("click", testThings);
        }
    };
});
