const recentWorksObj = [
  {
    id: "project1",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  },
  {
    id: "project2",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  },
  {
    id: "project3",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  },
  {
    id: "project4",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  },
  {
    id: "project5",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  },
  {
    id: "project6",
    name: 'Keeping track of hundreds of components',
    technologies: ['Ruby on Rails', 'css', 'Javascript', 'html'],
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint doloremque ducimus reiciendis dignissimos asperiores quis maiores atque, impedit delectus id laboriosam repellendus sit sed placeat, velit tenetur! Enim, saepe aliquid praesentium possimus facere qui corrupti velit maxime dolorum reprehenderit ullam minus, assumenda repudiandae aspernatur cupiditate cum esse commodi nam perspiciatis!",
    imageURL_desktop: './assets/images/popup/desktop-img.png',
    imageURL_mobile: './assets/images/popup/mobile-img.png',
    liveDemo: "https://chelobotix.github.io/Portafolio-Website/",
    repository: "https://github.com/chelobotix/Portafolio-Website"
  }
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

  h4.textContent = recentWorksObj.name;
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