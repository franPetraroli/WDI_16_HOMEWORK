// Update the drop down box to show the five cities NYC, SF, LA, SYD, ATX. Note: You might need to research
// how to add DOM objects to a web page to be able
//    to add option tags to the select tag.
// When you select a city in the drop-down box, the background image should change to show that city.
// The images for the five cities are in the images folder. We have already provided the css code
// for changing the background image in the style.css file (at the bottom).
// Feel free to use those classes.

// NYC, SF, LA, SYD, ATX

const select = document.querySelector("#city-type");

let cities = ["NYC", "SF", "LA", "SYD", "ATX"];

cities.forEach(city => {
  let option = document.createElement("option");
  option.textContent = city;
  select.appendChild(option);
});

var city = "";
select.addEventListener("change", () => {
  if (select.value === "NYC") {
    updateClass("nyc");
    document.body.classList.add("nyc");
  } else if (select.value === "SF") {
    updateClass("sf");
    document.body.classList.add("sf");
  } else if (select.value === "LA") {
    updateClass("la");
    document.body.classList.add("la");
  } else if (select.value === "SYD") {
    updateClass("sydney");
    document.body.classList.add("sydney");
  } else if (select.value === "ATX") {
    updateClass("austin");
    document.body.classList.add("austin");
  }
});

let updateClass = c => {
  if (city !== "") {
    document.body.classList.remove(city);
    city = c;
  } else {
    city = c;
  }
};
