//setTimeout executes a function once after specific delay.

console.log('Start')

setTimeout(() => {
console.log("We are in the timout for 2 seconds")
},2000);

console.log("End")


function debouncer(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay); // Moved delay inside setTimeout
    };
}
