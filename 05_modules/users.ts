export class user {
    constructor (public name: string, public monthlySalary: number) {
        this.name = name;
        this.monthlySalary = monthlySalary;
    }
}

let users: user[] = [
    new user("Ms. Dolphin", 8000),
    new user("Mr. Cat", 7500),
]; 

export class userHelper {
    public static getAll(): user[] {
        return [...users]; // a copy of original data
    }
} 