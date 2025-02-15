const person = {
    firstName: 'john',
    lastName: 'due',
    age:30,
    
}

//accessiing object properties

console.log(person.firstName);

console.log(person["lastName"]);

//adding new properties tp object
person.email="johndoes@gmail.com";

console.log(person.email);
console.log(person['email']);

//detele properties from object
delete person.age;
console.log(person.age)


//check if properties exists in object
if("email" in person){
 console.log("email extis in person object");
}

if("age" in person){
    console.log("email extis in person object");
}
else{
    console.log("age does not exist in person object")
}


//looping through object properties
for(const key in person){
    console.log(`${key}:${person[key]}`)
}

//using objects.keys() method
const keys = Object.keys(person);
for(const key of keys){
    console.log(`${key}:${person[key]}`)
}


//desctructuring object
const {firstName,lastName,email} = person;
console.log(firstName,lastName,email)


const contactInfo= {
    email:"harkirat@gmail.com",
    phone:"6543678788",
    address:"123,abcc,steerta",
};

const updatedContactInfo = {  ...person,  ...contactInfo};
console.log(updatedContactInfo)
