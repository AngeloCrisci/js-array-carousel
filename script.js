console.log('JS OK')

// Elementi dal DOM
const buttonNext = document.getElementById('next')
const buttonPrev = document.getElementById('prev')
const carouselJumbotron = document.getElementById('jumbotron')
const thumbnailsJumbotron = document.getElementById('thumbnails')

// MILESTONE 2

const sources = ['/img/01.webp' , '/img/02.webp' , '/img/03.webp' , '/img/04.webp' , '/img/05.webp']

// Genero immagini 

let imgs = '';

for( let i = 0; i < sources.length; i++ ){
    const currentElement = sources[i];
    imgs += `<img alt= landscape-${i + 1} src="${currentElement}">`
}

carouselJumbotron.innerHTML = imgs;
thumbnailsJumbotron.innerHTML = imgs;

const images = document.querySelectorAll('#carousel img')
const thumb = document.querySelectorAll('#thumbnails img')

// Creamo la classe active

let currentActiveIndex = 0;
images[currentActiveIndex].classList.add('active');
thumb[currentActiveIndex].classList.add('active');

// Eventi Dinamici

// Next Button

buttonNext.addEventListener('click', function(){
    images[currentActiveIndex].classList.remove('active');
    thumb[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;

    if (currentActiveIndex === images.length ){
        currentActiveIndex = 0;
    }

    images[currentActiveIndex].classList.add('active');
    thumb[currentActiveIndex].classList.add('active');
})

// Prev Button

buttonPrev.addEventListener('click' , function(){
    images[currentActiveIndex].classList.remove('active');
    thumb[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;

    if (currentActiveIndex < 0 ){
        currentActiveIndex = images.length - 1;
    }

    images[currentActiveIndex].classList.add('active');
    thumb[currentActiveIndex].classList.add('active');
})