import $ from '../core';

$.prototype.html = function(content) {  // вывод/замена контента элемента node 
    for (let i = 0; i < this.length; i++) {
        if (content) {
            this[i].innerHTML = content;
        } else {
            return this[i].innerHTML;
        }
    }

    return this;
};

$.prototype.eq = function(i) { // получение элемента по индексу
   const swap = this[i];
   const objLength = Object.keys(this).length;

   for (let i = 0; i < objLength; i++) {
    delete this[i];
   }
    this[0] = swap;
    this.length = 1;
    return this;
};

$.prototype.index = function() { // получение индекса элемента
    const parent = this[0].parentNode;
    const childs = [...parent.children];

    const findMyIndex = (item) => {
        return item == this[0];
    };

    return childs.findIndex(findMyIndex);
};

$.prototype.find = function(selector) { // получение элемнта по селектору от одного родителя
    let numberOfItems = 0; // общее количесво элементов по селектору
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].querySelectorAll(selector);
        if (arr.length == 0) {
            continue;
        }

        for (let j = 0; j < arr.length; j++) {
            this[counter] = arr[j];  //перезаписываем this
            counter++;
        }

        numberOfItems += arr.length;
    }

    this.length = numberOfItems;
    const objLength = Object.keys(this).length; // первоночальное количество элементов

    for (; numberOfItems < objLength; numberOfItems++) { // отсечение элементов, не соответствующих селектору("хвост")
        delete this[numberOfItems];
    }

    return this;
};

$.prototype.closest = function(selector) {
    let counter = 0; // подсчитывает кол элементов, которые взаимодействовали с closest

    for (let i = 0; i < this.length; i++) {
        if (this[i].closest(selector)) { // проверка на наличие родителя
            this[i] = this[i].closest(selector);
            counter++;
        } else {
            console.log(`This parent DOM element is not found on ${this[i]}`);
            return this;
        }
    }
    const objLength = Object.keys(this).length; // первоночальное количество элементов,преобразуем в массив
    for (; counter < objLength; counter++) { // отсечение элементов, у которых нет closest ("хвост")
        delete this[counter];
    }

    return this;
};

$.prototype.siblings = function() { // получение всех соседей родительского блока, исключая сам элемент, на котором будет произведено действие
    let numberOfItems = 0; // общее количесво элементов 
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;

        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }

            this[counter] = arr[j];  //перезаписываем this
            counter++;
        }

        numberOfItems += arr.length-1;
    }

    this.length = numberOfItems;
    const objLength = Object.keys(this).length; // первоночальное количество элементов
    for (; numberOfItems < objLength; numberOfItems++) { // отсечение элементов, не соответствующих селектору("хвост")
        delete this[numberOfItems];
    }

    return this;
};