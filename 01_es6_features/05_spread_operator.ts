let test_spread_operator = function () {
   let array1 = [2, 3, 4];
   let array2 = [1, ...array1, 5];
   console.log("array2:");
   console.log(array2);

   let copyOfArray1 = [...array1];
   console.log("copy of array1:");
   console.log(copyOfArray1);

   let sum = function(x, ...values) {
       let result = x;
       for (let value of values) {
           result += value;
       }
       return result;
   }   
   
   console.log("sum 1 to 3");
   console.log(sum(1, 2, 3));
   
   console.log("sum 1 to 4");
   console.log(sum(1, 2, 3, 4));
}