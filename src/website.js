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
   main.setAttribute('id', 'main'); // for some reason just a class doesn't work in line 39 of homepage.js

   return main;
}

function makeFooter() {
   const footer = document.createElement('div');
   footer.classList.add('footer');
   footer.textContent = 'Made with grave seriousness by Alexander Rodzyanko';

   return footer;
}

function makeWebsite() {
   const content = document.getElementById('content');
   content.appendChild(makeHeader());
   content.appendChild(makeMain());
   content.appendChild(makeFooter());
   loadHomepage();
}

export default makeWebsite;