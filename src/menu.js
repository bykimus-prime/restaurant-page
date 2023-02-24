function makeMenuPage() {
   const menuPage = document.createElement('div');
   menuPage.classList.add('menu-page');

   // starters
   const starters = document.createElement('div');
   starters.classList.add('menu-section');
   menuPage.appendChild(starters);
   starters.appendChild(makeSectionTitle('Starters'));

   starters.appendChild(makeMenuItem(
      'Caesar Salad, $10',
      'Smothered in thousand island dressing, loaded with corn, with mushrooms, asparagus. Includes half an orange in the middle and some orange slices scattered around because why not?',
      `images/caesar-salad.jpg`
   ));

   // entrees
   const entrees = document.createElement('div');
   entrees.classList.add('menu-section');
   menuPage.appendChild(entrees);
   entrees.appendChild(makeSectionTitle('Entrees'));

   entrees.appendChild(makeMenuItem(
      'Birthday Chicken Sandwich, $25',
      'Popular for birthdays! Some deli chicken slices, butter, possibly some provolone cheese, served on white bread. Impaled with candles matching your age and sparklers. We will not sing Happy Birthday because no one likes that.',
      `images/birthday-chicken-sandwich.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Butter Burger, $20',
      'A very dry, small meat patty served with a thin slice of cold butter on a regular burger bun. Yum!',
      `images/burger.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Pepperoni Pizza, $30',
      'Do you like sauce? Too bad, this pizza is thin crust with only pepperoni. Lots of pepperoni.',
      `images/pizza.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Spam Wellington, $40',
      'Imagine a glorious beef wellington, but instead of premium luxurious beef, it\'s spam.',
      `images/spam-wellington.jpg`
   ));

   // desserts
   const desserts = document.createElement('div');
   desserts.classList.add('menu-section');
   menuPage.appendChild(desserts);
   desserts.appendChild(makeSectionTitle('Desserts'));

   desserts.appendChild(makeMenuItem(
      'Chocolate Chip Cookies, $10',
      'Chocolate chip cookies but we forgot to add chocolate chips. So... just cookies.',
      `images/cookies.jpg`
   ));

   return menuPage;
}

function makeMenuItem(dishName, description, foodImage) {
   const menuItem = document.createElement('div');
   menuItem.classList.add("menu-item");
   const menuItemPWrapper = document.createElement('div');
   menuItemPWrapper.classList.add('menu-item-p-wrapper');

   const foodName = document.createElement('p');
   foodName.textContent = dishName;

   const foodDescription = document.createElement('p');
   foodDescription.textContent = description;

   const foodPic = document.createElement('img');
   foodPic.src = foodImage;
   foodPic.alt = `A ${dishName}.`;

   menuItem.appendChild(foodPic);
   menuItem.appendChild(menuItemPWrapper);
   menuItemPWrapper.appendChild(foodName);
   menuItemPWrapper.appendChild(foodDescription);

   return menuItem;
}

function makeSectionTitle(titleName) {
   const sectionTitle = document.createElement('p');
   sectionTitle.classList.add('section-title');
   sectionTitle.textContent = titleName;

   return sectionTitle;
}

function loadMenuPage() {
   const main = document.getElementById('main');
   main.textContent = ''; // gets rid of old content in the main div
   main.style.maxWidth = 'none';
   main.style.width = '100vw';
   main.style.overflowY = 'scroll';
   main.style.height = 'calc(100vh - 20vh - 2rem)'
   main.appendChild(makeMenuPage());
}

export default loadMenuPage;