import loadMenupage from './menupage';

function loadHomepage() {
  const content = document.getElementById('content');
  // Header
  const title = document.createElement('h1');
  title.textContent = 'The Meat and Wine Co.';
  content.appendChild(title);

  // Welcome div
  const welcomeDiv = document.createElement('div');
  const welcomeHeader = document.createElement('h1');
  welcomeHeader.textContent = 'Welcome to the Best Steak Restaurant in London - Meat & Wine Co.';
  const welcomeParagraphOne = document.createElement('p');
  welcomeParagraphOne.textContent = 'A fine dining restaurant in London that fuses African heritage and cuisine with modern culinary techniques and contemporary décor.';
  const welcomeParagraphTwo = document.createElement('p');
  welcomeParagraphTwo.textContent = 'Each dish is planned and prepared carefully. From knowing exactly where our steak comes from and how it was raised, to sourcing local ingredients, and designing each new menu with seasonal produce in mind. This way, we know that our suppliers have the same values and take the same care when it comes to crafting exceptional meals for diners as we do.';
  welcomeDiv.appendChild(welcomeHeader);
  welcomeDiv.appendChild(welcomeParagraphOne);
  welcomeDiv.appendChild(welcomeParagraphTwo);
  content.appendChild(welcomeDiv);

  // Menu button
  const menuButton = document.createElement('button');
  menuButton.textContent = 'View Menus';
  menuButton.id = 'menu-button';
  welcomeDiv.appendChild(menuButton);
  menuButton.addEventListener('click', () => {
    content.innerHTML = '';
    loadMenupage();
  });

  // Mayfair Dining div
  const mayfairDiv = document.createElement('div');
  const mayfairHeader = document.createElement('h1');
  mayfairHeader.textContent = 'Mayfair\'s newest fine dining restaurant';
  const mayfairParagraphOne = document.createElement('p');
  const mayfairParagraphTwo = document.createElement('p');
  const mayfairParagraphThree = document.createElement('p');
  mayfairParagraphOne.textContent = 'The Meat & Wine Co is a fine dining restaurant in the heart of Mayfair with an African twist and Australian roots. Here you\'ll discover elevated classic dishes, premium steaks, a variety of Afro-centric flavours and touches, and a hand-selected wine list to elevate and energise it all.';
  mayfairParagraphTwo.textContent = 'What began in Australia has recently made the natural shift to London to give visitors and locals alike a premium new offering in the fine dining space.';
  mayfairParagraphThree.textContent = 'This fresh local restaurant is the place to be for any special occasion or work function, where the warm and vibrant space, exquisite a la carte and wine list menus, and friendly, knowledgeable service will ensure any event runs seamlessly.';
  const viewMayFairMenuButton = document.createElement('button');
  viewMayFairMenuButton.textContent = 'View Mayfair';
  mayfairDiv.appendChild(mayfairHeader);
  mayfairDiv.appendChild(mayfairParagraphOne);
  mayfairDiv.appendChild(mayfairParagraphTwo);
  mayfairDiv.appendChild(mayfairParagraphThree);
  mayfairDiv.appendChild(viewMayFairMenuButton);
  content.appendChild(mayfairDiv);
}

export default loadHomepage;