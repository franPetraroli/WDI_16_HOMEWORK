const year = new Date().getFullYear()

if(year === 2018){
  console.log('"I\'m in the present!"')
}else if(year > 2018){
  console.log('Greetings from the future!');

}else if(year < 2018){
  console.log('Whoa! Blast from the past!');
}

// switch (true) {
//   case (year === 2018):
//     console.log("I\'m in the present!")
//     break; 
//   case (year < 2018):
//     console.log("Whoa! Blast from the past!")
//     break; 
//   case (year > 2018):
//     console.log("Greetings from the future!")
//     break;
// }

var button = document.getElementById('submit').addEventListener('click', function(e){
  var input = document.getElementById('age').value
  console.log(input);
  e.preventDefault()
})

var children, partner, geo, job;

children = 9
partner = 'Gina'
geo = 'Milan'
job = 'Software Developer'

function fortune() {
  document.getElementById('result').innerText = `You will be a ${job} in ${geo}, and married to ${partner} with ${children} kids.`
}

function calculate() {
  var year = document.getElementById('year').value
  var currentYear = new Date().getFullYear()

  var result = Number(currentYear) - Number(year)

  document.getElementById('result2').innerText = `They are either ${result} or ${result -= 1}`
}

var currenAge = 35
var finalAge = 100
var dailyAmount = 2

function howMany() {
  var total = (finalAge - currenAge) * (dailyAmount * 365)
  document.getElementById('result3').innerText = `You will need ${total} to last you until the ripe old age of ${finalAge}`
}

function go() {
  for (var i = 1; i < 21; i++) {
    if (i % 2 === 0) {
      var li = document.createElement('li')
      li.innerText = `${i} is even`
      document.getElementById('forloop').appendChild(li)
      // console.log(`${i} is even<`);

    } else if (i % 2 !== 0) {
      var li = document.createElement('li')
      li.innerText = `${i} is odd`
      document.getElementById('forloop').appendChild(li)
    }
  }
}

function calc() {
  for (var i = 1; i < 11; i++) {
    let result = i * 9
    console.log(`${i} * 9 = ${result}`);
  }
}

function show() {
  var list = ['My favoutite food is Pizza', 'My favoutite country is Japan', 'My favoutite color is azzurro', 'My favoutite language is Javascript']

  list.forEach((item) => {
    console.log(item);

  })
}

let max = document.getElementById('max').value.toString()
var random = Math.floor(Math.random() * max)

function guess() {
  let userInput = document.getElementById('input').value
  // let max = document.getElementById('max').value.toString()

  // let random = Math.floor(Math.random() * max)

  console.log(random);

  if (userInput === random.toString()) {
    document.getElementById('guessresult').innerText = 'You guessed right!!'
  }else{
    // document.getElementById('guessresult').innerText = 'Try again'
    if(userInput < random){
      document.getElementById('guessresult').innerText = 'Too low, Try again'
    }else{
      document.getElementById('guessresult').innerText = 'Too high, Try again'
    }
  }

}