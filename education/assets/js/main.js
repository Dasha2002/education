document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.main-2-programs button');
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

