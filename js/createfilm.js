let genres = [
  { id: 1, genre: "Action" },
  { id: 2, genre: "Adventure" },
  { id: 3, genre: "Comedy" },
  { id: 4, genre: "Fantasy" },
  { id: 5, genre: "Horror" },
];

let languages = [
  { id: 1, language: "english" },
  { id: 2, language: "turkish" },
  { id: 3, language: "russian" },
];

localStorage.setItem("languages", JSON.stringify(languages));
localStorage.setItem("genres", JSON.stringify(genres));

function createFilm(event) {
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let filmTitle = Boolean(String(document.getElementById("title").value).trim())
    ? document.getElementById("title")
    : false;
  let filmIMDB = document.getElementById("imdb");
  let filmPoster = document.getElementById("poster");
  let filmSrc = document.getElementById("src");
  let filmYear = document.getElementById("year");
  let filmDuration = document.getElementById("duration");
  let filmGenres = document.getElementById("genres");
  let filmDirector = Boolean(
    String(document.getElementById("director").value).trim()
  )
    ? document.getElementById("director")
    : false;
  let filmWriter = Boolean(
    String(document.getElementById("writer").value).trim()
  )
    ? document.getElementById("writer")
    : false;
  let filmLanguage = document.getElementById("languages");
  let filmPlot = Boolean(String(document.getElementById("plot").value).trim())
    ? document.getElementById("plot")
    : false;
  let actorOpt = document.getElementById("actors");
  let selectedActors = [];
  let genresOpt = document.getElementById("genres");
  let selectedGenres = [];
  let notCompleted = "";
  filmSrc = filmSrc.value.slice(32, filmSrc.value.length);
  let maxID = 0;
  for (let i = 0; i < films.length; i++) {
    if (films[i].id > maxID) {
      maxID = films[i].id;
    }
  }
  console.log(filmTitle);
  for (let i = 0; i < actorOpt.length; i++) {
    if (actorOpt[i].selected) {
      selectedActors.push(actorOpt[i].value);
    }
  }
  for (let i = 0; i < genresOpt.length; i++) {
    if (genresOpt[i].selected) {
      selectedGenres.push(genresOpt[i].value);
    }
  }
  if (Boolean(filmTitle && filmDirector && filmWriter && filmPlot)) {
    let film = {
      id: maxID + 1,
      title: filmTitle.value,
      poster: filmPoster.value,
      IMDb: filmIMDB.value,
      src: filmSrc,
      year: filmYear.value,
      duration: filmDuration.value,
      genres: selectedGenres,
      director: filmDirector.value,
      writer: filmWriter.value,
      language: filmLanguage.value,
      plot: filmPlot.value,
      actors: selectedActors,
    };
    films.push(film);
    localStorage.setItem("Films", JSON.stringify(films));
  } else {
    event.preventDefault();
    if (filmTitle == false) {
      notCompleted += `${Boolean(notCompleted.length) ? "," : ""}Title`;
    }
    if (filmDirector == false) {
      notCompleted += `${Boolean(notCompleted.length) ? "," : ""}Director`;
    }
    if (filmWriter == false) {
      notCompleted += `${Boolean(notCompleted.length) ? "," : ""}Writer`;
    }
    if (filmPlot == false) {
      notCompleted += `${Boolean(notCompleted.length) ? "," : ""}Plot`;
    }
    alert(`${notCompleted} not completed !`);
  }
}
function formGenresRender() {
  let genres = document.getElementById("genres");
  let localGenres = JSON.parse(localStorage.getItem("genres"));
  let x = ``;
  for (let i = 0; i < localGenres.length; i++) {
    x += `<option value="${localGenres[i].id}">${localGenres[i].genre}</option>`;
  }
  genres.innerHTML = x;
}
function formActorsRender() {
  let actors = JSON.parse(localStorage.getItem("Actors"));
  let formActors = document.getElementById("actors");
  let actorList = "";

  for (let i = 0; i < actors.length; i++) {
    actorList += `<option value="${actors[i].id}">${actors[i].actorsName} ${actors[i].actorsSurname}</option>`;
  }

  formActors.innerHTML = actorList;
}

function formLanguagesRender() {
  let languages = document.getElementById("languages");
  let localLanguages = JSON.parse(localStorage.getItem("languages"));
  let x = ``;
  for (let i = 0; i < localLanguages.length; i++) {
    x += `<option value="${localLanguages[i].id}">${localLanguages[i].language}</option>`;
  }
  languages.innerHTML = x;
}
formLanguagesRender();
formActorsRender();
formGenresRender();
