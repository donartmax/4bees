import './maps';

import { debug } from './utilities';

const form = document.querySelector('.form-contact');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    debug('form submit');

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;

    const data = {
        service_id: 'default_service',
        template_id: '4bees_contact',
        user_id: 'user_gBC0OFgBaTeHpptnyebd4',
        template_params: {
            name,
            email,
            message
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
            alert('Message sent!');
            document.querySelector('#name').value = "";
            document.querySelector('#email').value = "";
            document.querySelector('#message').value = "";
            debug('Success:', response)
        })
        .catch(error => {
            alert("There was an error in sending your message. Please try again later.")
            console.error('Error:', error)
        });

});