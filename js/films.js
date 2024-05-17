function filmsRender() {
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let x = `<a href="createFilm.html"   target="_blank"><div class="createFilm"  ><i class="fa-solid fa-plus"></i></div></a>`;
  for (let i = 0; i < films.length; i++) {
    x += `<div class="film">
    ${
      watchList.includes(films[i].id)
        ? `<div class="bookMark" onclick='watchListRemove(${films[i].id})'>
    <i class="fa-solid fa-check"  ></i>
    <div class="layer1 "    ></div>
    <div class="layer2 active"></div>
    </div>`
        : `<div class="bookMark" onclick='watchListAdd(${films[i].id})'>
    <i class="fa-solid fa-plus"  ></i>
    <div class="layer1 " ></div>
    <div class="layer2 inactive" ></div>
    </div>`
    }
     
    
      <a href="filmDetails.html#${films[i].id}"><div class="photo"><img src="${
      films[i].poster
    }" alt="" /></div></a>
      <div class="imdb"><i class="fa-solid fa-star"></i>${films[i].IMDb}</div>
      <div class="name">${films[i].title}</div>
    </div>`;
    console.log(films[i].id);
  }
  document.getElementById("films").innerHTML = x;
}

filmsRender();
