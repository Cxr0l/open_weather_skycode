// const slider = document.querySelector("#slider");

// let sliderSection = document.querySelectorAll(".slider-section1");
// if (sliderSection.length > 0) {
//   let sliderSectionLast = sliderSection[sliderSection.length -1];
//   slider.insertAdjacentElement("afterbegin", sliderSectionLast);
// }

// const btnLeft = document.querySelector("#buttonLeft");
// const btnRight = document.querySelector("#buttonRight");

// function next() {
//   let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
//   if (sliderSectionFirst) {
//     slider.style.marginLeft = "-200%";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function() {
//       slider.style.transition = "none";
//       slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//       slider.style.marginLeft = "-100%";
//     }, 500);
//   }
// }

// function prev() {
//   let sliderSection = document.querySelectorAll(".slider-section");
//   let sliderSectionLast = sliderSection[sliderSection.length -1];
//   if (sliderSectionLast) {
//     slider.style.marginLeft = "0";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function() {
//       slider.style.transition = "none";
//       slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//       slider.style.marginLeft = "-100%";
//     }, 500);
//   }
// }

// btnRight.addEventListener("click", function() {
//   next();
// })

// btnLeft.addEventListener("click", function() {
//   prev();
// })


// Primero, obtenemos los elementos que necesitamos
const slider = document.getElementById("slider");
const leftButton = document.getElementById("buttonLeft");
const rightButton = document.getElementById("buttonRight");


let currentSlide = 0;

function showSlide() {
  const slides = slider.getElementsByClassName("slider-section1");

  // Movemos los contenedores horizantalmente
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function slideLeft() {
  currentSlide--;


  if (currentSlide < 0) {
    currentSlide = slider.getElementsByClassName("slider-section1").length - 1;
  }

  
  showSlide();
}


function slideRight() {
  // Sumamos 1 al contador
  currentSlide++;

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