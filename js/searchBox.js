function renderSearchBox() {
  let searchBox = document.getElementById("searchBox");
  let localFilms = JSON.parse(localStorage.getItem("Films"));
  let films = "";
  let searchInput = document.getElementById("searchInput");

  for (let i = 0; i < localFilms.length; i++) {
    if (
      localFilms[i].title
        .toLowerCase()
        .includes(searchInput.value.toLowerCase())
    ) {
      films += ` <a href="filmDetails.html#${localFilms[i].id}"
      ><div class="film">
        <div class="poster"><img src="${localFilms[i].poster}" alt="" /></div>
        <div class="about">
          <div class="filmName">${localFilms[i].title}</div>
          <p>${localFilms[i].plot}</p>
        </div>
      </div></a
    >`;
    } else {
      films += ` <h1>Not found</h1>`;
    }

    searchBox.innerHTML = films;
  }

  showSearchBox();
}

function showSearchBox() {
  let searchBox = document.getElementById("searchBox");
  let searchInput = document.getElementById("searchInput");
  if (Boolean(String(searchInput.value).trim())) {
    searchBox.style.display = "flex";
  } else {
    searchBox.style.display = "none";
  }
}
