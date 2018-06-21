// 1. Build your own concatenation
// Write a function named combineWords that: 
// - return a new string that is the combination of the two parameters
// Example: combineWords('dog', 'house') => 'doghouse'

function combineWords(word1, word2) {
  // TODO: Place your code here
  return `${word1}${word2}`
}
var result =  console.log(combineWords('dog', 'house'));
 
// displays 'doghouse'

// 2. Write a function named calculateAge that:
// - takes 2 arguments: birth year, current year.
// - calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either 100 or 101"
// - Call the function three times with different sets of values.

// your code here
function calculateAge(birthYear, currentYear){
  let age = currentYear - birthYear;
  let p = document.createElement('p')
  document.querySelector('body').appendChild(p).innerText = `You are either ${age -1} or ${age}`
}

calculateAge(1982, 2018)
calculateAge(1999, 2018)
calculateAge(1932, 2018)

//  3. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
function length(arrayOfString){
  let result = []

  arrayOfString.forEach((i)=>{
    result.push(i.length)
    
  })
  return result
}
let list = ['eggdfg','wdwdd','vvw']

let listLength = console.log(length(list));
 
// 4. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code here
function transmogrifier(numb1, numb2, numb3){
  return Math.pow((numb1 + numb2), numb3)
}
let power = console.log(transmogrifier(1,2,3));


// 5. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.
// Example: wordReverse('we are good friends') => 'friends good are we'

// your code here
function wordReverse(frase){
  return frase.split(' ').reverse().join(' ')
}

let reversed = console.log(wordReverse('thank you very much'));

