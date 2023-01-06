const form = document.getElementById('contact-form');
const email = form.elements['email'];
const errMsg = document.getElementById('errMsg');
const btnSubmit = form.elements['btnSubmit'];

// if valid, submit the form.

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!hasLowerCase(email.value)){
        errMsg.innerHTML = 'The Email content should be in lowercase'; 
    }else{
        form.submit();
    }
  });

function hasLowerCase(str) {
    const regex =/^[a-z\-0-9\.\*\#\$\!\~\%\^\&\-\+\?\|]+@+[a-z\-0-9]+(.com)$/;  
    return regex.test(str); 
}