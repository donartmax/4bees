import Glide from '@glidejs/glide';

import './granim';

const sliderButtons = document.querySelectorAll('.slider-button');

const glide = new Glide('.glide')


glide.on('run.before', () => {
    sliderButtons[glide.index].classList.remove('active');

})

glide.on('run', () => {
    sliderButtons[glide.index].classList.add('active');
})

glide.mount();

sliderButtons[0].classList.add('active');

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', (e) => {
        e.preventDefault();
        glide.go(`=${i}`);
    });
}



const glideTestimonials = new Glide('.glider-testimonials', {
    autoplay: 3000,
}).mount()