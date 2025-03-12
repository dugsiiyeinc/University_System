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
  console.log("click");
  
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







