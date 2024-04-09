function loadAboutpage() {
  const contentDiv = document.getElementById('content');
  // Header
  const title = document.createElement('h1');
  title.textContent = 'About Us';
  contentDiv.appendChild(title);
  // Paragraph
  const paragraph = document.createElement('p');
  paragraph.textContent = 'We are a restaurant that serves delicious food!';
  contentDiv.appendChild(paragraph);
}

export default loadAboutpage;