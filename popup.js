const recentWorksObj = [
  {
    id: 'project1',
    name: 'Portfolio Jose Delphin',
    technologies: ['HTML', 'CSS', 'Javascript', 'Github'],
    description: 'It is a website to show my projects to the world. Through this website I will show my main skills as a full stack developer.',
    imageURL_desktop: './assets/images/popup/Portfolio_desktop.jpg',
    imageURL_mobile: './assets/images/popup/Portfolio_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/Portfolio-Jose-Delphin/',
    repository: 'https://github.com/adelphinsucasa/Portfolio-Jose-Delphin',
  },
  {
    id: 'project2',
    name: 'Capstone Project',
    technologies: ['HTML', 'CSS', 'Javascript', 'Github'],
    description: 'The Capstone project is a website to show a Web Coures Availability also is a way to show one of my works and let others know about How looks a project developed with my new skill HTML-CSS-JavaScript.',
    imageURL_desktop: './assets/images/popup/CapstoneProject_desktop.jpg',
    imageURL_mobile: './assets/images/popup/CapstoneProject_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/Capstone-Project/',
    repository: 'https://github.com/adelphinsucasa/Capstone-Project',
  },
  {
    id: 'project3',
    name: 'Awesome Books',
    technologies: ['HTML', 'CSS', 'Javascript', 'Github'],
    description: 'Awesome Books with ES6 is a website to get control of a books list. This website allows add or remove books and display each one of them.',
    imageURL_desktop: './assets/images/popup/AwesomeBooks_desktop.jpg',
    imageURL_mobile: './assets/images/popup/AwesomeBooks_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/Awesome-Books-with-ES6/',
    repository: 'https://github.com/adelphinsucasa/Awesome-Books-with-ES6',
  },
  {
    id: 'project4',
    name: 'To-Do-List',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'To Do List is a website to control all the tasks added to a list. The website allows add or remove tasks, display each one of them and select when a task is done.',
    imageURL_desktop: './assets/images/popup/ToDoList_desktop.jpg',
    imageURL_mobile: './assets/images/popup/ToDoList_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/To-Do-List/dist/',
    repository: 'https://github.com/adelphinsucasa/To-Do-List',
  },
  {
    id: 'project5',
    name: 'Leaderboard',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'The leaderboard website displays scores submitted by different players. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.',
    imageURL_desktop: './assets/images/popup/Leaderboard_desktop.jpg',
    imageURL_mobile: './assets/images/popup/Leaderboard_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/Leaderboard/dist/',
    repository: 'https://github.com/adelphinsucasa/Leaderboard',
  },
  {
    id: 'project6',
    name: 'Capstone Project with Kanban board',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: 'The Capstone Project is a website that use an API to list a group of cards with Game of Throne Characters, and other API to manage likes and comments of users. Aditional it was built using Kanban board with filled-in tasks that have categories and time estimations to assign work in group.',
    imageURL_desktop: './assets/images/popup/JSCapstone_desktop.jpg',
    imageURL_mobile: './assets/images/popup/JSCapstone_mobile.jpg',
    liveDemo: 'https://adelphinsucasa.github.io/Capstone-Project-with-Kanban-board/dist/',
    repository: 'https://github.com/adelphinsucasa/Capstone-Project-with-Kanban-board',
  },
];

// Heading Section
const sectionWorks = document.querySelector('.section_works');
const recentWorksDiv = document.createElement('div');
const h2 = document.createElement('h2');

recentWorksDiv.classList.add('recent_works_div');
h2.textContent = 'My Recent Works';
recentWorksDiv.appendChild(h2);
sectionWorks.appendChild(recentWorksDiv);

// Card Section
const cardRow = document.createElement('div');
for (let i = 0; i < recentWorksObj.length; i += 1) {
  const article = document.createElement('article');
  const placeholder = document.createElement('img');
  const cardContainer1 = document.createElement('div');
  const h4 = document.createElement('h4');
  const ul = document.createElement('ul');
  const buttonDiv = document.createElement('div');
  const button = document.createElement('button');

  cardRow.classList.add('card_row');
  placeholder.classList.add('placeholder');
  cardContainer1.classList.add('card_container1');
  buttonDiv.classList.add('div_button');
  button.classList.add('btn_see_projects');
  button.classList.add('btn_effects');
  button.id = recentWorksObj[i].id;

  if (window.matchMedia('(max-width: 767px)').matches) {
    placeholder.src = recentWorksObj[i].imageURL_mobile;
  } else {
    placeholder.src = recentWorksObj[i].imageURL_desktop;
  }

  h4.textContent = recentWorksObj[i].name;
  button.textContent = 'See Projects';
  button.type = 'button';

  let aux = '';
  for (let j = 0; j < recentWorksObj[i].technologies.length; j += 1) {
    aux += `<div><li>${recentWorksObj[i].technologies[j]}</li></div>`;
  }
  ul.innerHTML = aux;
  buttonDiv.appendChild(button);
  cardContainer1.appendChild(h4);
  cardContainer1.appendChild(ul);
  cardContainer1.appendChild(buttonDiv);
  article.appendChild(placeholder);
  article.appendChild(cardContainer1);
  cardRow.appendChild(article);
}
sectionWorks.appendChild(cardRow);

// Modal

const btnSeeProjects = document.querySelectorAll('.btn_see_projects');
const btnClose2 = document.querySelector('.close');
const blur = document.querySelector('.blur');
const bodyTag = document.querySelector('body');
const ulModal = document.querySelector('ul.modal-project');

function createModal(index) {
  const imgModal = document.querySelector('img.modal-project');
  const h3Modal = document.querySelector('h3.modal-project');
  const btn1Modal = document.querySelectorAll('.modal-btn1');
  const btn2Modal = document.querySelectorAll('.modal-btn2');
  const pModal = document.querySelector('p.modal-project');

  if (window.matchMedia('(max-width: 767px)').matches) {
    imgModal.src = recentWorksObj[index].imageURL_mobile;
  } else {
    imgModal.src = recentWorksObj[index].imageURL_desktop;
  }

  h3Modal.textContent = recentWorksObj[index].name;

  btn1Modal.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = recentWorksObj[index].liveDemo;
    });
  });

  btn2Modal.forEach((btn) => {
    btn.addEventListener('click', () => {
      window.location.href = recentWorksObj[index].repository;
    });
  });

  recentWorksObj[index].technologies.forEach((tech) => {
    const newLi = document.createElement('li');
    newLi.textContent = tech;

    ulModal.appendChild(newLi);

    newLi.classList.add('liModal');
  });
  if (window.matchMedia('(max-width: 767px)').matches) {
    ulModal.removeChild(ulModal.lastChild);
  } else {
    btnClose2.textContent = 'X';
  }

  pModal.textContent = recentWorksObj[index].description;
}

function showModal() {
  blur.classList.remove('invisible');
  bodyTag.style.overflow = 'hidden';
}

btnSeeProjects.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    createModal(index);
    showModal();
  });
});

btnClose2.addEventListener('click', () => {
  ulModal.innerHTML = '';
  blur.classList.add('invisible');
  bodyTag.style.overflow = 'auto';
});