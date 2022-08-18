window.addEventListener("load", event => {
  setTimeout(function() {
    document.querySelector(".loader").classList.add("hide");
    document.querySelector(".main-content").classList.remove("hide");
  }, 2300);
});
