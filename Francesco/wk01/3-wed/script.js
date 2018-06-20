let recipe = {
  title: 'Pancakes',
  serving: 4,
  ingredients: ['flour', 'sugar', 'eggs', 'butter',' vanilla essence']
}

console.log(recipe.title);
console.log(recipe.serving);
console.log(recipe.ingredients[0]);
console.log(recipe.ingredients[1]);
console.log(recipe.ingredients[2]);
console.log(recipe.ingredients[4]);


let books = [{
  title: 'Pet semetery',
  author: 'Stephen King',
  alreadyRead: true
},{
  title: 'The Alchemist',
  author: 'Paulo Coelho',
  alreadyRead: true
},{
  title: 'Tools of Titans',
  author: 'Tim Ferries',
  alreadyRead: false
},{
  title: 'Odd Thomas',
  author: 'Dean Kontz',
  alreadyRead: true
}]

books.forEach((book)=>{
  console.log(book.title);
  console.log(book.author);
  if(book.alreadyRead){
    console.log(`You have already read this book`);
  }else{
    console.log('You have not read yet this book');
    
  }
})

var favMovie = {
  title: 'Inception',
  duration: '220 min',
  stars: ['Leo Di Caprio', 'star2', 'star3']
};

(function(){
  console.log(`${favMovie.title} lasts for ${favMovie.duration}. Stars: ${favMovie.stars[0]}, ${favMovie.stars[1]}, ${favMovie.stars[1]}.`);
})()

// movie()

// console.log(favMovie.stars[0]);

