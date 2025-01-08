import './about.css'

const container = document.querySelector('#content');
const newDiv = document.createElement('div');
newDiv.classList.add('about-contents')
newDiv.innerHTML = `hello`

export function renderAbout () {
	container.innerHTML = '';
	container.appendChild(newDiv);	
}