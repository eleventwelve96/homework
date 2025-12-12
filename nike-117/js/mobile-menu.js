// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.mobile-overlay');

    if (!burger || !mobileMenu) return; // Защита от ошибок, если элементов нет

    const toggleMenu = () => {
        const isOpen = mobileMenu.classList.toggle('active');
        burger.classList.toggle('active', isOpen);
        burger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';

        if (overlay) {
            overlay.classList.toggle('active', isOpen);
        }
    };

    burger.addEventListener('click', toggleMenu);

    // Обработчик для кнопки закрытия внутри меню
    const closeBtn = document.querySelector('.mobile-menu__close');
    if (closeBtn) {
        closeBtn.addEventListener('click', toggleMenu);
    }

    overlay?.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });

    document.querySelectorAll('.mobile-menu__link').forEach(link => {
        link.addEventListener('click', toggleMenu);
    });
});