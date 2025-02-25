// uses the => arrow synax

const greet = (name) => `hello,${name}`

//no hoisting must be defined before being called

console.log(greet('jony'))

//new binding - arrow function inherits this from the surrounding context(lexical scoping /this)

function person(){
    this.name = 'joy'
    setTimeout(() => {
        console.log(this.name)
    },1000)
}
new person()

//Argument object - does not have access to the argument object .use rest parameter instead .
 const showArg = (...args) =>{
    console.log(args)
}
showArg(1,2,3);

//return statement - allow implicit return for single line expresssion
const add = (a,b) => a+b;
console.log(add(3,4)) 

//use case - use for callback,array methods(map,filter,reduce) or inline logic

const number = [1,2,3,4]
const square = number.map(n => n*n)
console.log(square)

