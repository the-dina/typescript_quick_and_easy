let test_destructuring = function () {
    
    let theArray = [1, 2, 3];    
    let [a ,b , c] = theArray;

    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
    console.log(`c: ${c}`);
   
    let x = 100;
    let y = 200;
    [x, y] = [y, x];
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
    
    let person = { name: 'Obama', age: 38 };
    let { name: v1, age: v2 } = person;
    console.log(`v1: ${v1}`);
    console.log(`v2: ${v2}`);    
}