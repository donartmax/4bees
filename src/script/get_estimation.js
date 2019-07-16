const estimationBtn = document.querySelector('#estimation-next');


estimationBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let types = [];

    document.querySelectorAll('.part-1 input:checked').forEach((input) => {
        types.push(input.attributes["name"].value);
    });

    types = types.join(', ');

    console.log(types)
    
    
})