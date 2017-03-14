let test_for_of_loop = function () {
    
    let iterable: any = [3, 5, 7];
    iterable.arrayOwner = 'Angelina_Jolie';

    console.log("for in loop");
    for (let i in iterable) {
        console.log(iterable[i]);
    }

    console.log("for of loop");
    for (let i of iterable) {
        console.log(i);
    }
}