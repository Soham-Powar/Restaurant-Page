import './menu.css'
import pancakeSrc from './assets/pancake.jpg'
import pastaSrc from './assets/pasta.jpeg'
import burgerSrc from './assets/burger.jpg'
import friesSrc from './assets/fries.jpeg'

const container = document.querySelector('#content');
const itemsContainer = document.createElement('div');

let foodItems = [];

class foodItem {
	constructor(imgSrc, name, price) {
		this.imgSrc = imgSrc;
		this.name = name;
		this.price = price;
	}
}

let pancake = new foodItem(pancakeSrc, 'Pancake', '$12.50');
let pasta = new foodItem(pastaSrc, 'Pasta', '$12.50');
let burger = new foodItem(burgerSrc, 'Burger', '$12.50');
let fries_s = new foodItem(friesSrc, 'Fries (S)', '$3.99');
let fries_m = new foodItem(friesSrc, 'Fries (M)', '$6.00');
let fries_l = new foodItem(friesSrc, 'Fries (L)', '$10.50');
foodItems.push(pancake);
foodItems.push(pasta);
foodItems.push(burger);
foodItems.push(fries_s);
foodItems.push(fries_m);
foodItems.push(fries_l);

itemsContainer.classList.add('items-container');

foodItems.forEach((item) => {
	const newDiv = document.createElement('div');
	newDiv.innerHTML = `
		<img src="${item.imgSrc}" alt="">
		<h5>${item.name}</h5>
		<p>${item.price}</p>
	`;
	newDiv.classList.add('fooditem-div');
	itemsContainer.appendChild(newDiv);
});

export function renderMenu () {
	container.innerHTML = '';
	container.appendChild(itemsContainer);
	console.log(foodItems);
}