window.addEventListener("load", function () {
  setTimeout(function () {
    const jTitle = document.querySelector(".jTitle");
    jTitle.classList.add("visible");
  }, 1200);

  setTimeout(function () {
    const quote = document.querySelector(".quote");
    quote.classList.add("visible");
  }, 1500); // Slightly after the jTitle becomes visible
});
