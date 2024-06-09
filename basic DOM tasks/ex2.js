let click = 0; //as the count change the color changed several times

const mydiv = document.getElementById("mydiv");

mydiv.addEventListener("click", (event) => {
  click++;

  if (click === 1) {
    event.target.style.backgroundColor = "tomato";
  } else if (click === 2) {
    event.target.style.backgroundColor = "blue";
  } else if (click === 3) {
    event.target.style.backgroundColor = "pink";
    click = 0;
  }
});
