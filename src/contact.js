function makeContactPage() {
   const contactPage = document.createElement('div');
   contactPage.classList.add('contact-page');

   const contactBlurb = document.createElement('p');
   contactBlurb.textContent = 'If you made the mistake in eating our food and are now experiencing anything negative at all, please contact the appropriate emergency number for your region.';

   const phoneNum = document.createElement('p');
   phoneNum.textContent = 'Otherwise, for reservations please call: 555-555-5555';

   const shopAddress = document.createElement('p');
   shopAddress.textContent = 'Address: 123 Street, Star Building 1st Floor, Seattle, Washington 999-9999';

   contactPage.appendChild(contactBlurb);
   contactPage.appendChild(phoneNum);
   contactPage.appendChild(shopAddress);

   return contactPage;
}

function loadContactPage() {
   const main = document.getElementById('main');
   main.textContent = ''; // gets rid of old content in the main div
   main.style.maxWidth = '600px';
   main.style.removeProperty('width');
   main.style.removeProperty('overflow-y');
   main.style.height = '50vh'
   main.appendChild(makeContactPage());
}

export default loadContactPage;