window.addEventListener("load", (event) => {
  var image = document.querySelector("#first-image-masonry");
  var load = image.complete;
  if (load === false) {
    document.getElementById("scroll-me-text").innerHTML = "Scroll me";
  }
});
