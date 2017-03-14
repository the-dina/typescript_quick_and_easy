abstract class Person {
    public name: string;
    protected money: number = 10;

    constructor (name) {
        this.name = name;
    }

    public getMoney(): number {
        return this.money;
    }
}

class Employee extends Person {
    public salary: number = 0;

    constructor (name, salary) {
        super(name);
        this.salary = salary;
    }

    public getMoney(): number {
        return super.getMoney() + this.salary;
    }

    public checkAccess () {
        this.money = 100;
        this.name = "";
    }
}

let emp1 = new Employee("Bill Gates", 1000000);
emp1.name = "Satya Nadella";
console.log(`${emp1.name} ${emp1.getMoney()}`); // result: "Satya Nadella 1000010"