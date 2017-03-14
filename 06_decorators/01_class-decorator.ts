function logClass(originalConstructor: Function) {
    console.log(`class is created`);
}

function logInstance<T extends Function>(originalConstructor: T): T { 
    let newConstructor = function (...args) { 
        console.log(`object is instantiated: ${JSON.stringify(args)}`);
        return originalConstructor.apply(this, args);
    };
    return (newConstructor as Function) as T;  
}

console.log("Before class declration");

@logClass
@logInstance 
class MyClass {
    constructor (public name){  }; 
}

console.log("After  class declration ");
let obj1 = new MyClass("A Friend");
console.log(obj1.name);