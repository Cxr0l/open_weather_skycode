// Primero, obtenemos los elementos que necesitamos
const slider = document.getElementById("slider");
const leftButton = document.getElementById("buttonLeft");
const rightButton = document.getElementById("buttonRight");

console.log()

// Establecemos un contador para llevar la cuenta del contenedor actual
let currentSlide = 0;
//Declaramos el dia actual en 1
let cd = 1
// Función que se encarga de mostrar el contenedor actual
function showSlide() {
  // Obtenemos todos los contenedores del slider
  const slides = slider.getElementsByClassName("slider-section1");

 

  // Movemos los contenedores horizantalmente
  /*for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }*/
}

// Función que se ejecuta al hacer clic en el botón de la izquierda
function slideLeft() {
  // Restamos 1 al contador
  currentSlide--;

  // Si llegamos al primer contenedor, volvemos al último
   if (currentSlide < 0) {
    currentSlide = slider.getElementsByClassName("slider-section1").length - 1;
  } 


  
  /**
   * Buscamos el slider que tenga la clase active y sacamos el valor de dia (data-day).
   * Luego pasamos a enter y le sumamos uno, en caso de ser 0, colocamos cd en 7.
   * Luego buscamos el slider donde el data-day correponda con la resta anterior y le
   * agregamos la clase active, para que se muestre, y al elemento actual se la quitamos
   */
      let currect_slider = document.querySelector('.slider-section1.active').getAttribute('data-day');
          document.querySelector('.slider-section1.active').classList.remove('active');
      let cd = (parseInt(currect_slider)-1);
          if(cd == "0"){
            cd = 7;
          }
      let act_nest_slider = document.querySelector('div[data-day="'+cd+'"]').classList.add('active');
      


  // Mostramos el contenedor actual
  showSlide();
}

// Función que se ejecuta al hacer clic en el botón de la derecha
function slideRight() {
  // Sumamos 1 al contador
  currentSlide++;
  
  /**
   * Buscamos el slider que tenga la clase active y sacamos el valor de dia (data-day).
   * Luego pasamos a enter y le sumamos uno, en caso de ser 8, colocamos cd en 1.
   * Luego buscamos el slider donde el data-day correponda con la suma anterior y le
   * agregamos la clase active, para que se muestre, y al elemento actual se la quitamos
   */
      let currect_slider = document.querySelector('.slider-section1.active').getAttribute('data-day');
          document.querySelector('.slider-section1.active').classList.remove('active');
      let cd = (parseInt(currect_slider)+1);
      if(cd == "8"){
        cd = 1;
      }
      let act_nest_slider = document.querySelector('div[data-day="'+cd+'"]').classList.add('active');
      


  // Si llegamos al último contenedor, volvemos al primero
  if (currentSlide >= slider.getElementsByClassName("slider-section1").length) {
    currentSlide = 0;
  }

  // Mostramos el contenedor actual
  showSlide();
}

// Asignamos las funciones a los eventos de clic de los botones
leftButton.addEventListener("click", slideLeft);
rightButton.addEventListener("click", slideRight);

// Mostramos el primer contenedor al cargar la página
showSlide();