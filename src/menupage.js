function loadMenupage() {
  const content = document.getElementById('content');
  // Header
  const title = document.createElement('h1');
  title.textContent = 'Meat and Wine Co. Menu';
  content.appendChild(title);

  // Menu header
  const menuHeader = document.createElement('h2');
  menuHeader.textContent = 'Current Offers';
  content.appendChild(menuHeader);

  // Menu items
  // Aged ribeye
  const agedRibeye = document.createElement('h2');
  agedRibeye.textContent = 'Aged Ribeye';
  const agedRibeyeDescription = document.createElement('p');
  agedRibeyeDescription.innerHTML = '(Grass fed) 169/kg <br> Encased in beef dripping butter infused with porcini mushrooms';
  content.appendChild(agedRibeye);
  content.appendChild(agedRibeyeDescription);

  // Traditional Dry-Aged rib eye
  const dryAgedRibeye = document.createElement('h2');
  dryAgedRibeye.textContent = 'Traditional Dry-Aged Ribeye';
  const dryAgedRibeyeDescription = document.createElement('p');
  dryAgedRibeyeDescription.textContent = '(Grass fed) 159/kg';
  content.appendChild(dryAgedRibeye);
  content.appendChild(dryAgedRibeyeDescription);

  // add on
  const addOnOne = document.createElement('p');
  addOnOne.innerHTML = '<em> Grilled to perfection with our signature basting, served with a side of chips and salad </em>';
  content.appendChild(addOnOne);
  const addOnTwo = document.createElement('p');
  addOnTwo.innerHTML = '<em> Dry-aged weight varies </em>';
  content.appendChild(addOnTwo);
  const addOnThree = document.createElement('p');
  addOnThree.innerHTML = '<em> Please ask your waiter for today\'s availability </em>';
  content.appendChild(addOnThree);
  const addOnFour = document.createElement('p');
  addOnFour.innerHTML = '<strong> LIMITED TIME ONLY </strong>';
  content.appendChild(addOnFour);

  // divider
  const divider = document.createElement('p');
  divider.textContent = '========== * ==========';
  content.appendChild(divider);

  // wine header
  const wineHeader = document.createElement('h2');
  wineHeader.textContent = 'Perfectly paire with';
  content.appendChild(wineHeader);

  // sommelier
  const sommelier = document.createElement('p');
  sommelier.textContent = 'Head Sommelier, Paul has expertly selected these premium wines for you to enjoy by the glass, served under coravin or by the bottle.'
  content.appendChild(sommelier);

  // wine list
  const wineListDiv = document.createElement('div');
  content.appendChild(wineListDiv);

  let itemDiv = [];
  let wineNameHeader = [];
  let wineDescription = [];
  let winePrice = [];

  for (let i = 0; i < 3; i++) {
    itemDiv[i] = document.createElement('div');
    const headerDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');
    wineNameHeader[i] = document.createElement('h2');
    winePrice[i] = document.createElement('p');
    wineDescription[i] = document.createElement('p');
    headerDiv.append(wineNameHeader[i], winePrice[i]);
    bodyDiv.appendChild(wineDescription[i]);
    itemDiv[i].append(headerDiv, bodyDiv);
    wineListDiv.appendChild(itemDiv[i]);
  }
  
  // chateau musar
  wineNameHeader[0].textContent = 'Chateau Musar';
  winePrice[0].textContent = '21/125';
  wineDescription[0].innerHTML = 'Cabernet Sauvignon, Cinsault, Carignan <br> Origin: Bekaa Valley, Lebanon <br> Deep ruby colour, with subtle red cherries, mulberries, plums and hints of tea tree and liquorice. Well integrated boasting soft tannins, outstanding complexity and a long lasting finish. A cult wine that everybody should try.';

  // bruno rocca barbaresco
  wineNameHeader[1].textContent = 'Bruno Rocca Barbaresco';
  winePrice[1].textContent = '25/150';
  wineDescription[1].innerHTML = 'Nebbiolo <br> Origin: Piedmont, Italy <br> A beautiful garnet colour, with aromas of red cherries, violets and subtle notes of forest floor. Opens to a bright acidity and silky tannins that only the best examples of Nebbiolo can offer. Long finish and beautiful complexity.';

  // chatea phelan segur
  wineNameHeader[2].textContent = 'Chateau Phelan Segur';
  winePrice[2].textContent = '35/210';
  wineDescription[2].innerHTML = 'Cabernet Sauvignon, Merlot, Cabernet Franc <br> Origin: St Estephe, Bordeaux, France <br> Intense ruby colour with aromas of cassis, tobacco, smoke, chocolate and earth. An incredible complexity complemented by the strong intensity of flavours, creates an outstanding masterpiece. Long lasting savory finish and well integrated silky tannins.';

}

export default loadMenupage;