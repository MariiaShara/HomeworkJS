'use strict';

// 1. получить объект модального окна с классом .wrap
let div = document.querySelector('.wrap');

// 2. получить тег span, используемый для закрытия окна
let span = div.querySelector('span');

// 3. получить кнопку, используемую для показа модального окна
let button = document.querySelector('button');


// 4. на кнопку показа модального окна назначить обработку
// события клика
// 4.1 при клике функция обработчик у элемента с
// классом .wrap должна удалять классы rollOut и hidden,
// элементу с классом .wrap добавить классы animated и rollIn
button.addEventListener('click', function(event) {
    div.classList.remove('hidden', 'animate__rollOut');
    div.classList.add('animate__animated', 'animate__rollIn');
});

// 5. назначить обработку клика по тегу span
// 5.1 при клике у элемента с классом .wrap удалите
// класс rollIn и добавьте класс rollOut
// 5.2 используя setTimeout через секунду элементу
// .wrap добавьте класс .hidden

span.addEventListener('click', function(event) {
    div.classList.remove('animate__rollIn');
    div.classList.add('animate__rollOut');   
    setTimeout(function(event){
        div.classList.add('hidden');
    }, 1000);
});

