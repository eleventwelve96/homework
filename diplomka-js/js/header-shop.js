document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".js-dropdown-toggle");
  const item = toggle?.closest(".header__menu-item");
  const dropdown = item?.querySelector(".header__dropdown");

  if (!toggle || !item || !dropdown) return;

  toggle.addEventListener("click", (e) => {
    e.preventDefault(); 
    item.classList.toggle("is-open");
  });

  dropdown.querySelectorAll(".header__dropdown-link").forEach((link) => {
    link.addEventListener("click", () => {
      item.classList.remove("is-open");
    });
  });

  document.addEventListener("click", (e) => {
    if (!item.contains(e.target)) {
      item.classList.remove("is-open");
    }
  });
});
