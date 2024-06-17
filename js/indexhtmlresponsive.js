function indexhtmlresponsive() {
  let slider = document.getElementById("filmsSlider");
  let films = document.getElementById("films");
  let footer = document.querySelector("footer");
  let sliderHeight = parseInt(
    window.getComputedStyle(document.getElementById("filmsSlider")).height
  );
  let filmsHeight = parseInt(
    window.getComputedStyle(document.getElementById("films")).height
  );
  slider.style.height = window.innerHeight + "px";
  console.log(sliderHeight)
  films.style.top = slider.style.height;
  footer.style.top = sliderHeight + filmsHeight + "px";
}
indexhtmlresponsive();

