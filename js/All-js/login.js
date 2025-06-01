let loginForm = document.querySelector('#loginForm');
let username = document.querySelector('#username');
let password = document.querySelector('#password');


loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let users = getUserDataLocalStorage();

    let findUser = users.find((usr) => usr.user_
        == username.value & usr.pass_ == password.value);

    //  localStorage.setItem('users', JSON.stringify(findUser));

    if (!findUser) {
        alert('user not found');

        return users;
    }else{
        let currentUser = findUser;
        localStorage.setItem('curentUser', JSON.stringify(currentUser));

        console.log(currentUser);
        
        window.location.href = "../dashboard/index.html"
        
        
        
    }

})



function getUserDataLocalStorage() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    if(!users || users.length === 0){
        users = [
            {
                user_: 'admin',
                pass_: 12345
            }
        ]

        localStorage.setItem('users', JSON.stringify(users))
    }

    return users;
}




