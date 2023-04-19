
//--------------------------------------------------------
window.addEventListener('load', function() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser === null) {
        alert('로그인후 접속이 가능해요.');
        location.href = 'login.html';
        return;
      }
    const id = document.getElementById('id');
    id.textContent = loggedInUser + ' 님 접속!';

    

  });

function logout() {
    if(confirm("로그아웃을 하시겠습니까?") ==true){
    localStorage.removeItem('loggedInUser');
    location.href = 'login.html';
    alert("로그아웃이 왼료되었어요.");
    }else{
        alert("로그아웃이 취소되었어요");
        return false;
    
    }

  }


init();
function init(){
    document.querySelector('form').addEventListener('submit', addToDo);
    document.getElementById('clear').addEventListener('click', clearTodoList);
    document.querySelector('ul').addEventListener('click',deleteOrCheck);
}
function deleteOrCheck(e){
    if(e.target.className == 'del'){
        deleteToDo(e); //X누르면 항목삭제
    }else{
        chcekToDo(e); //클릭한 경우 연하게 바꿔줌
    }
}
function deleteToDo(e){ //x누르면 항목 삭제
    let remove = e.target.parentNode;
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
}

function chcekToDo(e){
    const todo = e.target.nextSibling;
    if(e.target.checked){
        todo.style.color = "#dddddd";
    }else{
        todo.style.color = "#000000";
    }
}
function clearTodoList(e){
    let ul = document.querySelector('ul').innerHTML = '';
}

function addToDo(e){ //새로운 리스트 추가
    e.preventDefault();
    let toDoValue = document.querySelector('input');
    if(toDoValue.value !== ''){ 
        //입력창이 비워있으면 추가가 안되게끔
        addTask(toDoValue.value);
        toDoValue.value == ''; //입력창 비워주기
    }else{
        alert("아무것도 입력하지 않았어요.");
    }
}
function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = `<span class="del">삭제</span><input type="checkbox"><label>${value}</label>`;
    //<label>에서 value값으로 받아 리스트 작성을 해줄수 있게해줌
    ul.appendChild(li);
    document.querySelector('.todolist').style.display = 'block';
}


//-------------------------------------------------------


  





//로그인한 정보를 가져오기위해 localStorage를 사용
