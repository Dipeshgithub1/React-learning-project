// use the function keyword

function greet(name){
  return `Hello,${name}`
}

//hoisting
//functions are hoisting ,meaning they can be called before they are defined

console.log(greet("Ajith"));

function greet(name){
 return `Hello,${name}`
}

//this binding - function has own this ,determine by how the function is called

function person(){
    this.name = "ajiyn",
    setTimeout(function(){
        console.log(this.name)
    },1000)
}
new person()


//Argument object - function has access argument object ,an array holding all the passed arugment

function showArg(){
  console.log(arguments)
}
showArg(1,2,3);

//return statement - function requiresd return value (unless using shorthand)
function add(a,b){
  return a + b;
}
console.log(add(1,2))


//use case - function for use for definding methods,event handlers or complex function
const person = {
  name: "ajith",
  greet: function(){
    return `Hello ${this.name}`
  },
}