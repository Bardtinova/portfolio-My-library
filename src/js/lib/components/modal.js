import $ from '../core';

$.prototype.modal = function(created) {
    let paddingOffsetNow = window.innerWidth - document.body.offsetWidth; // расчитываем ширину полосы прокрутки, что б модалка "не прыгала"
    for (let i = 0; i < this.length; i++) { // перебираем все модальные окна
        const target = this[i].getAttribute('data-target'); // определяем какое модальное окно нужно открыть
        $(this[i]).click((e) => { // назначаем обработчик события,ранее прописанную функцию click()
            e.preventDefault(); // т.к. может быть кнопка или ссылкаб нужно отменить стандартное поведение браузера
            $(target).fadeIn(500);
            document.body.style.overflow = 'hidden'; // отменяем прокрутку страницы при вызове модального окна
            document.body.style.marginRight = paddingOffsetNow; 
        });

        const closeElements = document.querySelectorAll(`${target} [data-close]`); //все элементы,которые отвечают за закрытие модальных окон
        closeElements.forEach(elem => {
            $(elem).click(() => {
                $(target).fadeOut(500); //скрываем модальное окно
                if (created) {
                    document.querySelector(target).remove();
                }
                setTimeout(() => {
                    document.body.style.overflow = ''; // показываем страницу
                    document.body.style.marginRight = '0px';
                }, 500);
                
            });
        });

        $(target).click(e => {
            if (e.target.classList.contains('modal')) {
                $(target).fadeOut(500); //скрываем модальное окно
                if (created) {
                    document.querySelector(target).remove();
                }
                setTimeout(() => {
                    document.body.style.overflow = ''; // показываем страницу
                    document.body.style.marginRight = '0px';
                }, 500);
                
            }
        });
    }
}; 

$('[data-toggle="modal"]').modal(); //инициализация функции modal по эл-ту data-toggle="modal"

//динамическое создание элементов на странице
//вызываем модальное окно на определённых элементах, которое чётко привязано к этому триггеру
$.prototype.createModal = function({text, btns} = {}) {
    for (let i = 0; i < this.length; i++) {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));

        //btns = {count: num, settings: [[text, classNames=[], close, cb]]}
        const buttons = []; // генирирование кнопок на модалке согласно структуре выше
        for (let j = 0; j < btns.count; j++) {
            let btn = document.createElement('button');
            btn.classList.add('btn', ...btns.settings[j][1]);
            btn.textContent = btns.settings[j][0];
            if (btns.settings[j][2]) {
                btn.setAttribute('data-close', 'true');
            }
            if (btns.settings[j][3] && typeof(btns.settings[j][3]) === 'function') {
                btn.addEventListener('click', btns.settings[j][3]);
            }
            buttons.push(btn);
        }

        modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${text.title}
                    </div>
                </div>
                <div class="modal-body">
                        ${text.body}
                </div>
                <div class="modal-footer">
                    
                </div>
            </div>
        </div>
        `;

        modal.querySelector(".modal-footer").append(...buttons); //развернём наш массив на каждый элемент, который поместится в блок "modal-footer"
        document.body.appendChild(modal); // помещаем модальное окно на странице
        $(this[i]).modal(true); // подвязываем триггер
        $(this[i].getAttribute('data-target')).fadeIn(500); // вызываем на странице
    }
}; 