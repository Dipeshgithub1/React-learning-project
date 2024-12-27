//Array
var House = [ ];
var House = new Array();

//Num Array
let arr = [10, 20, 30, 40, 50];
let arr1 =[110, 120, 130, 140];

console.log(arr)
console.log(arr1)

//String Array
let string_arr = ["Alex", "peter", "chloe"]

console.log(string_arr)
//push
arr.push(60);
console.log("After the push op "  ,arr)
console.log("After the push op "  + arr)
//unshift
arr.unshift(0,10);
console.log("After unshift op " + arr)
//pop
arr.pop();
console.log("After pop op " + arr)
//shift
arr.shift();
console.log("After shift op " + arr)
//splice
arr.splice(2, 1);
console.log("After splice op " + arr);

//reverse
arr.reverse();
console.log("After reverse op " + arr);

//concat
console.log('After concat op ' + arr.concat(arr1))
