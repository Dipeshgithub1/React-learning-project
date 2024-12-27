//JS parseInt function
const num1 = parseInt("200.74");
console.log('Using parseInt("200.74") = ' + num1)

//JS parseFloat function

const num2 = parseFloat("123.45abc")
console.log('parseFloat("123.45abc") = ', + num2)

//JS isNaN function
console.log(isNaN("false"));

//JS Number() function
const num3 = Number("123")
console.log("Value of '123' : " + num3)

//JS eval function
function evalExample(){
    const expression = "2 + 3 * 4";
    const result = eval(expression);
    console.log(result);
}
evalExample();


//JS encodeURL function
const url = "https://example.com/hello world?query=javascript";
const encodedURL = encodeURI(url); 
console.log(encodedURL);