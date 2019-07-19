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
            const data = {
                service_id: 'default_service',
                template_id: '4bees_infopack',
                user_id: 'user_gBC0OFgBaTeHpptnyebd4',
                template_params: {
                    email
                }
            }
            const allData = JSON.stringify(data)
            const url = "https://api.emailjs.com/api/v1.0/email/send"
        
            fetch(url, {
                    method: 'POST', // or 'PUT'
                    body: allData, // data can be `string` or {object}!
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(response => {
                    alert('You will get an email shortly.');
                    debug('Success:', response)
                })
                .catch(error => {
                    alert("There was an error in submitting your email. Please try again later.")
                    console.error('Error:', error)
                });
        
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