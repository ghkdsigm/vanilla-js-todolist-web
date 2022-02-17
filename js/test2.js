const bt = document.querySelector('button');
const app = document.querySelector('#app');
const person = '황승현';
const ul = document.querySelector('.ul'); 


  for(i=0; i < 3; i++){
    const createLi = document.createElement('li'); 
    const apend = ul.appendChild(createLi);
    const li = document.querySelectorAll('.ul li');
    const liEach = li[i];  
    apend.innerText = person + i; 

    for(var j = 0; j < li.length; j++){
      li[j].addEventListener('click', function(e){
        e.preventDefault();
        for(var k = 0; k < li.length; k++){
          li[k].classList.remove('on');
        }
        this.classList.add('on');
      });
    }
  }




