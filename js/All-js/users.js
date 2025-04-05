let form = document.querySelector('#form');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let updateMode = false;
let updateId = null; 


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    let userName =username.value.trim();
    let passWord = password.value.trim();
  

    if(userName !== '' & passWord !== '' ){
       
        let user = {
            id :  Date.now(),
            user : userName,
            pass : passWord,
        }

     
            // create new user
            createNewUser(user);
    
    }

    form.reset()
});



// generateUSer 






function createNewUser(user){
    let users = getUserLocalStorage();

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}


function getUserLocalStorage(){
    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    return users ;
}