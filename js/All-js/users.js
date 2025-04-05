let form = document.querySelector('#form');
let username = document.querySelector('#username');
let password = document.querySelector('#password');
let tbody = document.querySelector('#tbody');
let updateMode = false;
let updateId = null;


document.addEventListener('DOMContentLoaded', loadUsers);

form.reset();
form.addEventListener('submit', (e) => {
    e.preventDefault();

    let userName = username.value.trim();
    let passWord = password.value.trim();


    if (userName !== '' & passWord !== '') {

        let user = {
            id: updateId || Date.now(),
            user_: userName,
            pass_: passWord,
        }


        if(updateMode){
            // update the user
            updateUser(user);

        }else{
               // create new user
        createNewUser(user);
        loadUsers(user)
        closePopUp();
        }

    }

    form.reset()
});



// generateUSer 

function generateUSer(user) {

    let tr = document.createElement('tr');
    tr.innerHTML = `

            <td> ${user.user_} </td>
            <td> ${user.pass_} </td>
            <td> 
                <i class="fa-solid fa-pen-to-square" id="edit"></i> 
                <i class="fa-solid fa-trash" id="delete"></i> 

                        <div id="popup"  class="popup-content">
                            <p>Are you sure you want to delete?</p>
                            <button id="yesBtn">Yes</button>
                            <button id="noBtn">No</button>
                        </div>
            </td>
         
    
    `

     // popDelete varibales 
     let popUpDelete = tr.querySelector('#popup');
     let yesBtn = tr.querySelector('#yesBtn');
     let noBtn = tr.querySelector('#noBtn');
 
 
 
     let deleteBtn = tr.querySelector('#delete');
 
     deleteBtn.addEventListener('click', () => {
         popUpDelete.style.display="block";
     });
 
     yesBtn.addEventListener('click', ()=>{
         deleteUser(user.id);        
         popUpDelete.style.display="none";
 
     });
 
     noBtn.addEventListener('click', ()=>{
         popUpDelete.style.display="none";
 
     })
 
     // updateStudent 
     let editBtn = tr.querySelector('#edit');
     editBtn.addEventListener('click', () => {
         handleUpdate(user.id);
     })

    return tr;
}

// handelEdit

function handleUpdate(userId){
    let users = getUserLocalStorage();

    let findUser = users.find((usr)=> usr.id === userId);

    username.value = findUser.user_;
    password.value = findUser.pass_;
    updateId = userId;
    updateMode = true;

    openPopUp();
}


// updateUser

function updateUser(user){
    let users = getUserLocalStorage();

    let userIndex = users.findIndex((usr) => usr.id == user.id);
    users[userIndex] = user;

    localStorage.setItem('users', JSON.stringify(users));
    loadUsers();
    closePopUp();
}

// deleteUser

function deleteUser(userId){
    let users = getUserLocalStorage();

    let filterUsers = users.filter((usr)=> usr.id !== userId);

    localStorage.setItem('users', JSON.stringify(filterUsers));
    loadUsers();
}
// loadUsers

function loadUsers() {
    let users = getUserLocalStorage();

    tbody.innerHTML = "";

    users.map((user) => {
        return tbody.appendChild(generateUSer(user));
    })
}


function createNewUser(user) {
    let users = getUserLocalStorage();

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}


function getUserLocalStorage() {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    return users;
}




// closingPopUp when registerNewStudent
function closePopUp() {
    let registerForm = document.querySelector('#register');
    registerForm.style.display = "none"

}


// openingPopUp when updateExistingStudent
function openPopUp() {
    let registerForm = document.querySelector('#register');
    registerForm.style.display = "flex"

}