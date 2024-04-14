const delay = 2000; //tempo em segundos de mudança

const slides = document.querySelector(".slides"); //selecionando a classe slides e transformando em uma const
const slidesCount = slides.childElementCount; // retorna o numero de elementos slides
const maxLeft = (slidesCount - 1) * 100 * -1; // retorna o quanto o carrosel pode ir para esquerda

let current = 0; // estado que monitora qual slide mostrar

function changeSlide(next = true) { // função q muda o carrosel
  if (next) {
    current += current > maxLeft ? -100 : current * -1;
  } else {
    current = current < 0 ? current + 100 : maxLeft;
  }

  slides.style.left = current + "%"; 
}

let autoChange = setInterval(changeSlide, delay); 
const restart = function() {
  clearInterval(autoChange);
  autoChange = setInterval(changeSlide, delay);
};


document.querySelector(".next-slide").addEventListener("click", function() {
  changeSlide();
  restart();
});

document.querySelector(".prev-slide").addEventListener("click", function() {
  changeSlide(false);
  restart();
});

AOS.init(); //animações
