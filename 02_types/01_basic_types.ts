// number
let n: number = 17;
n = 0x11; // hex
n = 0b10001; // binary
n = 0o21; // octal

// boolean
let b: boolean = true;
b = false;
b = !!(n); // n == 0 ? false : true
b = !!(null); // false

// string
let s: string = 'Hello buddy';
s = "Hello buddy";
s = `My number is ${n}`; // My number is 17

// undefined and null
n = undefined;
s = undefined;
b = undefined;
n = null;
s = null;
b = null;

// any
let a: any;
a = 2;
a = "string";
a = false;

// void
let v: void;
v = undefined;
v = null;

// array
let nArray: number[] = [1, 2, 3];
let sArray: Array<string> = ["Hi", "Hello", "Hey"];
let aArray: any[] = [1, "2"];

// tuple
let t: [string, number, number] = ["Malcolm Turnbull", 63, 507000];
t[1] = 62;

// enum
enum Color {Red, Green, Blue};
let e: Color = Color.Green;
e = 0;
n = Color.Red;

// object
let o: object = {
    name: "Obama"
}

let o2: { name: string } = {
    name: "Obama"
};