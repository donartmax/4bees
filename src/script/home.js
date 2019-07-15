import Glide from '@glidejs/glide';

import './granim';


const glide = new Glide('.glide').mount()

const sliderButtons = document.querySelectorAll('.slider-button');
sliderButtons[0].classList.add('active');

for (let i = 0; i < sliderButtons.length; i++) {
    sliderButtons[i].addEventListener('click', (e) => {
        e.preventDefault();
        slideTo(i);
    });
}

function slideTo(index) {
    if (document.querySelector('.slider-button.active'))
        document.querySelector('.slider-button.active').classList.remove('active');
    sliderButtons[index].classList.add('active');
    // console.log(i);
    glide.go(`=${index}`);
}

const glideTestimonials = new Glide('.glider-testimonials', {
    autoplay: 3000,
}).mount()