(()=>{"use strict";function e(e){const t=document.createElement("p");return t.textContent=e,t}!function(){const t=document.getElementById("content");t.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("h1");return t.classList.add("restaurant-name"),t.textContent="The Meh Diner",e.appendChild(t),e}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("main"),e.setAttribute("id","main"),e}()),t.appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e.textContent="Made with grave seriousness by Alexander Rodzyanko",e}()),document.getElementById("main").appendChild(function(){const t=document.createElement("div");t.classList.add("homepage");const n=document.createElement("div");n.classList.add("about-section"),t.appendChild(n),n.appendChild(e("We have... okay food, I guess?")),n.appendChild(e("Come try some of our edible dishes."));const d=document.createElement("div");d.classList.add("hours-section"),t.appendChild(d);const a=document.createElement("h3");return a.textContent="Hours",d.appendChild(a),d.appendChild(e("Monday: 10:00 - 17:00")),d.appendChild(e("Tuesday: Closed")),d.appendChild(e("Wednesday: 10:00 - 17:00")),d.appendChild(e("Thursday: 10:00 - 17:00")),d.appendChild(e("Friday: 10:00 - 17:00")),d.appendChild(e("Saturday: 10:00 - 17:00")),d.appendChild(e("Sunday: 10:00 - 17:00")),t}())}()})();