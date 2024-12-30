// Here a date has been assigned by creating a date obj
let DateObj = new Date("October 13, 1996 05:35:32");

// getDate()
let A = DateObj.getDate();

// Printing date of the month
console.log(A);

// getTime()
let B = DateObj.getTime();

// Printing time in milliseconds.
console.log(B);

// getMinutes()
let minutes = DateObj.getMinutes();

// Printing minute.
console.log(minutes);

// getFullYear()
let C = DateObj.getFullYear();

// Printing year
console.log(C);

// getDay()
let Day = DateObj.getDay();

// Printing day of the week
console.log("Number of Day: " + Day);

// setDate
DateObj.setDate(15);

let D = DateObj.getDate();

// Printing new date of the month
console.log(D);

// parse(), taking wrong date string as input.
let date = "February 48, 2018 12:30 PM";

// calling parse function.
let msec = Date.parse(date);
console.log(msec);




