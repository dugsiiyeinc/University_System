let loginForm = document.querySelector('#loginForm');
let username = document.querySelector('#username');
let password = document.querySelector('#password');


loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();

    let users = getUserDataLocalStorage();

    let findUser = users.find((usr)=> usr.user_
 == username.value & usr.pass_ == password.value);

//  localStorage.setItem('users', JSON.stringify(findUser));

 if(!findUser){
    alert ('user not found');

    return users;
 }

 window.location.href="../dashboard/index.html"
})



function getUserDataLocalStorage(){
    let users = JSON.parse(localStorage.getItem('users')) || [];

    return users;
}