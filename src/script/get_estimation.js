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
    debug(activeIndex);
    
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let phoneNumber = document.querySelector('#phone-number').value;
    let description = document.querySelector('#description').value;
    
    // form input
    if(activeIndex === 2){
        if(name.trim().length === 0 || email.trim().length === 0 || description.trim().length === 0){
            debug('NIJE POPUNJENO NESTO');
            document.querySelector('.alert-danger').classList.remove('d-none')
            return;
        }
    }
    activeIndex++;

    if (activeIndex < partsCount)
        setActive(activeIndex);

    
    if (activeIndex == partsCount - 1) {
        estimationBtn.style.display = 'none';
        debug('Finished form');

        const types = getSelected(1)
        const scopes = getSelected(2)

       
        name = document.querySelector('#name').value;
        email = document.querySelector('#email').value;
        phoneNumber = document.querySelector('#phone-number').value;
        description = document.querySelector('#description').value;

        const data = {
            service_id: 'default_service',
            template_id: '4bees_get_estimation',
            user_id: 'user_gBC0OFgBaTeHpptnyebd4',
            template_params: {
                name,
                email,
                phoneNumber,
                description,
                types,
                scopes
            }
        }
        const allData = JSON.stringify(data)
        const url = "https://api.emailjs.com/api/v1.0/email/send"
        console.log(allData);
       
        return;
        fetch(url, {
                method: 'POST', // or 'PUT'
                body: allData, // data can be `string` or {object}!
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(response => console.log('Success:', response))
            .catch(error => {
                alert("There was an error in sending your details. Please try again later.")
                console.error('Error:', error)
            });

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


function getSelected(index) {
    let selected = [];
    document.querySelectorAll(`.part-${index} input:checked`).forEach((input) => {
        selected.push(input.attributes["name"].value);
    });
    return selected.join(', ');
}