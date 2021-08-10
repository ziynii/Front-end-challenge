const item = document.querySelectorAll('.items');
const arrorwBtn = document.querySelectorAll('.faq__arrow');
const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer');

for (let i = 0; i < item.length; i++) {
  item[i].addEventListener('click', (e) => {
		for (let j = 0; j < item.length; j++) {
			answer[j].classList.add('hidden');
			arrorwBtn[j].classList.remove('deg');
			question[j].classList.remove('question__bold');
			
		}
		e.currentTarget.childNodes[5].classList.remove('hidden');
		arrorwBtn[i].classList.add('deg');
		question[i].classList.add('question__bold');
	});
}
