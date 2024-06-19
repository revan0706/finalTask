function indexhtmlresponsive() {
  let slider = document.getElementById("filmsSlider");
  let films = document.getElementById("films");
  let localFilms = JSON.parse(localStorage.getItem("Films"));
  let footer = document.querySelector("footer");
  let sliderHeight;
  if (Boolean(localFilms.length)) {
    sliderHeight = parseInt(
      window.getComputedStyle(document.getElementById("filmsSlider")).height
    );
  } else {
    sliderHeight = 0;
  }
  let filmsHeight = parseInt(
    window.getComputedStyle(document.getElementById("films")).height
  );
  if (Boolean(localFilms.length)) {
    slider.style.height = window.innerHeight + "px";
  }
  films.style.top = slider.style.height;
  footer.style.top = sliderHeight + filmsHeight + "px";
}
indexhtmlresponsive();
