import { debug } from './utilities';

const form = document.querySelector('.form-infopack');
const formInput = document.querySelector('.form-infopack input');
let submited = false;

if(form){

    form.addEventListener('submit', (e) => {
        const email = formInput.value;
        e.preventDefault();
        if(validateEmail(email) && !submited) {
            debug('email nice!');
            form.classList.add('sucess');
            form.querySelector('button').innerText = "Great! Thank you."
            submited = true;
        }
        else{
            form.classList.add('error');
        }
    })


}

function validateEmail(email) {
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regex.test(email);
};

// form.classList.add('sucess');