const loginForm = document.forms.loginForm;

loginForm.addEventListener('submit', function (e) {
  e.preventDefault();
  
  const id = document.getElementById('id').value;
  const pwd = document.getElementById('pwd').value;

  const stPwd = localStorage.getItem(id);

  if (id.length > 10) {
    alert('아이디가 너무 깁니다. 10자 이내로 입력해주세요.');
    return;
  }
  
  if (pwd.length > 10) {
    alert('비밀번호가 너무 깁니다. 10자 이내로 입력해주세요.');
    return;
  }
  if(id==="" || pwd==="") {
    alert('아이디와 비밀번호 입력한지 확인해주세요.');
    return;
  }
  if (!stPwd || pwd !== stPwd) {
    alert('아이디 또는 비밀번호가 일치 하지않거나 존재하지 않는 계정이에요. ');
    return;
  }
  if(stPwd === id || stPwd === pwd){
    alert(id + '님 로그인 성공 하셨어요~!');
    localStorage.setItem('loggedInUser', id);
    location.href = "login_index.html";
    return;
  }
});
