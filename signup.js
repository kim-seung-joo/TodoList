const signupForm = document.querySelector('form');

signupForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const pwd = document.getElementById('pwd').value;
  

  if (localStorage.getItem(id)) {
    alert('이미 존재하는 아이디입니다.');
    return;
  }if(id=="" || pwd==""){
    alert('아이디 또는 비밀번호 입력해주세요');
    return;
  }
  if(id===id || pwd === pwd){
  alert('회원가입이 완료되었습니다.');
  localStorage.setItem(id, pwd);
  location.href = "login.html";
  }
});

