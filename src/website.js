import loadHomepage from './homepage';

function makeHeader() {
   const header = document.createElement('div');
   header.classList.add('header');

   const restaurantName = document.createElement('h1');
   restaurantName.classList.add('restaurant-name');
   restaurantName.textContent = 'The Meh Diner';
   header.appendChild(restaurantName);

   return header;
}

function makeMain() {
   const main = document.createElement('div');
   main.classList.add('main');
   main.setAttribute('id', 'main');

   return main;
}

function makeWebsite() {
   const content = document.getElementById('content');
   content.appendChild(makeHeader());
   content.appendChild(makeMain())
   loadHomepage();
}

export default makeWebsite;