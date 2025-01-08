import './about.css'
import chefImg from './about.jpeg'

const container = document.querySelector('#content');
const newDiv = document.createElement('div');
newDiv.classList.add('about-contents')
newDiv.innerHTML = `
	<img src="${chefImg}" alt="">
	<div>
		<h2>About Us</h2>
		<p>
			At La Belle Vie Bistro, we are more than just a restaurant, we are a movement.
			Founded by a group of passionate individuals, our mission is to transform the way people experience Japanese cuisine.
			We believe in sustainability, mindfulness, and honoring the planet while enjoying the finest flavors.

			Our founders, who have been at the forefront of plant-based culinary innovation, set out to combine the elegance and tradition of Japanese dishes with the power of vegan ingredients.
			Their vision is to create a dining experience that not only nourishes the body but also the soul, making every meal an opportunity to connect with nature.

			Join us in our journey, where every dish is a celebration of life, health, and our deep respect for the environment.
		</p>
	</div>
`;

export function renderAbout () {
	container.innerHTML = '';
	container.appendChild(newDiv);	
}