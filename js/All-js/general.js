
// currentUser
let curentUserTitle = document.querySelector('#title');
// openModel
let openModel = document.querySelector('#addStudent');
// closeModal
let closeModel = document.querySelector('#close');
// regsiterForm
let registerForm = document.querySelector('#register');
// curentUserTitle

openModel.addEventListener('click', (e) => {
  e.preventDefault();
  openPopUp();
  // console.log("click");
  document.querySelector('#form').reset();

})

closeModel.addEventListener('click', (e) => {
  e.preventDefault();
  closePopUp();


  console.log("click");

})


function openPopUp() {
  registerForm.style.display = "flex";
}


function closePopUp() {
  registerForm.style.display = "none";
}



// form validation 




// getUserOnline





// let logOut = document.querySelector('#logOut');
// console.log(logOut);


// logOut.addEventListener('click', (e) => {
//   e.preventDefault();

//   localStorage.removeItem('curentUser');
//   console.log("click");

//   window.location.href = ".././loginForm/loginPage.html";

// })


// let logOut = document.querySelector('#logOut');
// console.log(logOut);

// logOut.addEventListener('click', (e) => {
//   e.preventDefault();

//   localStorage.removeItem('curentUser');
//   console.log("click");

//   window.location.href = "../../loginForm/loginPage.html"; 
// });

