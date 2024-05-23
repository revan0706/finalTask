function actorsRender() {
  let actors = JSON.parse(localStorage.getItem("Actors") || "[]");
  let actorsList = document.getElementById("actorList");
  let emptyActorListTitle = document.getElementById("emptyActorListTitle");
  let newActorList = "";

  if (actors.length) {
    actorsList.style.display = "grid";
    emptyActorListTitle.style.display = "none";
    for (let i = 0; i < actors.length; i++) {
      newActorList += `<div class="actor">
      <div class="foto">
        <img
          src="${actors[i].actorsImg}"
          alt=""
        />
      </div>
      <div class="about"><p>${actors[i].actorsName} ${actors[i].actorsSurname}</p></div>
    </div>`;
    }
    actorsList.innerHTML = newActorList;
  } else {
    actorsList.style.display = "grid";
    emptyActorListTitle.style.display = "block";
  }
}

function creatActors(e) {
  let actors = JSON.parse(localStorage.getItem("Actors") || "[]");
  let actorName = document.getElementById("actorsName");
  let actorSurname = document.getElementById("actorsSurname");
  let actorImg = document.getElementById("actorsImg");

  let maksActorID = 0;

  for (let i = 0; i < actors.length; i++) {
    if (actors[i].id > maksActorID) {
      maksActorID = actors[i].id;
    }
  }

  let newActor = {
    id: maksActorID + 1,
    actorsName: actorName.value,
    actorsSurname: actorSurname.value,
    actorsImg: actorImg.value,
  };
  actors.push(newActor);

  localStorage.setItem("Actors", JSON.stringify(actors));

  actorsRender();
  e.preventDefault();
}

actorsRender();
