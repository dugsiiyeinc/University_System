//   logOut

let title = document.querySelector('#title');
let logOut = document.querySelector('#logOut');

if (logOut) {
  logOut.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('curentUser');
    console.log("Logged out ✅");

    // SweetAlert2 Toast
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title: 'You have logged out!',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });

    // 2.5 seconds kadib redirect
    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 2500); // 2.5 seconds
  });
}





let onlineUser = JSON.parse(localStorage.getItem('curentUser'));

title.textContent = onlineUser.user_;