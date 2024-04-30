let films = [
  {
    id: 1,
    imdb: 9.2,
    title: "Fallout",
  },
  {
    id: 2,
    imdb: 3.2,
    title: "out",
  },
];

localStorage.setItem("Films", JSON.stringify(films));
function watchListOpenClose() {
  const watchListBtn = document.getElementById("watchListBtn");
  const watchList = document.getElementById("watchList");
  let right = document.getElementById("watchList").style.right;
  right = Number(right.slice(0, right.length - 2));

  if (watchList.style.visibility == "hidden") {
    watchList.style.visibility = "visible";
    let open = setInterval(watchListOpenAnimation, 15);
  } else {
    let close = setInterval(watchListCloseAnimation, 15);
    setTimeout(() => (watchList.style.visibility = "hidden"), 450);
  }
  function watchListCloseAnimation() {
    const watchList = document.getElementById("watchList");
    if (right == -250) {
      clearInterval(close);
    } else {
      right -= 10;
      watchList.style.right = right + "px";
    }
  }
  function watchListOpenAnimation() {
    const watchList = document.getElementById("watchList");
    if (right == 0) {
      clearInterval(open);
    } else {
      right += 10;
      watchList.style.right = right + "px";
    }
  }
}

function filmsRender() {
  let films = JSON.parse(localStorage.getItem("Films"));
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let x = "";
  for (let i = 0; i < films.length; i++) {
    x += `<div class="film">
  
    <div class="bookMark" onclick='watchList${
      watchList.includes(films[i].id) ? "Remove" : "Add"
    }(${films[i].id})'>
    <i class="fa-solid fa-plus"  ></i>
    <div class="layer1" ></div>
    <div class="layer2"  ></div>
    </div>
    <div class="photo"><img src="imgs/fallout.jpg" alt="" /></div>
    <div class="imdb"><i class="fa-solid fa-star"></i>${films[i].imdb}</div>
    <div class="name">${films[i].title}</div>
  </div>`;
  }
  document.getElementById("films").innerHTML = x;
}

function watchListAdd(filmID) {
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  watchList.push(filmID);
  localStorage.setItem("watchList", JSON.stringify(watchList));
  filmsRender();
}
function watchListRemove(filmID) {
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let newList = [];
  for (let i = 0; i < watchList.length; i++) {
    if (watchList[i] != filmID) {
      newList.push(watchList[i]);
    }
  }
  localStorage.setItem("watchList", JSON.stringify(newList));
  filmsRender();
}

function watchListRender() {
  let localWatchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let watchList = document.getElementById("list");
  let newWatchList = "<div class='watchListTitle'><h1>Watch List</h1></div>";

  for (let i = 0; i < localWatchList.length; i++) {
    for (let a = 0; a < films.length; a++) {
      newWatchList += ` <div class="added">
    <div class="foto"><img src="imgs/fallout.jpg" alt="" /></div>
    <div class="about">
      <div class="name">${films[a].title}</div>
      <div class="imdb"><i class="fa-solid fa-star"></i>${films[a].imdb}</div>
      <div class="buttons">
        <div class="deleteBtn" onclick="watchListRemove(${films[a].id})">REMOVE</div>
      </div>
    </div>
  </div>`;
    }
  }
  

  watchList.innerHTML = newWatchList;
}
watchListRender();
filmsRender();
watchListRender();
