const buyBtn = document.querySelector(".hero__btn");
const cartBtn = document.querySelector(".header__basket-button");
const profileBtn = document.querySelector(".header__profile-button");

const buyModal = document.getElementById("buyModal");
const cartModal = document.getElementById("cartModal");
const profileModal = document.getElementById("profileModal");

function openModal(modal) {
  modal.style.display = "block";
}

function closeModal(modal) {
  modal.style.display = "none";
}

buyBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(buyModal);
});

cartBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(cartModal);
});

profileBtn?.addEventListener("click", function (e) {
  e.preventDefault();
  openModal(profileModal);
});

document.querySelectorAll(".close, .close-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const modal = this.closest(".modal");
    if (modal) closeModal(modal);
  });
});

window.addEventListener("click", function (e) {
  if (e.target.classList.contains("modal")) {
    closeModal(e.target);
  }
});
