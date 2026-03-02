export function initMenu() {
    const btnMenuToggle = document.getElementById('menu-toggle-btn');
    const mainNav = document.getElementById('main-nav');
    const openIcon = btnMenuToggle.querySelector('.fa-bars');
    const closeIcon = btnMenuToggle.querySelector('.fa-xmark');

    function openMenu() {
        mainNav.classList.remove('hide');
        openIcon.classList.add('hide');
        closeIcon.classList.remove('hide');
        btnMenuToggle.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // impede scroll
    }

    function closeMenu() {
        mainNav.classList.add('hide');
        openIcon.classList.remove('hide');
        closeIcon.classList.add('hide');
        btnMenuToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // restaura scroll
    }

    function toggleMenu() {
        const isExpanded = btnMenuToggle.getAttribute('aria-expanded') === 'true';
        isExpanded ? closeMenu() : openMenu();
    }

    // Toggle ao clicar no botão
    btnMenuToggle.addEventListener('click', toggleMenu);

    // Fecha ao apertar ESC
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' &&
            btnMenuToggle.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });
}