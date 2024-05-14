if (location.hash) {
  let hash = Number(location.hash.slice(1, location.hash.length));
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let foundFilm = null;

  for (let i = 0; i < films.length; i++) {
    if (films[i].id == hash) {
      foundFilm = films[i];
      break;
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
    <div class="filmPortre">
      <img
        src="${foundFilm.poster}"
        alt=""
      />
    </div>

    <div class="filmTrailer">
      <iframe
        src="${foundFilm.src}"
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
      <div>action</div>
      <div>Adventure</div>
      <div>Drama</div>
    </div>
    <div class="filmAbout">
      <div class="about">
        <p>
         ${foundFilm.plot}
        </p>
      </div>
      <div class="director"><p>${foundFilm.director}</p></div>
      <div class="writers">
        <p>asd</p>
        <p>dsa</p>
      </div>
    </div>
  </div>`;
    console.log(foundFilm);
    document.getElementById("filmDetails").innerHTML = film;
  }
}
