function filmsRender() {
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");

  let x = `<a href="createFilm.html"><div class="createFilm"><i class="fa-solid fa-plus"></i></div></a>  ${
    films.length
      ? ""
      : `<div class="emptyFilmListTitle"><h1>No movies, create one</h1></div>`
  } `;
  for (let i = 0; i < films.length; i++) {
    x += `<div class="film">
    ${
      watchList.includes(films[i].id)
        ? `<div class="bookMark" onclick='watchListRemove(${films[i].id})'>
    <i class="fa-solid fa-check"></i>
    <div class="layer1"></div>
    <div class="layer2 active"></div>
    </div>`
        : `<div class="bookMark" onclick='watchListAdd(${films[i].id})'>
    <i class="fa-solid fa-plus"></i>
    <div class="layer1"></div>
    <div class="layer2 inactive"></div>
    </div>`
    }
      
    
      <a href="filmDetails.html#${
        films[i].id
      }"><div class="photo" style="background: url(${
      films[i].poster
    });"></div></a>
     <div class="about"> <div class="imdb"><i class="fa-solid fa-star"></i>${
       films[i].IMDb
     }</div>
      <div class="name">${films[i].title}</div> </div>
    </div>`;
  }
  document.getElementById("filmsList").innerHTML = x;
}

function searchFilms(input) {
  let searchInput =
    input == "input1"
      ? document.getElementsByClassName("searchInput")[0]
      : document.getElementsByClassName("searchInput")[1];
  let localFilms = JSON.parse(localStorage.getItem("Films") || "[]");
  let films = document.getElementById("bigSearchBar");
  let wantedMovie = "";
  let searchBox = document.getElementById("searchBox");
  if (Boolean(searchInput.value.trim().length)) {
    for (let i = 0; i < localFilms.length; i++) {
      if (
        String(localFilms[i].title)
          .toLowerCase()
          .includes(String(searchInput.value).toLowerCase())
      ) {
        let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");

        wantedMovie += `<div class="film">
          ${
            watchList.includes(localFilms[i].id)
              ? `<div class="bookMark" onclick='watchListRemove(${localFilms[i].id})'>
          <i class="fa-solid fa-check"></i>
          <div class="layer1"></div>
          <div class="layer2 active"></div>
          </div>`
              : `<div class="bookMark" onclick='watchListAdd(${localFilms[i].id})'>
          <i class="fa-solid fa-plus"></i>
          <div class="layer1"></div>
          <div class="layer2 inactive"></div>
          </div>`
          }
            
          
            <a href="filmDetails.html#${
              localFilms[i].id
            }"><div class="photo" style="background: url(${
          localFilms[i].poster
        });"></div></a>
            <div class="imdb"><i class="fa-solid fa-star"></i>${
              localFilms[i].IMDb
            }</div>
            <div class="name">${localFilms[i].title}</div>
          </div>`;
        if (wantedMovie == "") {
          wantedMovie = `<div class="emptyFilmListTitle"><h1>No movies, create one</h1></div>`;
        }
        document.getElementById("filmsList").innerHTML = wantedMovie;
      }
    }
    films.style.border = "1.3px solid transparent";
  } else {
    films.style.border = "1.3px solid red";
  }

  if (searchBox.style.display == "flex") {
    searchBox.style.display = "none";
  }
}

filmsRender();
