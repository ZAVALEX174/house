document.addEventListener("DOMContentLoaded", () => {
    // burger menu
    const burgerMenu = document.getElementById('burger');
    const headerMenu = document.getElementById('nav');
    const burgerMenuOpenBtn = document.getElementById('burger-open');
    const burgerMenuCloseBtn = document.getElementById('burger-close');
    const basket = document.getElementById('basket');
    const headerNav = document.querySelector('.header__nav');
    const headerNavLinks = headerNav.querySelectorAll('li a');
    console.log(burgerMenu, headerMenu, headerNavLinks);

    function openBurgerMenu() {
        headerNav.classList.add('header__nav_open');
        burgerMenuOpenBtn.classList.remove('burger__btn_open');
        burgerMenuCloseBtn.classList.remove('none');
        basket.classList.add('none');
        document.body.style.overflowY = 'hidden';
    }

    function closeBurgerMenu() {
        document.body.style.overflowY = '';
        headerNav.classList.remove('header__nav_open');
        burgerMenuOpenBtn.classList.add('burger__btn_open');
        burgerMenuCloseBtn.classList.add('none');
        basket.classList.remove('none');

    }

    if (burgerMenu && headerMenu && burgerMenuOpenBtn && burgerMenuCloseBtn && basket && headerNav && headerNavLinks) {
        burgerMenuOpenBtn.addEventListener('click', openBurgerMenu);
        burgerMenuCloseBtn.addEventListener('click', closeBurgerMenu);
        headerNavLinks.forEach(link => {
            link.addEventListener('click', closeBurgerMenu);
        })
    } else {
        console.error('Один из элементов не найден');
    }


    // tabs
    const tabs = document.querySelector('.tabs');
    const tabButtons = tabs.querySelectorAll('.tabs__nav-btn');
    const tabContents = tabs.querySelectorAll('.tabs__item');

    function switchTab(event) {
        const targetTab = event.target.dataset.tab;

        tabButtons.forEach(button => button.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        event.target.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', switchTab);
    });
});