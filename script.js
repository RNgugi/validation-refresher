const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//Show inputs error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

//Show Success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//check if email is valid
function isValidEamail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(username.value === '') {
     showError(username, 'You mother fucker!');
    } else{
        showSuccess(username);
    }

    if(email.value === '') {
        showError(email, 'Add a fucking email!');
    }else if(!isValidEamail(email.value)){
        showError(email, 'Add a valid email hoe!');
    }else{
        showSuccess(email);
    }

    if(password.value === '') {
    showError(password, 'Secure your account bitch!');
    } else{
        showSuccess(password);
    }

    if(password2.value === '') {
    showError(password2, 'Now make them match fool!');
    } else{
        showSuccess(password2);
    }
});
