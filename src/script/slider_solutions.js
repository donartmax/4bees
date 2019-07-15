import Glide from '@glidejs/glide';

const glide = new Glide('.glide').mount()

const sliderButtons = document.querySelectorAll('.slider-button');

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener('click', (e) => {
    e.preventDefault();
    if (document.querySelector('.slider-button.active'))
      document.querySelector('.slider-button.active').classList.remove('active');
    sliderButtons[i].classList.add('active');
    // console.log(i);
    glide.go(`=${i}`);
  });
}

const path = window.location.pathname;
let solution = path.split('/');
solution = solution[solution.length - 1]

const solutions = ['business', 'mobile', 'applications', 'outsourcing', 'design', 'digital-marketing'];

const index = solutions.indexOf(solution);

if (index !== -1) 
  slideTo(index);
  
function slideTo(index) {
  if (document.querySelector('.slider-button.active'))
    document.querySelector('.slider-button.active').classList.remove('active');
  sliderButtons[index].classList.add('active');
  // console.log(i);
  glide.go(`=${index}`);
}