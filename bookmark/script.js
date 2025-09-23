const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

const navToggle = () => {
  btn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');

  if (menu.classList.contains('flex')) {
    logo.setAttribute('src', './images/logo-bookmark-footer.svg');
  } else {
    logo.setAttribute('src', './images/logo-bookmark.svg');
  }
};

const onTabClick = (e) => {
  tabs.forEach((tab) => {
    tab.children[0].classList.remove('border-softRed', 'border-b-4');
  });

  panels.forEach((panel) => panel.classList.replace('flex', 'hidden'));

  e.target.classList.add('border-softRed', 'border-b-4');
  const classString = e.target.getAttribute('data-target');
  document
    .getElementById('panels')
    .getElementsByClassName(classString)[0]
    .classList.replace('hidden', 'flex');
};

btn.addEventListener('click', navToggle);
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));
