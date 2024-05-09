let a = [
  {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  },
  {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  }, {
    id: 1,
    actorsName: "Rami Malek",
    actorsImg:
      "https://tr.web.img3.acsta.net/pictures/15/08/25/17/32/376414.jpg",
  },
];

localStorage.setItem("Actors", JSON.stringify(a));

function actorsRender() {
  let actors = JSON.parse(localStorage.getItem("Actors"));
  let actorsList = document.getElementById("actorList");
  let newActorList = "";

  for (let i = 0; i < actors.length; i++) {
    newActorList += `<div class="actor">
    <div class="foto">
      <img
        src="${actors[i].actorsImg}"
        alt=""
      />
    </div>
    <div class="about"><p>${actors[i].actorsName}</p></div>
  </div>`;
  }
  actorsList.innerHTML = newActorList;
}

actorsRender();
