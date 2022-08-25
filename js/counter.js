window.addEventListener('click', function (event) {
    // Объявляем переменную для счётчика
    let count;

    // Проверяем клик строго по кнопкам Плюс или Мин
    if(event.target.dataset.action === 'plus'|| event.target.dataset.action === 'minus') {
        // Находим обёртку счётчика
        const countInner = event.target.closest('.counter-wrapper');

        // Находит элемент с числом счётчика
        count = countInner.querySelector('[data-count]');
    }

    // Проверяет является ли дата атрибут data-action плюсом
    if(event.target.dataset.action === 'plus') {
        count.innerText = ++count.textContent;
    }

    // Проверяет является ли дата атрибут data-action минусом
    if(event.target.dataset.action === 'minus') {

       if(count.innerText > 1) {
            count.innerText = --count.textContent;

        // Проверка на товар корый находится в корзине
       } else if(event.target.closest('.shop__korzina-wrapper') && parseInt(count.innerText)) {
            // Удаляем товар из корзины
            event.target.closest('.shop__korzina-item').remove();
       }
    }
});
