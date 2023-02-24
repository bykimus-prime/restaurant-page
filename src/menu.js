function makeMenuPage() {
   const menuPage = document.createElement('div');
   menuPage.classList.add('menu-page');

   // starters
   const starters = document.createElement('div');
   starters.classList.add('menu-section');
   starters.textContent = 'Starters';
   menuPage.appendChild(starters);

   starters.appendChild(makeMenuItem(
      'Caesar Salad',
      'Smothered in thousand island dressing, loaded with corn, with mushrooms, asparagus. Includes half an orange in the middle and some orange slices scattered around because why not?',
      `images/caesar-salad.jpg`
   ));

   // entrees
   const entrees = document.createElement('div');
   entrees.classList.add('menu-section');
   entrees.textContent = 'Entrees';
   menuPage.appendChild(entrees);

   entrees.appendChild(makeMenuItem(
      'Birthday Chicken Sandwich',
      'Popular for birthdays! Some deli chicken slices, butter, possibly some provolone cheese, served on white bread. Impaled with candles matching your age and sparklers. We will not sing Happy Birthday because no one likes that.',
      `images/birthday-chicken-sandwich.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Butter Burger',
      'A very dry, small meat patty served with a thin slice of cold butter on a regular burger bun. Yum!',
      `images/burger.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Pepperoni Pizza',
      'Do you like sauce? Too bad, this pizza is thin crust with only pepperoni. Lots of pepperoni.',
      `images/pizza.jpg`
   ));

   entrees.appendChild(makeMenuItem(
      'Spam Wellington',
      'Imagine a glorious beef wellington, but instead of premium luxurious beef, it\'s spam.',
      `images/spam-wellington.jpg`
   ));

   // desserts
   const desserts = document.createElement('div');
   desserts.classList.add('menu-section');
   desserts.textContent = 'Desserts';
   menuPage.appendChild(desserts);

   desserts.appendChild(makeMenuItem(
      'Dessert Banana',
      'We peel a banana, slop it on a plate, and drizzle it with the cheapest strawberry syrup you can find in your grocery store.',
      ``
   ));

   return menuPage;
}

function makeMenuItem(dishName, description, foodImage) {
   const menuItem = document.createElement('div');
   menuItem.classList.add("menu-item");

   const foodName = document.createElement('p');
   foodName.textContent = dishName;

   const foodDescription = document.createElement('p');
   foodDescription.textContent = description;

   const foodPic = document.createElement('img');
   foodPic.src = foodImage;
   foodPic.alt = `A ${dishName}.`;

   menuItem.appendChild(foodPic);
   menuItem.appendChild(foodName);
   menuItem.appendChild(foodDescription);

   return menuItem;
}

function loadMenuPage() {
   const main = document.getElementById('main');
   main.textContent = ''; // gets rid of old content in the main div
   main.style.maxWidth = 'none';
   main.style.width = '100vw';
   main.style.overflow = 'scroll';
   main.style.height = 'calc(100vh - 20vh - 2rem)'
   main.appendChild(makeMenuPage());
}

export default loadMenuPage;