document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.nav-programs button');
    const infoBlocks = document.querySelectorAll('.info-block');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            infoBlocks.forEach(block => block.classList.remove('active'));

            const buttonClass = button.className.split(' ')[0];
            const targetBlockClass = buttonClass.replace('btn-prog-', 'inf-');
            const targetBlock = document.querySelector('.' + targetBlockClass);
            
            if (targetBlock) {
                targetBlock.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Находим секцию, чтобы скрипт работал только здесь
    const section = document.querySelector('.it-2');
    if (!section) return;

    const buttons = section.querySelectorAll('.nav-programs button');
    const blocks = section.querySelectorAll('.block-it-3');

    function showBlocks(level) {
        blocks.forEach(block => {
            if (level === 'all') {
                block.classList.remove('hidden');
            } else {
                // Проверяем, есть ли у блока нужный класс
                if (block.classList.contains(`level-${level}`)) {
                    block.classList.remove('hidden');
                } else {
                    block.classList.add('hidden');
                }
            }
        });
    }

    section.querySelector('.nav-programs').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            // Переключаем активную кнопку
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Показываем нужные блоки
            const level = event.target.dataset.level;
            showBlocks(level);
        }
    });
});


//Свайпер для отзывов

document.addEventListener('DOMContentLoaded', function () {
    
    if (window.innerWidth > 500) {
        const reviewsSwiper = new Swiper('.main-5-reviews-swiper', {
            loop: true,
            spaceBetween: 20,
            slidesPerView: 2.5,
            
            navigation: {
                nextEl: '.btn-rigth',
                prevEl: '.btn-left',
            },

            
            breakpoints: {
                
                768: {
                    slidesPerView: 2.2,
                },
                
                1200: {
                    slidesPerView: 2.5,
                }
            }
        });
    } 
});


// Блок вопросы
document.addEventListener('DOMContentLoaded', function() {
    // Находим все блоки с вопросами
    const questions = document.querySelectorAll('.main-6 .question');

    // Добавляем обработчик клика на каждый вопрос
    questions.forEach(question => {
        question.addEventListener('click', function() {
            // Проверяем, если кликаемый вопрос уже активен
            const isActive = this.classList.contains('active');

            // Сначала закрываем все вопросы
            questions.forEach(q => {
                q.classList.remove('active');
                // Возвращаем всем кнопкам картинку "вниз"
                const btnImg = q.querySelector('button img');
                if (btnImg) {
                    // Заменяем на вашу картинку для закрытого состояния
                    btnImg.src = 'assets/img/Button (1).svg'; 
                }
            });

            // Если кликнутый вопрос не был активен, открываем его
            if (!isActive) {
                this.classList.add('active');
                // Меняем картинку у открытого вопроса на "вверх"
                const activeBtnImg = this.querySelector('button img');
                if (activeBtnImg) {
                    // Заменяем на вашу картинку для открытого состояния
                    activeBtnImg.src = 'assets/img/Button.svg';
                }
            }
        });
    });
});


// Свайпер для партнеров

document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth > 500) {
        new Swiper('.block-main-9', {
            slidesPerView: 'auto',
            spaceBetween: 20,
            loop: true,
            centeredSlides: true,

            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },

            speed: 4000,
            allowTouchMove: false,
        });
    }
});


// Кнопка для перехода с главной страницы на страницу информационные технологии
    document.addEventListener('DOMContentLoaded', function() {
        
        const itButton = document.querySelector('.it');

        if (itButton) {
            itButton.addEventListener('click', function() {
                window.location.href = 'it.php';
            });
        }
    });



// popap блок
document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.querySelector('.btn-open-popap');
    const closePopupBtn = document.querySelector('.btn-close');
    const popup = document.querySelector('.popap');
    const body = document.body;

    let scrollPosition = 0;

    function openPopup() {

        scrollPosition = window.scrollY;

        body.classList.add('modal-open');

        body.style.top = `-${scrollPosition}px`;

        popup.classList.add('active');
    }

    function closePopup() {

        body.classList.remove('modal-open');

        body.style.top = '';

        window.scrollTo(0, scrollPosition);

        popup.classList.remove('active');
    }

    if (openPopupBtn) {
        openPopupBtn.addEventListener('click', openPopup);
    }

    if (closePopupBtn) {
        closePopupBtn.addEventListener('click', closePopup);
    }

    // Закрытие по клику на фон
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // Закрытие по клавише Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
});