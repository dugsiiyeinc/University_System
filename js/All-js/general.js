// pop up register form

// openModel
let openModel = document.querySelector('#addStudent');
// closeModal
let closeModel = document.querySelector('#close');
// regsiterForm
let registerForm = document.querySelector('#register');

openModel.addEventListener('click', (e)=>{
  e.preventDefault();
  openPopUp();
  // console.log("click");
  
})

closeModel.addEventListener('click', (e)=>{
    e.preventDefault();
    closePopUp();
    console.log("click");
    
  })
  

function openPopUp(){
  registerForm.style.display="flex";
}


function closePopUp(){
    registerForm.style.display="none";
  }



  // form validation 

  function validateInput(input) {
    const icon = document.getElementById(input.id + "Icon");
    if (input.value.trim() === "") {
        icon.className = "icon fas fa-times invalid";
        icon.style.display = "inline";
    } else {
        icon.className = "icon fas fa-check valid";
        icon.style.display = "inline";
    }
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    const username = document.getElementById("username");
    const password = document.getElementById("password");

    if (username.value.trim() === "" || password.value.trim() === "") {
        alert("Please fill in all fields");
        event.preventDefault();
    }
});







