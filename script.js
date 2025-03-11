'use strict'

// Slider
const slider = function () {
    const slides = document.querySelectorAll('.slide');
    const btnLeft = document.querySelector('.sliderBtnLeft');
    const btnRight = document.querySelector('.sliderBtnRight');
    const dotContainer = document.querySelector('.dots');

    let curSlide = 0;
    const maxSlide = slides.length;

    // Functions
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML(
                'beforeend',
                `<button class="dots__dot" data-slide="${i}"></button>`
            );
        });
    };

    const activateDot = function (slide) {
        document
            .querySelectorAll('.dots__dot')
            .forEach(dot => dot.classList.remove('dots__dot--active'));

        document
            .querySelector(`.dots__dot[data-slide="${slide}"]`)
            .classList.add('dots__dot--active');
    };

    const goToSlide = function (slide) {
        slides.forEach(
            (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
        );
    };

    // Next slide
    const nextSlide = function () {
        if (curSlide === maxSlide - 1) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const prevSlide = function () {
        if (curSlide === 0) {
            curSlide = maxSlide - 1;
        } else {
        curSlide--;
        }
        goToSlide(curSlide);
        activateDot(curSlide);
    };

    const init = function () {
        goToSlide(0);
        createDots();

        activateDot(0);
    };
    init();

    // Event handlers
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    });

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide);
            activateDot(slide);
        }
    });
};
slider();

//ARVANTIO AND THE ODS
const tabs = document.querySelectorAll('.odsTab');
const tabsContainer = document.querySelector('.odsTabContainer');
const tabsContent = document.querySelectorAll('.odsContent');

tabsContainer.addEventListener('click', function (e) {
    const clicked = e.target.closest('.odsTab');

    // Guard clause
    if (!clicked) return;

    // Remove active classes
    tabs.forEach(t => t.classList.remove('odsTab--active'));
    tabsContent.forEach(c => c.classList.remove('odsContent--active'));

    // Activate tab
    clicked.classList.add('odsTab--active');

    // Activate content area
    document
        .querySelector(`.odsContent--${clicked.dataset.tab}`)
        .classList.add('odsContent--active');
});

////////////////////////////////////////////////////////
//

function toggleContent(index) {
    var contents = document.querySelectorAll(".faqContent");
    var buttons = document.querySelectorAll(".toggleButton");

    // Crear las imágenes para los íconos
    var iconPlus = '<img src="./assets/menuPlus.png" alt="Mostrar" width="30">';  // Ruta de la imagen para "+"
    var iconMinus = '<img src="./assets/menuMinus.png" alt="Ocultar" width="30">'; // Ruta de la imagen para "−"

    // Alternar visibilidad del contenido correspondiente
    if (contents[index].style.display === "none" || contents[index].style.display === "") {
        contents[index].style.display = "block";  // Mostrar el contenido
        buttons[index].innerHTML = iconMinus;     // Cambiar ícono a "−"
    } else {
        contents[index].style.display = "none";   // Ocultar el contenido
        buttons[index].innerHTML = iconPlus;      // Cambiar ícono a "+"
    }
}

///////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos todas las tarjetas
    const tarjetas = document.querySelectorAll(".flashcard");

    // Añadimos un event listener para cada tarjeta
    tarjetas.forEach(tarjeta => {
        tarjeta.addEventListener("click", function () {
            this.classList.toggle("volteada"); // Alternamos la clase "volteada"
        });
    });
});