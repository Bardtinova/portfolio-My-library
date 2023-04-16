import $ from '../core';

$.prototype.carousel = function() {
    for (let i = 0 ;i < this.length; i++) {
        const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;// получаем длину слайда
        const slides = this[i].querySelectorAll('.carousel-item'); // сами слайды
        const slidesField = this[i].querySelector('.carousel-slides'); //обёртка слайдов
        const dots = this[i].querySelectorAll('.carousel-indicators li'); // индикаторы

        slidesField.style.width = 100 * slides.length + '%'; // длина всех слайдов
        slides.forEach(slide => {
            slide.style.width = width; // всем слайдам устанавливаем длину
        });

        let offset = 0; // смещение
        let slideIndex = 0; // индекс сдайда

        $(this[i].querySelector('[data-slide="next"]')).click((e) => { // стрелка вправо
            e.preventDefault();
            if (offset == (+width.replace(/\D/g, '') * (slides.length - 1))) { // если offset = длине всех слайдов - переходим к первому
                offset = 0;
            } else {
                offset += +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`; // смещение слайдов

            if (slideIndex == slides.length - 1) { // индикаторы
                slideIndex = 0;
            } else {
                slideIndex++;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        $(this[i].querySelector('[data-slide="prev"]')).click((e) => { // стрелка влево
            e.preventDefault();
            if (offset == 0) { // если первый слайд, то переходим на последний
                offset = +width.replace(/\D/g, '') * (slides.length - 1);
            } else {
                offset -= +width.replace(/\D/g, '');
            }

            slidesField.style.transform = `translateX(-${offset}px)`; // смещаемся влево

            if (slideIndex == 0) { // индикаторы
                slideIndex = slides.length - 1;
            } else {
                slideIndex--;
            }
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });

        const sliderId = this[i].getAttribute('id'); // работа с индикаторами
        $(`#${sliderId} .carousel-indicators li`).click(e => { // получение индикатора
            const slideTo = e.target.getAttribute('data-slide-to'); //индикатор, на который кликнули (получаем его индекс по data атрибуту)

            slideIndex = slideTo;
            offset = +width.replace(/\D/g, '') * slideTo; // определение величины сдвига слайда

            slidesField.style.transform = `translateX(-${offset}px)`;// сдвиг слайда
            dots.forEach(dot => dot.classList.remove('active'));
            dots[slideIndex].classList.add('active');
        });
        
        
    }
};

$('.carousel').carousel();
