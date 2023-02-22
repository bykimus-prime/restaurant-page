function makeHomepage() {
   const homepage = document.createElement('div');
   homepage.classList.add('homepage');

   const aboutSection = document.createElement('div');
   aboutSection.classList.add('about-section');
   homepage.appendChild(aboutSection);

   aboutSection.appendChild(createP('We have... okay food, I guess?'));
   aboutSection.appendChild(createP('Come try some of our edible dishes.'));

   const hoursSection = document.createElement('div');
   hoursSection.classList.add('hours-section');
   homepage.appendChild(hoursSection);

   const hours = document.createElement('h3');
   hours.textContent = 'Hours';
   hoursSection.appendChild(hours);
   hoursSection.appendChild(createP('Monday: 10:00 - 17:00'));
   hoursSection.appendChild(createP('Tuesday: Closed'));
   hoursSection.appendChild(createP('Wednesday: 10:00 - 17:00'));
   hoursSection.appendChild(createP('Thursday: 10:00 - 17:00'));
   hoursSection.appendChild(createP('Friday: 10:00 - 17:00'));
   hoursSection.appendChild(createP('Saturday: 10:00 - 17:00'));
   hoursSection.appendChild(createP('Sunday: 10:00 - 17:00'));

   return homepage;
}

function createP(text) {
   const paragraph = document.createElement('p');
   paragraph.textContent = text;

   return paragraph;
}

function loadHomepage() {
   const main = document.getElementById('main');
   main.textContent = ''; // gets rid of old content in the main div
   main.appendChild(makeHomepage());
}

export default loadHomepage;