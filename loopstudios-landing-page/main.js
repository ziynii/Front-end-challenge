const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const nav = document.querySelector('.mobile-nav-layout');


nav.classList.add('hidden')
openBtn.addEventListener('click', () => {
	nav.classList.remove('hidden')
	closeBtn.style.display = "block"
	openBtn.style.display = "none"
})

closeBtn.addEventListener('click', () => {
	nav.classList.add('hidden');
	closeBtn.style.display = "none";
	openBtn.style.display = "block"
})