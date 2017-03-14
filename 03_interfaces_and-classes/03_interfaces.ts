interface Printable {
    colors?: string[];
    readonly paperSize: string;
    print(): void;
}

let printIt = function (what: Printable) {
    what.print();
}

let printableObject: Printable = {
    paperSize: "A3",
    print: () => console.log("printableObject is printed")
};

printIt(printableObject);

class PdfDoc implements Printable {
    public readonly paperSize: string = "A4";
    public print(): void {
        console.log("pdf doc is printed");
    }    
}

// function interfaces
interface MathOperator {
    (x: number, y: number): number;
}

let add: MathOperator;
add = function (x, y) {
    return x + y;
}

// Asserting types
let getChanceOfLife = function (person: {age: number, sex: string, [propName: string]: any }) : { remained: number } {
    return person.sex == "male" 
                ? { remained: 68 - person.age } 
                : { remained: 73 - person.age }
}

getChanceOfLife({ age: 38, sex: "male", country: "Australia"});