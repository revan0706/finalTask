// let films = [
//   {
//     id: 1,
//     imdb: 9.2,
//     title: "Fallout",
//   },
//   {
//     id: 2,
//     imdb: 3.2,
//     title: "out",
//   },
// ];
// localStorage.setItem("Films", JSON.stringify(films));
function showcreateFilmForm() {
  let createFilmForm = document.getElementById("createFilmForm");
  createFilmForm.style.visibility == "hidden"
    ? (createFilmForm.style.visibility = "visible")
    : (createFilmForm.style.visibility = "hidden");
}

function createFilm() {
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let filmTitle = document.getElementById("title");
  let filmIMDB = document.getElementById("imdb");
  let filmPoster = document.getElementById("poster");
  let filmSrc = document.getElementById("src");
  let filmYear = document.getElementById("year");
  let filmDuration = document.getElementById("duration");
  let filmGenres = document.getElementById("genres");
  let filmDirector = document.getElementById("director");
  let filmWriter = document.getElementById("writer");
  let filmLanguage = document.getElementById("language");
  let filmPlot = document.getElementById("plot");
  let maxID = 0;
  for (let i = 0; i < films.length; i++) {
    if (films[i].id > maxID) {
      maxID = films[i].id;
    }
  }

  let film = {
    id: maxID + 1,
    title: filmTitle.value,
    poster: filmPoster.value,
    IMDb: filmIMDB.value,
    src: filmSrc,
    year: filmYear,
    duration: filmDuration,
    genres: filmGenres,
    director: filmDirector,
    writer: filmWriter,
    language: filmLanguage,
    plot: filmPlot,
  };
  films.push(film);
  // console.log(film);
  localStorage.setItem("Films", JSON.stringify(films));
}