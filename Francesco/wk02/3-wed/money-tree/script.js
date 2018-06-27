const money = '$'

function moneyTree(quantity){
  let spaces = quantity - 1
  let dollar = 1
  let result = []

  for(k = 0; k < quantity; k++){
    for(i = 0; i < spaces; i++){
      result.push(' ')
    }
    for(j = 0; j < dollar; j++){
      result.push('$')
    }
    result.push('\n')
    spaces -= 1
    dollar += 2
  }
  result = result.join('')
  console.log(result);
}

moneyTree(50)