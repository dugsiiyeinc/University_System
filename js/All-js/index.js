// desktop , protal-sub-menu
let List_Li =  document.querySelector('.portal');
let subMenu = document.querySelector('.sub-menu');
List_Li.addEventListener('click', ()=>{
    subMenu.classList.toggle('active');
})

// humbegar 

let open = document.querySelector('#open');
let close = document.querySelector('#close');
let mobileMenu = document.querySelector('.mobile')

// open menu
open.addEventListener('click', ()=>{
    mobileMenu.classList.add('active');
    open.style.display="none";
    close.style.display="flex";
})


// close menu
close.addEventListener('click', ()=>{
    mobileMenu.classList.toggle('active');
    open.style.display="flex";
    close.style.display="none"
})

let portalMobile = document.querySelector('.portal-mobile')
let mobile_sub_menu = document.querySelector('.mobile-sub-menu');

portalMobile.addEventListener('click', ()=>{
    // e.preventDefault();
    mobile_sub_menu.classList.add('subMenu');

    console.log('hhh');
    
})