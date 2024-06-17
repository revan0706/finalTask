function renderSearchBox() {
  let searchBox = document.getElementById("searchBox");
  let localFilms = JSON.parse(localStorage.getItem("Films"));
  let films = "";
  let searchInput = document.getElementById("bigSearchInput");
  let addedFilmNumber = 0;
  for (let i = 0; i < localFilms.length; i++) {
    if (
      localFilms[i].title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      if (addedFilmNumber < 3) {
        addedFilmNumber += 1;
        films += ` <a href="filmDetails.html#${localFilms[i].id}"
        ><div class="film">
          <div class="poster"><img src="${localFilms[i].poster}" alt="" /></div>
          <div class="about">
            <div class="filmName">${localFilms[i].title}</div>
            <p>${localFilms[i].plot}</p>
          </div>
        </div></a
      >`;
      }
    }
  }

  if (addedFilmNumber == 3) {
    films += `<h1 onclick="searchFilms('input1')">Others</h1>`;
  }
  if (films == "") {
    films = ` <h1>Not found</h1>`;
  }
  searchBox.innerHTML = films;
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
