import loadHomepage from './homepage';
import loadContactPage from './contact';

function makeHeader() {
   const header = document.createElement('div');
   header.classList.add('header');

   const restaurantName = document.createElement('h1');
   restaurantName.classList.add('restaurant-name');
   restaurantName.textContent = 'The Meh Diner';
   header.appendChild(restaurantName);

   header.appendChild(makeNavbar());

   return header;
}

function makeNavbar() {
   const navbar = document.createElement('div');
   navbar.classList.add('navbar');

   const homeBtn = document.createElement('button');
   homeBtn.classList.add('navbar-btn');
   homeBtn.textContent = 'Home';
   homeBtn.addEventListener('click', () => {
      activateBtn(homeBtn);
      loadHomepage();
   })

   const menuBtn = document.createElement('button');
   menuBtn.classList.add('navbar-btn');
   menuBtn.textContent = 'Menu';
   menuBtn.addEventListener('click', () => {
      activateBtn(menuBtn);
   })

   const contactBtn = document.createElement('button');
   contactBtn.classList.add('navbar-btn');
   contactBtn.textContent = 'Contact';
   contactBtn.addEventListener('click', () => {
      activateBtn(contactBtn);
      loadContactPage();
   })

   navbar.appendChild(homeBtn);
   navbar.appendChild(menuBtn);
   navbar.appendChild(contactBtn);

   return navbar;
}

function activateBtn(button) {
   const navbarBtns = document.querySelectorAll('.navbar-btn');

   navbarBtns.forEach((button) => {
      if (button !== this) {
         button.classList.remove('active');
      }
   })
   button.classList.add('active');
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

   const homeBtn = document.querySelector('.navbar-btn');
   homeBtn.classList.add('active');
}

export default makeWebsite;