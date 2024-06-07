function editRender() {
  let hash = Number(location.hash.slice(1, location.hash.length));
  let foundFilm = null;
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let title = document.getElementById("title");
  let imdb = document.getElementById("imdb");
  let poster = document.getElementById("poster");
  let src = document.getElementById("src");
  let year = document.getElementById("year");
  let duration = document.getElementById("duration");
  let director = document.getElementById("director");
  let writer = document.getElementById("writer");
  let languages = document.getElementById("languages");
  let genres = document.getElementById("genres");
  let actors = document.getElementById("actors");
  let plot = document.getElementById("plot");
  for (let i = 0; i < films.length; i++) {
    if (films[i].id == hash) {
      foundFilm = films[i];
      break;
    }
  }
  title.value = foundFilm.title;
  imdb.value = foundFilm.IMDb;
  poster.value = foundFilm.poster;
  src.value = foundFilm.src;
  year.value = foundFilm.year;
  duration.value = foundFilm.duration;
  director.value = foundFilm.director;
  writer.value = foundFilm.writer;
  languages.value = foundFilm.languages;
  genres.value = foundFilm.genres;
  actors.value = foundFilm.actors;
  plot.value = foundFilm.plot;
}

function editFilm(e) {
  e.preventDefault();
  let hash = Number(location.hash.slice(1, location.hash.length));
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let title = document.getElementById("title");
  let imdb = document.getElementById("imdb");
  let poster = document.getElementById("poster");
  let src = document.getElementById("src");
  let year = document.getElementById("year");
  let duration = document.getElementById("duration");
  let director = document.getElementById("director");
  let writer = document.getElementById("writer");
  let languages = document.getElementById("languages");
  let genres = document.getElementById("genres");
  let actors = document.getElementById("actors");
  let plot = document.getElementById("plot");

  for (let i = 0; i < films.length; i++) {
    if (films[i].id == hash) {
      films[i].title = title.value;
      films[i].IMDb = imdb.value;
      films[i].poster = poster.value;
      films[i].src = src.value;
      films[i].year = year.value;
      films[i].duration = duration.value;
      films[i].director = director.value;
      films[i].writer = writer.value;
      films[i].language = languages.value;
      films[i].genres = genres.value;
      films[i].actors = actors.value;
      films[i].plot = plot.value;
    }
  }
  console.log(films);
  localStorage.setItem("Films", JSON.stringify(films));
  window.location.replace(`filmDetails.html#${hash}`);
}

function deleteFilm() {
  let hash = Number(location.hash.slice(1, location.hash.length));
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let watchlist = JSON.parse(localStorage.getItem("watchList"));
  let foundFilmID = null;
  let newWatchlistArr = [];
  let newFilmArr = [];

  for (let i = 0; i < films.length; i++) {
    if (hash != films[i].id) {
      newFilmArr.push(films[i]);
    } else {
      foundFilmID = films[i].id;
    }
  }
  if (watchlist.includes(foundFilmID)) {
    for (let i = 0; i < watchlist.length; i++) {
      if (foundFilmID != films[i].id) {
        newWatchlistArr.push(films[i].id);
      }
    }
  }

  localStorage.setItem("Films", JSON.stringify(newFilmArr));
  localStorage.setItem("watchList", JSON.stringify(newWatchlistArr));
  window.location.replace("index.html");
}
editRender();
