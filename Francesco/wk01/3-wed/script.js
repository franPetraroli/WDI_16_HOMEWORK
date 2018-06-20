var yearStart = 1918;
const startDate = new Date(yearStart,1,1);
const month = startDate.getMonth() + 1;
function result(year){
  return new Date(year, month, 0).getDate();
}

console.log('Leap years');

for(yearStart; yearStart < 2019; yearStart++){
  let final = result(yearStart)
  if(final === 29){
    console.log(yearStart); 
  } 
}


console.log('Multiple of 7');

for(let i = 1; i < 201; i++){  
  if(i % 7 === 0){
    console.log(i); 
  }
   

  //Using the same loop

  
  // if(i === start){
  //   console.log(i);
  //   start+=4
    
  // }
}

console.log('Second odds number');

let start = 3; 
for(let i = 3; i < 201; i+=4){
  console.log(i);
  
}





