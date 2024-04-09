import loadHomepage from "./homepage";
import loadMenupage from "./menupage";
import loadAboutpage from "./aboutpage";

const navBar = document.querySelector('nav');
const homeButton = document.querySelector('#home-button');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');
const contentDiv = document.getElementById('content');
homeButton.textContent = 'Home';
menuButton.textContent = 'Menu';
aboutButton.textContent = 'About Us';
homeButton.addEventListener('click', () => {
  // Clear the content
  contentDiv.innerHTML = '';
  loadHomepage();
});
menuButton.addEventListener('click', () => {
  // Clear the content
  contentDiv.innerHTML = '';
  loadMenupage();
});
aboutButton.addEventListener('click', () => {
  // Clear the content
  contentDiv.innerHTML = '';
  loadAboutpage();
});
// Load the homepage on startup
loadHomepage();