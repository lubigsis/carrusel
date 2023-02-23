//-----------------------------------------------------------------referencio variables
const slider = document.querySelector('#sliderJS');
let sliderSection = document.querySelectorAll('.slider-seccion');
let sliderSectionLast = sliderSection[sliderSection.length -1]; //p/obtener la última img del slider y ponerlo internamente al ppio. x si se hace el primer click a la izq.
const btnRight = document.querySelector('#btn-derechoJS');
const btnLeft = document.querySelector('#btn-izquierdoJS');


//--------------------tomo al último elemento del slider y lo coloco al ppio. del slider 'después de empezar el slider' (manejo interno de JS)
slider.insertAdjacentElement('afterbegin', sliderSectionLast);


//---------------------------------------------------------------------FUNCIONES------------------------

function moverDerecha(){
    let sliderSectionFirst = document.querySelectorAll('.slider-seccion')[0];//obtengo el primero
    slider.style.marginleft = '-200%'; //ver CSS 
    slider.style.transition = 'all 0.5s';

    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginleft = '-100%';

    }, 500); //el equivalente a medio minuto q' coloqué arriba.
}

btnRight.addEventListener('click', function(){
    moverDerecha();
});