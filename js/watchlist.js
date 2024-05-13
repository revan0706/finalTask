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
    setTimeout(() => (watchList.style.visibility = "hidden"), 375);
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
    if (right == 20) {
      clearInterval(open);
    } else {
      right += 10;
      watchList.style.right = right + "px";
    }
  }
}

function watchListAdd(filmID) {
  let watchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  watchList.push(filmID);
  localStorage.setItem("watchList", JSON.stringify(watchList));
  filmsRender();
  watchListRender();
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
  watchListRender();
}

function watchListRender() {
  let localWatchList = JSON.parse(localStorage.getItem("watchList") || "[]");
  let films = JSON.parse(localStorage.getItem("Films") || "[]");
  let watchList = document.getElementById("list");
  let newWatchList = "<div class='watchListTitle'><h1>Watch List</h1></div>";

  for (let i = 0; i < localWatchList.length; i++) {
    for (let a = 0; a < films.length; a++) {
      if (localWatchList[i] == films[a].id) {
        newWatchList += ` <div class="added">
      <div class="foto"><img src="${films[a].poster}" alt="" /></div>
      <div class="about">
        <div class="name">${films[a].title}</div>
        <div class="imdb"><i class="fa-solid fa-star"></i>${films[a].IMDb}</div>
        <div class="buttons">
          <div class="deleteBtn" onclick="watchListRemove(${films[a].id})">REMOVE</div>
        </div>
      </div>
    </div>`;
      }
    }
  }

  watchList.innerHTML = newWatchList;
}

watchListRender();
