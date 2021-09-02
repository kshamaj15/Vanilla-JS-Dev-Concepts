const form = document.getElementById('signup');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.elements);
    console.log(form.elements['name'].value);
    console.log(form.elements[1].value);
})

form.addEventListener('change', e => {
    validateField(e);
})

const validateField = element => {
    console.log(element);
    element.target.classList.add('form-control-input');
}

const validateForm = () => {
    for (let i=0; i<form.elements; i++) {
        validateField(form.elements[i]);
    }
}
