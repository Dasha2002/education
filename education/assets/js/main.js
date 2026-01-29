document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки и все блоки с информацией
    const buttons = document.querySelectorAll('.main-2-programs button');
    const infoBlocks = document.querySelectorAll('.info-block');

    // Добавляем обработчик клика на каждую кнопку
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            // Убираем класс 'active' у всех кнопок
            buttons.forEach(btn => btn.classList.remove('active'));
            // Добавляем класс 'active' только нажатой кнопке
            button.classList.add('active');

            // Убираем класс 'active' у всех информационных блоков
            infoBlocks.forEach(block => block.classList.remove('active'));

            // Определяем, какой блок нужно показать, и показываем его
            const buttonClass = button.className.split(' ')[0]; // Берем первый класс, например 'main-2-btn-prog-college'
            const targetBlockClass = buttonClass.replace('btn-prog-', 'inf-'); // Получаем 'main-2-inf-college'
            const targetBlock = document.querySelector('.' + targetBlockClass);
            
            if (targetBlock) {
                targetBlock.classList.add('active');
            }
        });
    });
});