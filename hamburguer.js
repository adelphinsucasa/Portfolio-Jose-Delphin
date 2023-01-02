let btnClose = document.querySelector('#btn-close');
let divHamburguer = document.querySelector('.hamburguer');
let iconHamburguer = document.querySelector('#hamburguer-icon');
let hamburguer_link = document.querySelectorAll('.hamburguer-link');


btnClose.addEventListener('click', function (event) {
  divHamburguer.classList.add('invisible');
});

iconHamburguer.addEventListener('click', () => {
  divHamburguer.classList.add('visible');
  divHamburguer.classList.remove('invisible');
});

for (let elem of hamburguer_link) {

  elem.addEventListener('click', () => {
    divHamburguer.classList.add('invisible');
    divHamburguer.classList.remove('visible');
  })

}


