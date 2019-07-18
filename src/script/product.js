import 'lightgallery.js';

lightGallery(document.getElementById('lightgallery'));

const productButtons = document.querySelectorAll('.plan-btn');
const plans = document.querySelectorAll('.plan');
const modal = document.querySelector('.plan-modal');
const overlay = document.querySelector('.overlay');
const closeBtn = document.querySelector('.close');

for (const [index, productButton] of productButtons.entries()) {
    productButton.addEventListener('click', e => {
        e.preventDefault();
        const planDetails = plans[index].querySelector('.plan-details').innerHTML;
        showModal(planDetails);
    });
}

overlay.addEventListener('click', () => {
    // console.log('hide');
    hideModal();
});

closeBtn.addEventListener('click', () => {
    // console.log('hide');
    hideModal();
});

function showModal(html) {
    modal.querySelector('.modal-plan-info').innerHTML = html;
    modal.classList.add('show');
}

function hideModal() {
    modal.classList.remove('show');
}


// showModal(plans[0].querySelector('.plan-details').innerHTML);