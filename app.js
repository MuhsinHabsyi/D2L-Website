const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}