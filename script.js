const body = document.getElementsByTagName('body')[0];
const menu = document.querySelector('.menu');
const dropdownButton = document.getElementsByTagName('button')[0];

let theme;

let elementsChangingTheme = [body, menu, dropdownButton];

const pushIntoElementsChangingTheme = elem =>
  elem.forEach(elem => elementsChangingTheme.push(elem));

if (document.querySelector('#text-content')) {
  const textContent = document.querySelector('#text-content');
  const a = Array.from(document.getElementsByTagName('a'));
  const h3 = document.querySelector('.mini-title');
  const h1 = Array.from(document.getElementsByTagName('h1'));
  const tableContent = document.querySelector('.t-content');
  const tableHeader = document.getElementsByTagName('thead')[0];
  pushIntoElementsChangingTheme(a);
  pushIntoElementsChangingTheme(h1);
  elementsChangingTheme.push(textContent, h3, tableContent, tableHeader);
} else if (document.querySelector('.img-descr')) {
  const imageLabel = Array.from(document.querySelectorAll('.img-descr'));
  const galleryItem = Array.from(document.querySelectorAll('.gallery-item'));
  pushIntoElementsChangingTheme(imageLabel);
  pushIntoElementsChangingTheme(galleryItem);
} else if (document.querySelector('.form-container')) {
  const formHeader = document.querySelector('.form-header');
  const submitButton = document.querySelector('.submit-button');
  elementsChangingTheme.push(formHeader, submitButton);
}

const darkmode = () => {
  theme = 'dark';
  elementsChangingTheme.forEach(elem => elem.classList.add('dark-theme'));
  localStorage.setItem('mode', 'dark');
};

const lightmode = () => {
  elementsChangingTheme.forEach(elem => elem.classList.remove('dark-theme'));
  localStorage.setItem('mode', 'light');
  theme = 'light';
};

if (document.querySelector('#text-content')) {
  const themeButtonsDiv = document.querySelector('.theme-buttons');

  const darkButton = document.createElement('button');
  const content = document.createTextNode('ciemny motyw');
  darkButton.appendChild(content);
  darkButton.onclick = darkmode;
  themeButtonsDiv.appendChild(darkButton);

  const lightButton = document.createElement('button');
  const lightButtonContent = document.createTextNode('jasny motyw');
  lightButton.appendChild(lightButtonContent);
  lightButton.onclick = lightmode;
  themeButtonsDiv.appendChild(lightButton);
}

if (localStorage.getItem('mode') == 'dark') {
  darkmode();
} else {
  lightmode();
}
