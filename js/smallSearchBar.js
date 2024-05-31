function smallSearchBarOpenClose() {
  let smallSearchBar = document.getElementById("smallSearchBar");
  let smallSearchBarTop = document.getElementById("smallSearchBar").style.top;
  smallSearchBarTop = Number(
    smallSearchBarTop.slice(0, smallSearchBarTop.length - 2)
  );
  let smallSearchBarBottom =
    document.getElementById("smallSearchBar").style.bottom;
  smallSearchBarBottom = Number(
    smallSearchBarBottom.slice(0, smallSearchBarBottom.length - 2)
  );

  if (smallSearchBar.style.visibility == "visible") {
    let close = setInterval(smallSearchBarCloseAnimation, 30);
    setTimeout(() => (smallSearchBar.style.visibility = "hidden"), 180);
  } else {
    let open = setInterval(smallSearchBarOpenAnimation, 30);
    smallSearchBar.style.visibility = "visible";
  }

  let open = setInterval(smallSearchBarOpenAnimation, 15);
  function smallSearchBarOpenAnimation() {
    if (smallSearchBarBottom == 0) {
      clearInterval(open);
    } else {
      smallSearchBarBottom -= 10;
      smallSearchBarTop += 10;
      smallSearchBar.style.bottom = smallSearchBarBottom + "px";
      smallSearchBar.style.top = smallSearchBarTop + "px";
    }
  }

  function smallSearchBarCloseAnimation() {
    if (smallSearchBarBottom == 60) {
      clearInterval(close);
    } else {
      smallSearchBarBottom += 10;
      smallSearchBarTop -= 10;
      smallSearchBar.style.bottom = smallSearchBarBottom + "px";
      smallSearchBar.style.top = smallSearchBarTop + "px";
    }
  }
}
