System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user, users, userHelper;
    return {
        setters: [],
        execute: function () {
            user = (function () {
                function user(name, monthlySalary) {
                    this.name = name;
                    this.monthlySalary = monthlySalary;
                    this.name = name;
                    this.monthlySalary = monthlySalary;
                }
                return user;
            }());
            exports_1("user", user);
            users = [
                new user("Ms. Dolphin", 8000),
                new user("Mr. Cat", 7500),
            ];
            userHelper = (function () {
                function userHelper() {
                }
                userHelper.getAll = function () {
                    return users.slice(); // a copy of original data
                };
                return userHelper;
            }());
            exports_1("userHelper", userHelper);
        }
    };
});
