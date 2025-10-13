document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openBtn = document.querySelector('.btn-open');
    const closeBtn = document.querySelector('.modal__close-btn');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.display = 'flex';
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});