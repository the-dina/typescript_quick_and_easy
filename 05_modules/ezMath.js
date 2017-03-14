System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var operators, functions, pi;
    return {
        setters: [],
        execute: function () {
            operators = (function () {
                function operators() {
                }
                operators.times = function (x, y) {
                    return x * y;
                };
                return operators;
            }());
            exports_1("mathOperators", operators);
            functions = (function () {
                function functions() {
                }
                functions.power = function (x, y) {
                    return Math.pow(x, y);
                };
                return functions;
            }());
            exports_1("mathFunctions", functions);
            exports_1("pi", pi = Math.PI);
            exports_1("default", {
                pi: pi,
                operators: operators,
                functions: functions,
            });
        }
    };
});
