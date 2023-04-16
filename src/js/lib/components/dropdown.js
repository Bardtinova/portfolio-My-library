import $ from '../core'; // создание раскрывающегося меню и пользовательского интерфейса

$.prototype.dropdown = function() {
    for (let i = 0; i < this.length; i++) {  // пербираем все this (все раскрывающиеся списки)
        const id = this[i].getAttribute('id'); // находим нужный элемент по id
        $(this[i]).click(() => { //кликаем по выбранному элементу
            $(`[data-toggle-id="${id}"]`).fadeToggle(300); //сравниваем по уникальному идентификатору и вызываем метод fadeToggle
        });
    }
};

$('.dropdown-toggle').dropdown(); //вызов функции на кнопке