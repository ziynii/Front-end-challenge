const toggleBtn = document.querySelector('.toggle-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__menu-item');
const dropMenu = document.querySelectorAll('.drop-down');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

for (let i = 0; i < navItem.length; i++) {
  navItem[i].addEventListener('click', (e) => {
    for (let j = 0; j < navItem.length; j++) {
			dropMenu[j].classList.add('hidden')
		}
		console.log(e.currentTarget)
		e.currentTarget.childNodes[3].classList.remove('hidden');
  });
}
