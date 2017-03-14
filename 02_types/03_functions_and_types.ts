let f1 = function(x: number, y: number): number {
    return x + y;
}

let f2 = function(x: number, y: number): string {
    return x.toString() + y.toString();
}

let f3 = function(x: (number | string), y: (number | string)): string {
    return x.toString() + y.toString();
}