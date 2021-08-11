const input = document.querySelector('.email__input');
const emailBtn = document.querySelector('.email__submit');
const errorImg = document.querySelector('.error-img');
const errorText = document.querySelector('.error-text');

function checkIt() {
  var text = input.value;
  var email = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

  if (email.test(text) == false) {
    input.classList.add('error');
		errorImg.style.display = 'inline';
		errorText.style.display = 'block';
		errorText.textContent = '올바르지 않은 이메일 형식입니다'
    input.focus();
    return false;
  }
}

emailBtn.addEventListener('click', (e) => {
  e.preventDefault();
  checkIt();
});
