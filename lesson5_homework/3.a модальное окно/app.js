'use strict';

// 1. получить объект модального окна с классом .wrap
let div = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
let span = div.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
let button = document.querySelector('button');

// 4. назначить обработку клика на кнопку показа модального окна
// когда функция обработчик срабатывает она должна у модального
// окна удалять класс hidden
button.addEventListener('click', function(event) {
    div.classList.remove('hidden');
});

// 5. назначить обработку клика на тег span, при клике
// в обработчике модальному окну должен быть добавлен
// класс hidden
span.addEventListener('click', function(event) {
    div.classList.add('hidden');
});