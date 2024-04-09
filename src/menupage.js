function loadMenupage() {
  const content = document.getElementById('content');
  // Header
  const title = document.createElement('h1');
  title.textContent = 'Have a look at our menu!';
  content.appendChild(title);
}

export default loadMenupage;