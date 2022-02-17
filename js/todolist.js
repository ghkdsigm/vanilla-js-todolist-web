const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");
const todoFormInput = document.querySelector("#todo-form input");
const allDel = document.querySelector('.allthing');

const Value = 'storageValue';
let ArrayItems = [];

function arrayPush() {
  localStorage.setItem(Value, JSON.stringify(ArrayItems))
}

function saveInput(e){
  if(e.keyCode == 13){
    const selectedInput = document.querySelector('.on');
    const previous = selectedInput.previousSibling;
    previous.innerText = selectedInput.value
    const ChangedResult = previous.innerText
    const obj = JSON.parse(localStorage.getItem(Value));
    if(e.keyCode == 13){
      previous.style.display = 'inline-block';
      selectedInput.classList.remove('on')
      let ID = this.parentNode.getAttribute('id');
      const numID = Number(ID)
      for(let i=0; i < obj.length; i++){
        if(obj[i].id == numID){
          obj[i].text = ChangedResult
          localStorage.setItem(Value, JSON.stringify(obj))
        }
      }
    }
  }
}

function fixContents(act){
  const fixInput = act.target.nextSibling;
  fixInput.classList.add('on');
  const fixedspan = fixInput.previousSibling;
  fixedspan.style.display = "none";
  fixInput.addEventListener('keypress', saveInput)
}

function delAll(){
  if(confirm("정말 전체를 삭제하시겠습니까?")) {
    todoList.innerHTML = '';
    localStorage.clear();
    console.log(2)
    const allClear = allDel.classList.remove('show');
  }
}

function deleteLi(event){
  const delBt = event.target.parentNode;
  delBt.remove();
  ArrayItems = ArrayItems.filter((aa) => aa.id !== Number(delBt.id));
  arrayPush()

  if(document.querySelector('li') == null){
    allDel.classList.remove('show')
    allDel.classList.add('none')
  }

}

function paintTodo(Value){
  todoFormInput.value = '';
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = Value.text;
  const input = document.createElement('input');
  input.value = Value.text;
  const button = document.createElement('button');
  button.classList.add('w-btn', 'w-btn-green');
  todoList.appendChild(li);
  li.id = Value.id;
  li.appendChild(span);
  li.appendChild(input);
  li.appendChild(button);
  input.style.display = 'none'
  button.innerText = '삭제'

  span.addEventListener('click', fixContents);
  button.addEventListener('click', deleteLi);
  allDel.addEventListener('click', delAll)
}

function clickHandler(e){
  e.preventDefault();
  const Value = todoFormInput.value;
  if(Value !== ''){
    const ValueObj = {
        text: Value,
        id: Date.now()
    };
    paintTodo(ValueObj);
    ArrayItems.push(ValueObj);
    arrayPush();
  }
  else {
    alert('일정을 등록해주세요')
  }

  if(document.querySelector('li') !== null){
    allDel.classList.add('show')
  }
}

todoForm.addEventListener('submit', clickHandler)

const saveDats = localStorage.getItem(Value);
if(saveDats !== null){
    const savedatas = JSON.parse(saveDats);
    ArrayItems = savedatas;
    savedatas.forEach(paintTodo);
}

if(document.querySelector('li') !== null){
  allDel.classList.add('show')
}
