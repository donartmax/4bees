import {
    debug
} from './utilities';

const estimationBtn = document.querySelector('#estimation-next');
const estimationParts = document.querySelectorAll(".part");

let activeIndex = 0;
const partsCount = estimationParts.length;

debug(estimationParts);

estimationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let types = [];
    let scopes = [];
    activeIndex++;

    if (activeIndex < partsCount)
        setActive(activeIndex);

    if (activeIndex == partsCount - 1) {
        estimationBtn.style.display = 'none';
        debug('Finished form');

        const types = getSelected(1);
        const scopes = getSelected(2);

        

        debug(types);
        debug(scopes);
    }
})

function setActive(index) {
    debug(`Part: ${index}/${partsCount}`);
    const activePart = document.querySelector('.part.active')
    if (activePart) {
        activePart.classList.remove('active');
    }
    estimationParts[index].classList.add('active');
}


function getSelected(index){
    let selected = [];
    document.querySelectorAll(`.part-${index} input:checked`).forEach((input) => {
        selected.push(input.attributes["name"].value);
    });
    return selected.join(', ');
}