import Glide from '@glidejs/glide';
import { debug } from './utilities';

const glide = new Glide('.glide')

glide.on('run.before', () => {
  debug('prev i', glide.index);
  sliderButtons[glide.index].classList.remove('active');

})

glide.on('run', () => {
  debug(glide.index);
  sliderButtons[glide.index].classList.add('active');
})

glide.mount();


const sliderButtons = document.querySelectorAll('.slider-button');

for (let i = 0; i < sliderButtons.length; i++) {
  sliderButtons[i].addEventListener('click', (e) => {
    e.preventDefault();
    glide.go(`=${i}`);
  });
}





const path = window.location.pathname;
let solution = path.split('/');
solution = solution[solution.length - 1]

const solutions = ['business', 'mobile', 'applications', 'outsourcing', 'design', 'digital-marketing'];

const index = solutions.indexOf(solution);

if (index !== -1) 
glide.go(`=${index}`);
  