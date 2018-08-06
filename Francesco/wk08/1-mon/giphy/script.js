const main = document.querySelector("#main"),
  input = document.querySelector("#input"),
  btn = document.querySelector("#btn");
let offset = 0;

async function loadImages() {
  console.log(offset);

  let result = await fetch(
    `http://api.giphy.com/v1/gifs/search?q=${
      input.value
    }&api_key=vDq7aG5itL8i6xT6Npyssdm0LwiK7WgS&limit=10&offset=${offset}`
  );
  let final = await result.json();

  for (item in final.data) {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${
        final.data[item].images.fixed_height_small.url
      }" alt="Card image cap">
    </div>
    `;
    main.appendChild(div);
  }
}

btn.addEventListener("click", () => {
  clearPage();
  loadImages();
});

window.addEventListener("scroll", function() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    offset += 10;
    loadImages();
  }
});

function clearPage() {
  main.innerHTML = "";
}
