let btnClose = document.querySelector('#btn-close');
let divHamburguer = document.querySelector('.hamburguer');
let iconHamburguer = document.querySelector('#hamburguer-icon');
let hamburguer_link = document.querySelectorAll('.hamburguer-link');


btnClose.addEventListener('click', function (event) {
  divHamburguer.classList.add('run-out');
  divHamburguer.classList.remove('run');
});

iconHamburguer.addEventListener('click', () => {
  divHamburguer.classList.add('run');
  divHamburguer.classList.remove('run-out');
});

for (let elem of hamburguer_link) {

  elem.addEventListener('click', () => {
    divHamburguer.classList.add('run-out');
    divHamburguer.classList.remove('run');
  })

}


