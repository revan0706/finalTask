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
  console.log(filmPlot.value);
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
    src: filmSrc.value,
    year: filmYear.value,
    duration: filmDuration.value,
    genres: filmGenres.value,
    director: filmDirector.value,
    writer: filmWriter.value,
    language: filmLanguage.value,
    plot: filmPlot.value,
  };
  films.push(film);

  localStorage.setItem("Films", JSON.stringify(films));
}

function formActorsRender() {
  let actors = JSON.parse(localStorage.getItem("Actors"));
  let formActors = document.getElementById("actors");
  let actorList = "";

  for (let i = 0; i < actors.length; i++) {
    actorList += `<option value="">${actors[i].actorsName} ${actors[i].actorsSurname}</option>`;
  }

  formActors.innerHTML = actorList;
}

formActorsRender();
