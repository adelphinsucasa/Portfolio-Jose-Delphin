function hasLowerCase(str) {
  const regex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;
  return regex.test(str);
}

const form = document.getElementById('contact-form');
const { email } = form.elements;
const errMsg = document.getElementById('errMsg');

// if valid, submit the form.

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!hasLowerCase(email.value)) {
    errMsg.innerHTML = 'The Email content should be in lowercase';
  } else {
    form.submit();
  }
});
