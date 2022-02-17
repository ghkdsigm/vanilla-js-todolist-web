const App = document.querySelector('#app');
const Form = document.querySelector('#form');
const Forminput = document.querySelector('input');


function calc(e) //calc이라는 이름을 가진 함수를 생성
{
  e.preventDefault();
  const inputValue = Forminput.value;
  Forminput.value = '';
  const result = parseInt(inputValue);
  App.innerText = '방금' + result + '개의 리스트가 생성되었습니다';

  if (result !== '') {
    const ul = document.querySelector('.ul');
    const person = '리스트';
    for (i = 0; i < result; i++) {
      const createLi = document.createElement('li');
      const apend = ul.appendChild(createLi);
      const li = document.querySelectorAll('.ul li');
      const liEach = li[i];
      apend.style.listStyle = 'none';
      apend.innerText = person + [i + 1];

      for (var j = 0; j < li.length; j++) {
        li[j].addEventListener('click', function (e) {
          e.preventDefault();
          for (var k = 0; k < li.length; k++) {
            li[k].classList.remove('on');
          }
          this.classList.add('on');
        });
      }
    }
  }

}


Form.addEventListener('submit', calc)