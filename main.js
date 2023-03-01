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

    setTimeout(function(){  /*Esto es pq no puedo hacer los estilos de arriba a la misma vez*/
        slider.style.transition = 'none'; /*se la saco la transición pq este movimiento, de pasar de ser la primera img a la última, es interno. El user no ve este funcionamiento interno*/
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);/*posición donde coloco internamente la img uno (antes q termine el slider)*/
        slider.style.marginleft = '-100%'; /*c/este valor se lo regresa a la normalidad, a su verdadero tamaño*/

    }, 500); //el equivalente a medio minuto q' coloqué arriba.
}




function moverIzquierda(){
    let sliderSection = document.querySelectorAll('.slider-seccion');/*tengo q' volver a declarar las variables pq c/vez q' se da un click, ese elemento varía*/
    let sliderSectionLast = sliderSection[sliderSection.length -1];

    slider.style.marginleft = '0'; 
    slider.style.transition = 'all 0.5s';

    setTimeout(function(){  
        slider.style.transition = 'none'; 
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginleft = '-100%'; 

    }, 500); 
}



btnRight.addEventListener('click', function(){
    moverDerecha();
});


btnLeft.addEventListener('click', function(){
    moverIzquierda();
});


/*------------------------------------para hacer el slider manual--------------------------*/
setInterval(function(){
    moverDerecha();
}, 5000); /*5"*/