import './styles.css'

import { renderHome } from "./pages/home/home.js";
import { renderMenu } from "./pages/menu/menu.js";

let navBtns = document.querySelectorAll('nav button');

navBtns.forEach((btn) => {
	console.log(btn);
	btn.addEventListener('click', (e) => {
		if(btn.innerHTML === 'Home') {
			renderHome();
		}
		else if(btn.innerHTML === 'Menu') {
			renderMenu();
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
  renderHome();
});
