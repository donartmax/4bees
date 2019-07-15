import Glide from '@glidejs/glide';

const glide = new Glide('.glide').mount()

const sliderButtons = document.querySelectorAll('.slider-button');


for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener('click', () => {
    if (document.querySelector('.slider-button.active'))
      document.querySelector('.slider-button.active').classList.remove('active');
    sliderButtons[i].classList.add('active');
    // console.log(i);
    glide.go(`=${i}`);
  });
}

var glideTech = new Glide('.technologies', {
  type: 'carousel',
  perView: 4,
  focusAt: 'center',
  breakpoints: {
    800: {
      perView: 2
    },
    480: {
      perView: 1
    }
  }
})

glideTech.mount()