const modal = document.getElementById("buyModal");
const btn = document.querySelector(".hero__btn");
const closeButtons = document.querySelectorAll(".close, .close-btn");

btn.onclick = function (e) {
  e.preventDefault();
  modal.style.display = "block";
};

closeButtons.forEach((button) => {
  button.onclick = function () {
    modal.style.display = "none";
  };
});

window.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
