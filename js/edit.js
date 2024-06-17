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

  for (let i = 0; i < genres.length; i++) {
    for (let a = 0; a < foundFilm.genres.length; a++) {
      if (genres[i].value == foundFilm.genres[a]) {
        genres[i].selected = true;
      }
    }
  }
  for (let i = 0; i < languages.length; i++) {
    for (let a = 0; a < foundFilm.language.length; a++) {
      if (languages[i].value == foundFilm.language[a]) {
        languages[i].selected = true;
      }
    }
  }
  for (let i = 0; i < actors.length; i++) {
    for (let a = 0; a < foundFilm.actors.length; a++) {
      if (actors[i].value == foundFilm.actors[a]) {
        actors[i].selected = true;
        console.log(actors[i]);
      }
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
  let selectedGenres = [];
  let selectedActors = [];
  let selectedLanguages = [];
  for (let i = 0; i < genres.length; i++) {
    if (genres[i].selected) {
      selectedGenres.push(genres[i].value);
    }
  }
  for (let i = 0; i < actors.length; i++) {
    if (actors[i].selected) {
      selectedActors.push(actors[i].value);
    }
  }

  for (let i = 0; i < languages.length; i++) {
    if (languages[i].selected) {
      selectedLanguages.push(languages[i].value);
    }
  }
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
      films[i].language = selectedLanguages;
      films[i].genres = selectedGenres;
      films[i].actors = selectedActors;
      films[i].plot = plot.value;
    }
  }
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
