import './styles.css'

import { renderHome } from "./pages/home/home.js";
import { renderMenu } from "./pages/menu/menu.js";
// import { renderAbout } from "./pages/about/about.js";

let navBtns = document.querySelectorAll('nav button');

navBtns.forEach((btn) => {
	console.log(btn);
	btn.addEventListener('click', (e) => {

		navBtns.forEach((btn) => {
			btn.removeAttribute("class");
		});

		if(btn.innerHTML === 'Home') {
			btn.classList.add('btn-selected');
			renderHome();
		}
		else if(btn.innerHTML === 'Menu') {
			btn.classList.add('btn-selected');
			renderMenu();
		}
		// else if(btn.innerHTML === 'About') {
		// 	btn.classList.add('btn-selected');
		// 	renderAbout();
		// }
	});
});

document.addEventListener("DOMContentLoaded", () => {
	navBtns[0].classList.add('btn-selected');
	renderHome();
});
