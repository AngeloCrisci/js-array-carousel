console.log('JS OK')

// Elementi dal DOM
const buttonNext = document.getElementById('next')
const buttonPrev = document.getElementById('prev')
const images = document.querySelectorAll('img')

console.log(images)


// Creamo la classe active

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

// Eventi Dinamici

// Next Button

buttonNext.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
})