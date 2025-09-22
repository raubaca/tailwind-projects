// Detect system theme
const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

document.documentElement.classList.toggle(
  'dark',
  localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) && defaultDark),
);

// Toggle theme and save to localStorage
const themeToggleBtn = document.getElementById('theme-toggle');

const toggleMode = () => {
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }
  document.documentElement.classList.toggle('dark');
};

themeToggleBtn.addEventListener('click', toggleMode);
