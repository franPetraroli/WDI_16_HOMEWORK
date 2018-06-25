// Arrays
// Javascript provides us with a number of native methods that allow us to interact with arrays. Find methods that do each of the following and provide an example...

// Add an element to the back of an array.
// Remove an element from the back of an array.
// Add an element to the front of an array.
// Remove an element from the front of an array.
// Concatenates all the elements in an array into a string.
// Separates the characters of a string into an array. This one is a string method.
// This is a great exercise for practicing your "Google Fu"! If you need a starting point, check out MDN's documentation page on arrays.

// Your answers go here.
const array = ['Fran', '35', 'Melbourne']

// Add an element to the back of an array.
array.push('i like pizza')

// Remove an element from the back of an array.
array.pop()

// Add an element to the front of an array.
array.unshift('i like pizza')

// Remove an element from the front of an array.
array.shift()

// Concatenates all the elements in an array into a string.
let string = array.join('')

// Separates the characters of a string into an array. This one is a string method.

let arrayString = string.split('')
console.log(arrayString);


  // What will the contents of the below arrays be after the code samples are executed? Come up with an answer yourself before testing it out in the console.

  var numbers = [2, 4, 6, 8]
  numbers.pop()
  numbers.push(10)
  numbers.unshift(3)
  // Your answer goes here.

  //3,2,4,6,10
  console.log(numbers);

// What is the return value of the below code sample? Come up with an answer yourself before testing it out in the console.

var morse = ["dot", "pause", "dot"]
var moreMorse = morse.join(" dash ")
moreMorse.split(" ")

// Your answer goes here.
//dot dash pause dash dot
console.log(moreMorse);

// What will the contents of the below array be after the below code sample is executed? Come up with an answer yourself before testing it out in the console.

var bands = []
var beatles = ["Paul", "John", "George", "Pete"]
var stones = ["Brian", "Mick", "Keith", "Ronnie", "Charlie"]
bands.push(beatles)
bands.unshift(stones)
bands[bands.length - 1].pop()
bands[0].shift()
bands[1][3] = "Ringo"

// Your answer goes here.

// ["Brian", "Mick", "Keith", "Ronnie"]
// ["John", "George", "Pete"]
// ronnie => ringo

console.log(bands);


// | a | b | a AND b |
// | --- | --- | --- |
// | true | true | true |
// | true | false | false |
// | false | true | false |
// | false | false | true |

// |a|b|a OR b|
// |---|---|---|
// |true|true| true |
// |true|false| true |
// |false|true| true |
// |false|false| false |

// |a|b|a `!=` b|
// |---|---|---|
// |3|3| false |
// |1|5| true |
// |2|"2"| false |

// |a|b|!a AND (a OR b)|
// |---|---|---|
// |true|true| false |
// |true|false| false |
// |false|true| true |
// |false|false| false |

// Conditionals
// You're a bouncer at a bar. Given an age variable, create a conditional that satisfies the following requirements...

// If a patron is older than 21, print out "Come on in!".
// If a patron is between 18 and 21, print out "Come on in (but no drinking)!".
// If a patron is younger than 18, print out "You're too young to be in here!".
// If a patron is older than 75, print out "Are you sure you want to be here?".

// Your answer goes here.
function bouncer(hasId, age){
  if(hasId){
    if(age >= 18 && age < 21){
      return console.log('Come on in (but no drinking)!') 
    }else if(age < 18){
      return console.log('You\'re too young to be in here!') 
    }else if(age >= 75){
      return console.log('Are you sure you want to be here?')
    }else{
      return console.log('Come on in!')
    }    
  }else{
    return console.log('Sorry you need an ID');    
  }
}
let hasId = false
bouncer(hasId, 17)


// Fizz-Buzz is a classic coding exercise that you can create using your knowledge of conditionals and loops. Implement code that does the following...

// Counts from 1 to 100 and prints out something for each number.
// If the number is divisible by 3, print "Fizz".
// If the number is divisible by 5, print "Buzz".
// If the number is divisible by both 3 and 5, print "FizzBuzz".
// If the number does not meet any of the above conditions, just print the number.
// Your output should look something like this...

for(i = 1; i < 101; i++){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('Fizz Buzz')
  }else if(i % 3 === 0){
    console.log('Fizz')
  }else if(i % 5 === 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}

function fizzBuzz(i){
  if(i % 3 === 0 && i % 5 === 0){
    console.log('FizzBuzz')
  }else if(i % 3 === 0){
    console.log('Fizz')
  }else if(i % 5 === 0){
    console.log('Buzz');
  }else{
    console.log(i);
  }
}

fizzBuzz(37)

