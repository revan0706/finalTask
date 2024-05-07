// let films = [
//   {
//     id: 1,
//     imdb: 9.2,
//     title: "Fallout",
//   },
//   {
//     id: 2,
//     imdb: 3.2,
//     title: "out",
//   },
// ];

// localStorage.setItem("Films", JSON.stringify(films));

function filmsRender() {
  let films = JSON.parse(localStorage.getItem("Films"));
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let x = `<div class="createFilm"  ><a href="createFilm.html"   target="_blank"><i class="fa-solid fa-plus"></i></a></div>`;
  for (let i = 0; i < films.length; i++) {
    x += `<div class="film">
    
      <div class="bookMark" onclick='watchList${
        watchList.includes(films[i].id) ? "Remove" : "Add"
      }(${films[i].id})'>
      <i class="fa-solid fa-plus"  ></i>
      <div class="layer1" ></div>
      <div class="layer2"  ></div>
      </div>
      <div class="photo"><img src="${films[i].poster}" alt="" /></div>
      <div class="imdb"><i class="fa-solid fa-star"></i>${films[i].IMDb}</div>
      <div class="name">${films[i].title}</div>
    </div>`;
    console.log(films[i].title);
  }
  document.getElementById("films").innerHTML = x;
}

filmsRender();
