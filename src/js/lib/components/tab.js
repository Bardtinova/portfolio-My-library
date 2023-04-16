import $ from '../core';

$.prototype.tab = function() {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).on('click', () => {
            $(this[i])
                .addClass('tab-item--active')
                .siblings() // используем метод, который  ищет всех "близнецов", исключая активный элемент  
                .removeClass('tab-item--active') // удаляем у всех "близнецов" класс активности
                .closest('.tab') // ищем родителя всех "близнецов", что бы перейти к контенту
                .find('.tab-content') // ищем элементы контента
                .removeClass('tab-content--active') // удаляем у всех активный класс
                .eq($(this[i]).index()) // ищем элемент контента по индексу таба
                .addClass('tab-content--active'); // добавляем класс активности соответствующему контенту
        });
    }
}; 

$('[data-panel] .tab-item').tab();