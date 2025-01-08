import './home.css'
import restaurantImg from './restaurant.jpeg'

const container = document.querySelector('#content');
const newDiv = document.createElement('div');
newDiv.classList.add('home-contents')
newDiv.innerHTML = `<img src="${restaurantImg}" alt="">
		<div>
			<h1>La Belle Vie Bistro</h1>
			<p>Welcome to La Belle Vie Bistro, where every meal is crafted with love and passion. Our menu features
				fresh,
				high-quality ingredients, blending traditional flavors with a modern twist. Whether you’re here for a cozy
				dinner, axx
				family gathering, or a casual outing, our warm ambiance and friendly service will make your visit
				unforgettable. Come
				savor delicious dishes, refreshing beverages, and a dining experience like no other at La Belle Vie Bistro.
			</p>
		</div>`

export function renderHome () {
	container.innerHTML = '';
	container.appendChild(newDiv);	
}