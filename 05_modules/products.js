System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var productReporter, productEmailSender;
    return {
        setters: [],
        execute: function () {
            productReporter = (function () {
                function productReporter() {
                }
                return productReporter;
            }());
            productReporter.remainedProductsNumber = function () {
                return 10;
            };
            exports_1("productReporter", productReporter);
            productEmailSender = (function () {
                function productEmailSender() {
                }
                return productEmailSender;
            }());
            productEmailSender.emailTheBigBoss = function () {
                console.log("Report is emailed to big boss");
            };
            exports_1("productEmailSender", productEmailSender);
        }
    };
});
