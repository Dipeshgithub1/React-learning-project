//split() - string method that breaks a string into an array
// of substrings.

const text = 'apple,orange,banana,kiwi'
const fruits = text.split(',')

console.log(fruits)


const sentence = "hello! learning javascript method of split"

const words = sentence.split(" ")

console.log(words)


const character = "hello!".split("");

console.log(character)


const limitedSplit = "one,two,three,four,five".split(",",4)

console.log(limitedSplit)


//slice() - slice() is used to extract a portion of an array or
 //string without modifying the original

 const numbers = [1,2,3,4,5]
 const sliced = numbers.slice(1,4)
 console.log(sliced)
 console.log(numbers)

 //with negative values
 const lastTwo = numbers.slice(-2)
 console.log(lastTwo)

 //with string
 const str = "JavaScript";
 const part = str.slice(4,10)
 console.log(part)

 //splice() - Array Method Only to modify an array by
// removing, replacing, or adding elements

const color = ['red','green','blue','yellow','orange']
const removed = color.splice(1,2)
console.log(removed)
console.log(color)

//adding element 
const days = ["Monday","tuesday","wednesday","thursday"]
days.splice(1,0,"sunday")
console.log(days)

//Replacing Element
const scores = [10,20,30,40,50]

scores.splice(1,2,25,35)
console.log(scores)

