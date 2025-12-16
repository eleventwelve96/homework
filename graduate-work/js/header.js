// header.js
export { };

const topBar = document.getElementById('topBar');
const header = document.querySelector('header');

if (topBar && header) {
    const topBarHeight = topBar.offsetHeight; // высота баннера после рендера

    // Устанавливаем отступ при загрузке
    header.style.setProperty('--header-top-offset', `${topBarHeight}px`);

    // При закрытии баннера — убираем отступ
    const closeButton = topBar.querySelector('.top-bar__close');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            // Скрываем баннер
            topBar.setAttribute('aria-hidden', 'true');
            topBar.style.opacity = '0';
            topBar.style.transform = 'translateY(-100%)';

            // Убираем отступ у шапки
            header.style.setProperty('--header-top-offset', '0px');
        });
    }
}