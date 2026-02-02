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