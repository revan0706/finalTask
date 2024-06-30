function renderSearchBox() {
  let searchBox = document.getElementById("searchBox");
  let searchInput = document.getElementById("bigSearchInput");
  if (
    location.pathname == "/index.html" ||
    location.pathname == "/" ||
    location.pathname == "/createFilm.html" ||
    location.pathname == "/filmDetails.html"
  ) {
    console.log("A");
    let localFilms = JSON.parse(localStorage.getItem("Films"));
    let films = "";
    let addedFilmNumber = 0;
    for (let i = 0; i < localFilms.length; i++) {
      if (
        localFilms[i].title
          .toLowerCase()
          .includes(searchInput.value.toLowerCase())
      ) {
        if (addedFilmNumber < 3) {
          addedFilmNumber += 1;
          films += `<a href="filmDetails.html#${localFilms[i].id}"
        ><div class="film">
          <div class="poster"><img src="${localFilms[i].poster}" alt="" /></div>
          <div class="about">
            <div class="filmName">${localFilms[i].title}</div>
            <p>${localFilms[i].plot}</p>
          </div>
        </div></a
      >`;
        } else if (addedFilmNumber >= 3) {
          films += `<h1 onclick="searchFilms('input1')">${
            location.pathname != "/index.html"
              ? '<a href="index.html">Others</a>'
              : "Others"
          }</h1>`;
          break;
        }
      }
    }

    if (films == "") {
      films = ` <h1>Not found</h1>`;
    }
    searchBox.innerHTML = films;
  } else if (location.pathname == "/actors.html") {
    let actors = "";
    let localActors = JSON.parse(localStorage.getItem("Actors") || "[]");
    let addedActorsNumber = 0;
    for (let i = 0; i < localActors.length; i++) {
      let foundActor =
        localActors[i].actorsName + " " + localActors[i].actorsSurname;
      if (foundActor.toLowerCase().includes(searchInput.value.toLowerCase())) {
        if (addedActorsNumber < 3) {
          addedActorsNumber += 1;
          actors += `<div class="actor">
            <div class="poster"><img src="${localActors[i].actorsImg}" alt="" /></div>
            <div class="actorName">
              <p>${localActors[i].actorsName} ${localActors[i].actorsSurname}</p>
            </div>
          </div>`;
        } else if (addedActorsNumber >= 3) {
          actors += `<h1 onclick="searchActors('input1')">Others</h1>`;
          break;
        }
      }
    }
    if (actors == "") {
      actors = ` <h1>Not found</h1>`;
    }
    searchBox.innerHTML = actors;
  }
  showSearchBox();
}

function showSearchBox() {
  let searchBox = document.getElementById("searchBox");
  let searchInput = document.getElementById("bigSearchInput");
  if (Boolean(String(searchInput.value).trim())) {
    searchBox.style.display = "flex";
  } else {
    searchBox.style.display = "none";
  }
}
