const hamb = document.querySelector('.hamb__field');
const popup = document.querySelector('.popup');
const nav = document.querySelector('.header__nav').cloneNode(1);
const body = document.body;

hamb.addEventListener('click', hambHandler);
function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle('_open');
  hamb.classList.toggle('_active');
  body.classList.toggle('_noscroll');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(nav);
}

const links = Array.from(nav.children);

links.forEach((link) => {
  link.addEventListener('click', closeOnClick);
});

function closeOnClick() {
  popup.classList.remove('_open');
  hamb.classList.remove('_active');
  body.classList.remove('_noscroll');
}
