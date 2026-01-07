document.querySelectorAll(".show-more-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const hiddenCards = document.getElementById(targetId);
    hiddenCards.classList.add("show");
    btn.hidden = true;
  });
});
