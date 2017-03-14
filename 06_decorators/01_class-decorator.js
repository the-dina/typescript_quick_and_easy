var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logClass(originalConstructor) {
    console.log("class is created");
}
function logInstance(originalConstructor) {
    var newConstructor = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("object is instantiated: " + JSON.stringify(args));
        return originalConstructor.apply(this, args);
    };
    return newConstructor;
}
console.log("Before class declration");
var MyClass = (function () {
    function MyClass(name) {
        this.name = name;
    }
    ;
    return MyClass;
}());
MyClass = __decorate([
    logClass,
    logInstance
], MyClass);
console.log("After  class declration ");
var obj1 = new MyClass("A Friend");
console.log(obj1.name);
