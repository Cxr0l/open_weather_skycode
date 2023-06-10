const slider = document.querySelector("#slider");

let sliderSection = document.querySelectorAll(".slider-section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#buttonLeft");
const btnRight = document.querySelector("#buttonRight");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s"; // corrección de tipeo aquí
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("beforeend", sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    let sliderSectionLast = sliderSection[sliderSection.length -1]; // utiliza la variable global sliderSection
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s"; // corrección de tipeo aquí
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement("afterbegin", sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}