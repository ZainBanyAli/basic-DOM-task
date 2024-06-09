const mydiv = document.getElementById("mydiv");

mydiv.addEventListener("mouseover", (event) => {
  event.target.textContent = "can i help you ";
});

mydiv.addEventListener("mouseout", (event) => {
  event.target.textContent = "Hello world";
});
