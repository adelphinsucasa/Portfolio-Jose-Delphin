const formContactData = {
  name: '',
  email: '',
  message: '',
};

const newForm = document.querySelector('form');

newForm.addEventListener('keyup', (event) => {
  if (event.target.id === 'full-name') {
    formContactData.name = event.target.value;
  } else if (event.target.id === 'email') {
    formContactData.email = event.target.value;
  } else if (event.target.id === 'message') {
    formContactData.message = event.target.value;
  }

  localStorage.setItem('formContactData', JSON.stringify(formContactData));
});

window.addEventListener('load', () => {
  const oLocalStorage = JSON.parse(localStorage.getItem('formContactData'));

  if (JSON.parse(localStorage.getItem('formContactData')) === null) {
    localStorage.setItem('formContactData', JSON.stringify(formContactData));
  } else {
    newForm.elements.full_name.value = oLocalStorage.name;
    newForm.elements.email.value = oLocalStorage.email;
    newForm.elements.message.value = oLocalStorage.message;
  }
});
