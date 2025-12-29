document.addEventListener("DOMContentLoaded", () => {
  const prevBtn = document.querySelector(".reviews-section__nav_prev");
  const nextBtn = document.querySelector(".reviews-section__nav_next");
  const reviews = [
    {
      author: "Виталий У.",
      verified: true,
      text: "«Я в восторге от качества и стиля одежды, которую получил от Shop.co. От повседневных вещей до элегантных платьев — каждая покупка превзошла мои ожидания.»",
    },
    {
      author: "Даниил В.",
      verified: true,
      text: "«Раньше было трудно найти одежду под мой стиль, пока я не открыл Shop.co. Их ассортимент впечатляет и подходит для разных вкусов и случаев.»",
    },
    {
      author: "Альберт Б.",
      verified: true,
      text: "«Я всегда ищу уникальные модные вещи и был рад открыть для себя Shop.co. Их выбор одежды очень разнообразен и полностью соответствует последним модным трендам.»",
    },
    {
      author: "Мария К.",
      verified: true,
      text: "«Отличный сервис и быстрая доставка! Одежда пришла в идеальном состоянии, как на фото. Рекомендую всем!»",
    },
    {
      author: "Иван П.",
      verified: true,
      text: "«Широкий выбор, удобный сайт и отличная поддержка. Покупаю здесь уже третий сезон — никогда не разочаровывался.»",
    },
  ];
  const starSVG = `
        <svg width="22" height="21" viewBox="0 0 22 21" fill="#FFC633" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.737 0L13.9355 6.8872L21.4739 7.80085L15.9122 12.971L17.3728 20.4229L10.737 16.731L4.10121 20.4229L5.56179 12.971L5.72205e-05 7.80085L7.53855 6.8872L10.737 0Z"/>
        </svg>
    `.trim();
  const fiveStars = Array(5).fill(starSVG).join("");
  const verifiedSVG = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="#01ab31" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.75 0C7.82164 0 5.93657 0.571828 4.33319 1.64317C2.72982 2.71451 1.48013 4.23726 0.742179 6.01884C0.00422452 7.80042 -0.188858 9.76082 0.187348 11.6521C0.563554 13.5434 1.49215 15.2807 2.85571 16.6443C4.21928 18.0079 5.95656 18.9365 7.84787 19.3127C9.73919 19.6889 11.6996 19.4958 13.4812 18.7578C15.2627 18.0199 16.7855 16.7702 17.8568 15.1668C18.9282 13.5634 19.5 11.6784 19.5 9.75C19.4973 7.16498 18.4692 4.68661 16.6413 2.85872C14.8134 1.03084 12.335 0.00272983 9.75 0ZM14.0306 8.03063L8.78063 13.2806C8.71097 13.3504 8.62826 13.4057 8.53721 13.4434C8.44616 13.4812 8.34857 13.5006 8.25 13.5006C8.15144 13.5006 8.05385 13.4812 7.9628 13.4434C7.87175 13.4057 7.78903 13.3504 7.71938 13.2806L5.46938 11.0306C5.32865 10.8899 5.24959 10.699 5.24959 10.5C5.24959 10.301 5.32865 10.1101 5.46938 9.96937C5.61011 9.82864 5.80098 9.74958 6 9.74958C6.19903 9.74958 6.3899 9.82864 6.53063 9.96937L8.25 11.6897L12.9694 6.96937C13.0391 6.89969 13.1218 6.84442 13.2128 6.8067C13.3039 6.76899 13.4015 6.74958 13.5 6.74958C13.5986 6.74958 13.6961 6.76899 13.7872 6.8067C13.8782 6.84442 13.9609 6.89969 14.0306 6.96937C14.1003 7.03906 14.1556 7.12178 14.1933 7.21283C14.231 7.30387 14.2504 7.40145 14.2504 7.5C14.2504 7.59855 14.231 7.69613 14.1933 7.78717C14.1556 7.87822 14.1003 7.96094 14.0306 8.03063Z"/>
        </svg>
    `.trim();
  let currentIndex = 1;
  const createReviewCard = (review, state) => `
        <div class="review-card review-card_state_${state}">
            <div class="review-card__stars">${fiveStars}</div>
            <div class="review-card__author">
                ${review.author}
                ${review.verified ? verifiedSVG : ""}
            </div>
            <div class="review-card__text">${review.text}</div>
        </div>
    `;
  const updateSlots = () => {
    const leftSlot = document.querySelector(".review-card-slot_position_left");
    const centerSlot = document.querySelector(
      ".review-card-slot_position_center"
    );
    const rightSlot = document.querySelector(
      ".review-card-slot_position_right"
    );
    if (!leftSlot || !centerSlot || !rightSlot) return;
    const total = reviews.length;
    const leftIndex = (currentIndex - 1 + total) % total;
    const rightIndex = (currentIndex + 1) % total;
    leftSlot.innerHTML = createReviewCard(reviews[leftIndex], "prev");
    centerSlot.innerHTML = createReviewCard(reviews[currentIndex], "active");
    rightSlot.innerHTML = createReviewCard(reviews[rightIndex], "next");
  };
  prevBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
    updateSlots();
  });
  nextBtn?.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % reviews.length;
    updateSlots();
  });
  updateSlots();
});
