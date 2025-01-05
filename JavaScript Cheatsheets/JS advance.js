// Arrow functions are written with the => symbol, which makes them compact.

const add = (a, b) => a + b;
console.log(add(5, 3));

//Arrow Function without Parameters

const gfg = () => {
    console.log( "Hi from GeekforGeeks!" );
}

gfg();

//Arrow Function with Single Parameters
const square = x => x*x;
console.log(square(4));

//Arrow Function with Multiple Parameters
const g = ( x, y, z ) => {
    console.log( x + y + z )
}

g( 10, 20, 30 );

//  Return Object Literals
const makePerson = (firstName, lastName) =>
    ({first: firstName, last: lastName});
    console.log(makePerson("Pankaj", "Bind"));


 // JavaScript this Keyword

  
  // Using this in a Method

  const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log('Hello, my name is ' +
            this.name + ' and I am '
            + this.age +
            ' years old.');
    }
};

person.greet();


// Explicit Binding
function ageVerify(){
    if(this.age> 18){
        console.log("Yes you can drive");
    } else {
        console.log("No you cannot drive");
    }
}

const per1 = {age: 21};
const per2 = {age: 16};
ageVerify.call(per1);
ageVerify.call(per2);


// Async and Await in JavaScript

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();


  // Async Function
