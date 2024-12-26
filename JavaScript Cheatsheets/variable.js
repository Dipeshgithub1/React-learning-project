console.log("using var keyword")

//Used to initialize to value, redeclared and its value can be reassigned.	var x= value;
var x = 1;
if(x==1){
    var x =2;
    console.log(x);
}
console.log(x);

//Similar to var but is block scoped	let y= value;
let y = 12;
if(y==12){
    let y = 13;
    console.log(y)
}
console.log(y);

//Used to declare a fixed value that cannot be changed.	const z= value;
const g = 14;
if(g==14){
    const g =16;
    console.log(g)
}
console.log(g)




//Datatypes

//string
let str = "hello igt";
console.log(str)
//Number
const num = 10;
console.log(num)

//Boolean
const bool = "true";
console.log(bool);

//undefined
let name;
console.log(name)

//Null
const nul = null;
console.log(nul)

//symbol
const val1 = Symbol("Hello")
const val2 = Symbol("hello")

console.log(val1);
console.log(val2);


// Here both values are different 
// as they are symbol type which 
// is immutable object

const obj={
    firstname: "dipesh",
    lastname: null,
    batch: 2,

};

console.log(obj)


//Primitive types (like Number, String, Boolean, Null, and Undefined) store single values.
//Non-primitive types (like Object, Array, and Function) can store collections of data or executable code