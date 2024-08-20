console.log('JS OK')

// Elementi dal DOM
const buttonNext = document.getElementById('next')
const buttonPrev = document.getElementById('prev')
const carouselJumbotron = document.getElementById('jumbotron')


// MILESTONE 1 const images = document.querySelectorAll('img')


// MILESTONE 2

const sources = ['../img/01.webp' , '02.webp' , '03.webp' , '04.webp' , '05.webp']

// Genero immagini 

let imgs = '';

for( let i = 0; i < sources.length; i++ ){
    const currentElement = sources[i];
    imgs += `<img alt= landscape-${i + 1} src="${currentElement}">`
}

carouselJumbotron.innerHTML = imgs;


// Creamo la classe active

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');

// Eventi Dinamici

// Next Button

buttonNext.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    images[currentActiveIndex].classList.add('active');
})

// Prev Button

buttonPrev.addEventListener('click' , function(){
    images[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    images[currentActiveIndex].classList.add('active');
})