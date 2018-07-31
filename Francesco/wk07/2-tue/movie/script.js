let result = "";
$("#btn").click(() => {
  let input = $("#search").val();
  $.ajax({ url: `http://omdbapi.com/?s=${input}&apikey=2f6435d9` }).done(
    result => {
      movieCard(result);
    }
  );
});

function movieCard(results) {
  if (results.Response === "False") {
    $("#movies")
      .append("<h1>")
      .text("No Movie Found, Plese try another title");
  } else {
    $("#movies").empty();
    for (movie of results.Search) {
      $("#movies").append(
        $("<div/>", { class: "card col-md-4" }).css("width", "18rem")
      );
      $(".card").append(
        $("<img>", { class: "card-img-top" })
          .attr("src", movie.Poster)
          .css("width", "200px")
      );
      $(".card").append($("<div>", { class: "card-title" }).text(movie.Title));
      $(".card").append($("<p>", { class: "card-text" }).text(movie.Year));
    }
  }
}
