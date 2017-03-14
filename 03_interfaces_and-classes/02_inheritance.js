var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = (function () {
    function Person(name) {
        this.money = 10;
        this.name = name;
    }
    Person.prototype.getMoney = function () {
        return this.money;
    };
    return Person;
}());
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, salary) {
        var _this = _super.call(this, name) || this;
        _this.salary = 0;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.getMoney = function () {
        return _super.prototype.getMoney.call(this) + this.salary;
    };
    Employee.prototype.checkAccess = function () {
        this.money = 100;
        this.name = "";
    };
    return Employee;
}(Person));
var emp1 = new Employee("Bill Gates", 1000000);
emp1.name = "Satya Nadella";
console.log(emp1.name + " " + emp1.getMoney()); // result: "Satya Nadella 1000010"
