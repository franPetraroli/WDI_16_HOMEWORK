const picker = document.querySelector("#picker");
// const input = document.querySelector("#input");
const main = document.querySelector("main");
// const btn = document.querySelector("#btn");
const brush = document.querySelector("#brush");
const inputMovie = document.querySelector("#input-movie");
const btnMovie = document.querySelector("#movie");

picker.addEventListener("change", () => {
  brush.style.backgroundColor = "#" + picker.value;
});
const defaultColor = "black";

// btn.addEventListener("click", changeColor);

// function changeColor() {
//   brush.style.backgroundColor = "#" + input.value;
// }

//--------------    MAIN  ----------------
let num = 0;
while (num < 1000) {
  let box = document.createElement("div");
  box.setAttribute("class", "box");

  main.appendChild(box);
  num++;
}
var pressedMouse = false;
main.addEventListener("mousedown", () => {
  pressedMouse = true;
});
main.addEventListener("mouseup", () => {
  pressedMouse = false;
});

main.addEventListener("mouseover", e => {
  if (pressedMouse === true) {
    e.target.style.backgroundColor = brush.style.backgroundColor
      ? brush.style.backgroundColor
      : defaultColor;
  }
});

//----------- OMDB ---------------
let result = "";
$("#btn").click(() => {
  let input = $("#search").val();
  $.ajax({ url: `http://omdbapi.com/?s=${input}&apikey=2f6435d9` }).done(
    result => {
      movieCard(result);
    }
  );
});

btnMovie.addEventListener("click", async () => {
  let input = inputMovie.value;
  let result = await fetch(`http://omdbapi.com/?t=${input}&apikey=2f6435d9`);
  let final = await result.json();
  console.log(final.Poster);
  console.log(document.body);

  main.style.backgroundImage = `url('${final.Poster}')`;
});
