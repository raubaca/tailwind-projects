const linkInput = document.getElementById('link-input');
const linkForm = document.getElementById('link-form');
const errorMsg = document.getElementById('error-msg');

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// https://www.freecodecamp.org/news/how-to-write-a-regular-expression-for-a-url/
const validURL = (url) => {
  const pattern =
    /(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?\/[a-zA-Z0-9]{2,}|((https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z]{2,}(\.[a-zA-Z]{2,})(\.[a-zA-Z]{2,})?)|(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})?/g;
  return !!pattern.test(url);
};

const formSubmit = (e) => {
  e.preventDefault();
  if (linkInput.value === '') {
    errorMsg.innerHTML = 'Please enter something';
  } else if (!validURL(linkInput.value)) {
    errorMsg.innerHTML = 'Please enter a valid URL';
    linkInput.classList.add('border-red');
  } else {
    errorMsg.innerHTML = '';
    linkInput.classList.remove('border-red');
    alert('Success!');
  }
};

const navToggle = () => {
  menuBtn.classList.toggle('open');
  menu.classList.toggle('flex');
  menu.classList.toggle('hidden');
};

linkForm.addEventListener('submit', formSubmit);
menuBtn.addEventListener('click', navToggle);
