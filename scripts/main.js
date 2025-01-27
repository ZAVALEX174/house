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

    // const data = [100500, 88];
    // const outputElement = document.getElementById("price");
    // outputElement.innerHTML = data.map(item => `<div class="card-content-price" id="price">${item} руб</div>`).join("");
    // updateOutput();
    const data1 = {
        item1: {
            img: '../images/img/c01.webp',
            alt: 'Охота Амура',
            author: 'Марсель Руссо',
            title: 'Охота Амура',
            materials: 'Холст, масло (50х80)',
            price: '14 500 руб',
            buttonTitle: 'В корзину',
        },
        item2: {
            img: 'images/img/c02.webp',
            alt: 'Дама с собачкой',
            author: 'Анри Селин',
            title: 'Дама с собачкой',
            materials: 'Акрил, бумага (50х80)',
            price: '16 500 руб',
            buttonTitle: 'В корзину',
        },
        item3: {
            img: 'images/img/c03.webp',
            alt: 'Процедура',
            author: 'Франсуа Дюпон',
            title: 'Процедура',
            materials: 'Цветная литография (40х60)',
            price: '20 000 руб',
            buttonTitle: 'В корзину',
        },
        item4: {
            img: 'images/img/c04.webp',
            alt: 'Роза',
            author: 'Луи Детуш',
            title: 'Роза',
            materials: 'Бумага, акрил (50х80)',
            price: '12 000 руб',
            buttonTitle: 'В корзину',
        },
        item5: {
            img: 'images/img/c05.webp',
            alt: 'Птичья трапеза',
            author: 'Франсуа Дюпон',
            title: 'Птичья трапеза',
            materials: 'Цветная литография (40х60)',
            price: '22 500 руб',
            buttonTitle: 'В корзину',
        },
        item6: {
            img: 'images/img/c06.webp',
            alt: 'Пейзаж с рыбой',
            author: 'Пьер Моранж',
            title: 'Пейзаж с рыбой',
            materials: 'Цветная литография (40х60)',
            price: '20 000 руб',
            buttonTitle: 'В корзину',
        },
    }
    const data2 = {
        item1: {
            img: '../images/img/c07.webp',
            alt: 'Над городом',
            author: 'Курт Вернер',
            title: 'Над городом',
            materials: 'Цветная литография (40х60)',
            price: '16 000 руб',
            buttonTitle: 'В корзину',
        },
        item2: {
            img: '../images/img/c08.webp',
            alt: 'Птенцы',
            author: 'Макс Рихтер',
            title: 'Птенцы',
            materials: 'Холст, масло (50х80))',
            price: '14 500 руб',
            buttonTitle: 'В корзину',
        },
        item3: {
            img: '../images/img/c09.webp',
            alt: 'Среди листьев',
            author: 'Мартин Майер',
            title: 'Среди листьев',
            materials: 'Цветная литография (40х60)',
            price: '20 000 руб',
            buttonTitle: 'В корзину',
        },
        item4: {
            img: '../images/img/c10.webp',
            alt: 'Яркая птица',
            author: 'Герман Беккер',
            title: 'Яркая птица',
            materials: 'Цветная литография (40х60)',
            price: '13 000 руб',
            buttonTitle: 'В корзину',
        },
        item5: {
            img: '../images/img/c11.webp',
            alt: 'Дятлы',
            author: 'Вульф Бауэр',
            title: 'Дятлы',
            materials: 'Бумага, акрил (50х80)',
            price: '20 000 руб',
            buttonTitle: 'В корзину',
        },
        item6: {
            img: '../images/img/c12.webp',
            alt: 'Большие воды',
            author: 'Вальтер Хартманн',
            title: 'Большие воды',
            materials: 'Бумага, акрил (50х80)',
            price: '23 000 руб',
            buttonTitle: 'В корзину',
        },
    }
    const data3 = {
        item1: {
            img: '../images/img/c13.webp',
            alt: 'Дикий зверь',
            author: 'Пол Смит',
            title: 'Дикий зверь',
            materials: 'Акварель, бумага (50х80)',
            price: '19 500 руб',
            buttonTitle: 'В корзину',
        },
        item2: {
            img: '../images/img/c14.webp',
            alt: 'Скалистый берег',
            author: 'Джон Уайт',
            title: 'Скалистый берег',
            materials: 'Цветная литография (40х60)',
            price: '17 500 руб',
            buttonTitle: 'В корзину',
        },
        item3: {
            img: '../images/img/c15.webp',
            alt: 'Река и горы',
            author: 'Джим Уотсон',
            title: 'Река и горы',
            materials: 'Акварель, бумага (50х80)',
            price: '20 500 руб',
            buttonTitle: 'В корзину',
        },
        item4: {
            img: '../images/img/c16.webp',
            alt: 'Белый попугай',
            author: 'Юджин Зиллион',
            title: 'Белый попугай',
            materials: 'Цветная литография (40х60)',
            price: '15 500 руб',
            buttonTitle: 'В корзину',
        },
        item5: {
            img: '../images/img/c17.webp',
            alt: 'Ночная рыба',
            author: 'Эрик Гиллман',
            title: 'Ночная рыба',
            materials: 'Бумага, акрил (50х80)',
            price: '12 500 руб',
            buttonTitle: 'В корзину',
        },
        item6: {
            img: '../images/img/c18.webp',
            alt: 'Рыжий кот',
            author: 'Альфред Барр',
            title: 'Рыжий кот',
            materials: 'Цветная литография (40х60)',
            price: '21 000 руб',
            buttonTitle: 'В корзину',
        },
    }

    const outputElement = document.getElementById("list1");
    const outputElement2 = document.getElementById("list2");
    const outputElement3 = document.getElementById("list3");

    if (outputElement) {
        // Преобразуем объект в массив и используем map
        outputElement.innerHTML = Object.values(data1).map(item => `<li>
        <div class="card">
            <div class="card-img-box">
                <img src="${item.img}" alt="${item.alt}"/>
            </div>
            <div class="card-content">
                <div class="card-content-author">
                    ${item.author}
                </div>
                <h2 class="h2">${item.title}</h2>
                <div class="card-content-description">
                    ${item.materials}
                </div>
                <div class="card-content-price" id="price">${item.price}</div>
                <button class="btn card-content-button">${item.buttonTitle}</button>
            </div>
        </div>
    </li>`).join("");
    }
    if (outputElement2) {
        // Преобразуем объект в массив и используем map
        outputElement2.innerHTML = Object.values(data2).map(item => `<li>
        <div class="card">
            <div class="card-img-box">
                <img src="${item.img}" alt="${item.alt}"/>
            </div>
            <div class="card-content">
                <div class="card-content-author">
                    ${item.author}
                </div>
                <h2 class="h2">${item.title}</h2>
                <div class="card-content-description">
                    ${item.materials}
                </div>
                <div class="card-content-price" id="price">${item.price}</div>
                <button class="btn card-content-button">${item.buttonTitle}</button>
            </div>
        </div>
    </li>`).join("");
    }
    if (outputElement3) {
        // Преобразуем объект в массив и используем map
        outputElement3.innerHTML = Object.values(data3).map(item => `<li>
        <div class="card">
            <div class="card-img-box">
                <img src="${item.img}" alt="${item.alt}"/>
            </div>
            <div class="card-content">
                <div class="card-content-author">
                    ${item.author}
                </div>
                <h2 class="h2">${item.title}</h2>
                <div class="card-content-description">
                    ${item.materials}
                </div>
                <div class="card-content-price" id="price">${item.price}</div>
                <button class="btn card-content-button">${item.buttonTitle}</button>
            </div>
        </div>
    </li>`).join("");
    }
});