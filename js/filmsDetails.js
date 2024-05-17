function filmDetailsRender(){

  if (location.hash) {
    let hash = Number(location.hash.slice(1, location.hash.length));
    let films = JSON.parse(localStorage.getItem("Films") || "[]");
    let foundFilm = null;
    let actors = JSON.parse(localStorage.getItem("Actors"));
    let foundActors = "";
    let genres = JSON.parse(localStorage.getItem("genres"));
    let foundGenres = "";
    let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
    for (let i = 0; i < films.length; i++) {
      if (films[i].id == hash) {
        foundFilm = films[i];
        break;
      }
    }
  
    for (let i = 0; i < foundFilm.actors.length; i++) {
      for (let a = 0; a < actors.length; a++) {
        if (actors[a].id == foundFilm.actors[i]) {
          foundActors += `<p>${actors[a].actorsName} ${actors[a].actorsSurname}</p>`;
        }
      }
    }
    for (let i = 0; i < foundFilm.genres.length; i++) {
      for (let a = 0; a < genres.length; a++) {
        if (genres[a].id == foundFilm.genres[i]) {
          foundGenres += `<div value= "${genres[a].id}">${genres[a].genre}</div>`;
        }
      }
    }
    if (foundFilm) {
      let film = ` <div class="headSection">
      <div class="firstSection">
        <h1>${foundFilm.title}</h1>
        <div class="shortInfo">
          <div class="date">${foundFilm.year}</div>
        </div>
      </div>
      <div class="lastSection">
        <h1 class="imdb"><i class="fa-solid fa-star"></i>${foundFilm.IMDb}</h1>
      </div>
    </div>
    <div class="middleSection">
      <div class="filmPortre" style="background: url(${foundFilm.poster});">
      ${
        watchList.includes(foundFilm.id)
          ? `<div class="bookMark" onclick='watchListRemove(${foundFilm.id})'>
      <i class="fa-solid fa-check"  ></i>
      <div class="layer1 "    ></div>
      <div class="layer2 active"></div>
      </div>`
          : `<div class="bookMark" onclick='watchListAdd(${foundFilm.id})'>
      <i class="fa-solid fa-plus"  ></i>
      <div class="layer1 " ></div>
      <div class="layer2 inactive" ></div>
      </div>`
      }
      </div>
  
      <div class="filmTrailer">
        <iframe
          src="https://www.youtube.com/embed/${foundFilm.src}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="bottomSection">
      <div class="genres">
        ${foundGenres}
      </div>
      <div class="filmAbout">
        <div class="about">
          <p>
           ${foundFilm.plot}
          </p>
        </div>
        <div class="director"><p>${foundFilm.director}</p></div>
        <div class="writers">
          <p>${foundFilm.writer}</p>
          
        </div>
        <div class="actors" id="actors">${foundActors}</div>
      </div>
    </div>`;
      document.getElementById("filmDetails").innerHTML = film;
    }
  }
}
filmDetailsRender()
`<iframe width="560" height="315" src="https://www.youtube.com/embed/Rb0UmrCXxVA?si=vi6hoyLNFu6tL-Bw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
`<iframe width="560" height="315" src="https://www.youtube.com/embed/-rRkmk10nIU?si=A9p_yg8Zl9j94a_9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
