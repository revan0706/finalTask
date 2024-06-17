sliderRender();
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 5000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 5000);
}

window.onresize = function (event) {
  reloadSlider();
};

function sliderRender() {
  let sliderFilmList = document.getElementById("sliderFilmList");
  let localFilms = JSON.parse(localStorage.getItem("Films"));
  let localGenres = JSON.parse(localStorage.getItem("genres"));
  let foundFilmList = "";

  for (let i = 0; i < localFilms.length; i++) {
    let foundGenres = ``;
    for (let a = 0; a < localGenres.length; a++) {
      for (let b = 0; b < localFilms[i].genres.length; b++) {
        if (localGenres[a].id == localFilms[i].genres[b]) {
          foundGenres += ` <p>${localGenres[a].genre}</p>`;
        }
      }
    }
    if (i <= localFilms.length) {
      foundFilmList += ` <div class="item">
    <a href="filmDetails.html#${localFilms[i].id}"> <div
       class="sliderListItemPoster"
       style="
         background: url(${localFilms[i].poster})
           left center/100% 100% no-repeat !important;
       "
       id="sliderListItemPoster"
     ></div></a>
     <div class="sliderListItemAbout" id="sliderListItemAbout">
       <div class="sliderListItemAboutHeadSection">
         <h1 class="filmTitle">${localFilms[i].title}</h1>
         <div class="filmIMDb">${localFilms[i].IMDb}<i class="fa-solid fa-star"></i></div>
       </div>
       <p class="filmPlot">
       ${localFilms[i].plot}
       </p>
       <div class="sliderListItemAboutMiddleSection">
         <div class="director">
           <p>${localFilms[i].director}</p>
         </div>
         <div class="writer">
           <p>${localFilms[i].writer}</p>
         </div>
     
           <div class="filmGenres">
          ${foundGenres}
         </div>
         
       </div>
     </div>
   </div>`;
    }
  }

  sliderFilmList.innerHTML = foundFilmList;
}

function sliderGenresRender() {}

function sliderListResonsive() {
  let films = document.getElementById("films");
  let poster = document.getElementsByClassName("sliderListItemPoster");
  let about = document.getElementsByClassName("sliderListItemAbout");
  let slider = document.getElementById("filmsSlider");
  let footer = document.querySelector("footer");
  let sliderHeight = parseInt(
    window.getComputedStyle(document.getElementById("filmsSlider")).height
  );
  let filmsHeight = parseInt(
    window.getComputedStyle(document.getElementById("films")).height
  );

  if (window.innerWidth > 440) {
    for (let i = 0; i < poster.length; i++) {
      poster[i].style.width = window.innerWidth / 3 + "px";
    }
    for (let i = 0; i < about.length; i++) {
      about[i].style.width = (window.innerWidth / 3) * 2 + "px";
    }
  }else{
    for (let i = 0; i < poster.length; i++) {
      poster[i].style.width = window.innerWidth /1.4  + "px";
    }
  }
  if (830 >= window.innerWidth && 600 < window.innerWidth) {
    slider.style.height = "450px";
  } else if (830 < window.innerWidth) {
    indexhtmlresponsive();
  } else if (600 >= window.innerWidth && 515 < window.innerWidth) {
    slider.style.height = "400px";
  } else if (515 >= window.innerWidth) {
    slider.style.height = "330px";
  }
  films.style.top = slider.style.height;
  footer.style.top = sliderHeight + filmsHeight + "px";
}

sliderListResonsive();
window.onresize = sliderListResonsive;
