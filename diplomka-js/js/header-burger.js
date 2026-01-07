document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.querySelector(".burger-logo__button");
  const mobileMenu = document.querySelector(".burger-logo__menu");
  const closeBtn = document.querySelector(".burger-logo__menu-close");
  let overlay = document.querySelector(".mobile-overlay");
  if (!overlay) {
    overlay = document.createElement("div");
    overlay.classList.add("mobile-overlay");
    document.body.appendChild(overlay);
  }
  const openMenu = () => {
    mobileMenu?.classList.add("is-open");
    overlay?.classList.add("is-open");
    burgerBtn?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  const closeMenu = () => {
    mobileMenu?.classList.remove("is-open");
    overlay?.classList.remove("is-open");
    burgerBtn?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  if (burgerBtn && mobileMenu && closeBtn) {
    burgerBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileMenu.classList.contains("is-open")) {
        closeMenu();
      }
    });
  }
  const searchMobileBtn = document.querySelector(
    ".header__search-mobile-button"
  );
  const searchMobile = document.querySelector(".header__search-mobile");
  const searchMobileInput = document.querySelector(
    ".header__search-mobile-input"
  );
  const searchMobileClose = document.querySelector(
    ".header__search-mobile-close"
  );
  if (
    searchMobileBtn &&
    searchMobile &&
    searchMobileInput &&
    searchMobileClose
  ) {
    const openSearch = () => {
      searchMobile.classList.add("is-open");
      setTimeout(() => {
        searchMobileInput.focus();
      }, 50);
      document.body.style.overflow = "hidden";
      searchMobile.opening = true;
      setTimeout(() => {
        delete searchMobile.opening;
      }, 150);
    };
    const closeSearch = () => {
      searchMobile.classList.remove("is-open");
      document.body.style.overflow = "";
    };
    searchMobileBtn.addEventListener("click", openSearch);
    searchMobileClose.addEventListener("click", closeSearch);
    document.addEventListener("click", (e) => {
      if (searchMobile.opening) return;
      if (
        searchMobile.classList.contains("is-open") &&
        !searchMobile.contains(e.target) &&
        e.target !== searchMobileBtn
      ) {
        closeSearch();
      }
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && searchMobile.classList.contains("is-open")) {
        closeSearch();
      }
    });
  }
  const topBar = document.getElementById("topBar");
  const topBarClose = topBar?.querySelector(".top-bar__close");
  if (!topBar || !topBarClose) return;
  topBar.classList.remove("is-closed");
  document.body.classList.add("top-bar--open");
  topBarClose.addEventListener("click", () => {
    topBar.classList.add("is-closed");
    document.body.classList.remove("top-bar--open");
  });
});
