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

// let portalMobile = document.querySelector('.portal-mobile')
// let mobile_sub_menu = document.querySelector('.mobile-sub-menu');

// portalMobile.addEventListener('click', ()=>{
//     // e.preventDefault();
//     mobile_sub_menu.classList.add('subMenu');

//     console.log('hhh');
    
// })



// sliding image 

let img = document.querySelector('#img');

// images 

const images = [
    {
        photoUrl:"https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",

    },
    {
  
      photoUrl:"https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHVuaXZlcnNpdHklMjBzdHVkZW50c3xlbnwwfHwwfHx8MA%3D%3D",
        
    },
    {
   
      photoUrl:"https://media.istockphoto.com/id/1588289974/photo/multiracial-group-of-happy-students-in-lecture-hall-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=1YkFWXDibDwuNBncSzIx-OmkyiuW9HokECgDqAqqhvQ=",
       

    },
    {
   
      photoUrl:"https://plus.unsplash.com/premium_photo-1658506891404-bfb50c7415f0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dW5pdmVyc2l0eSUyMHN0dWRlbnRzfGVufDB8fDB8fHww",
       

    },
  ];

  let index = 0;



  function slidingImages(){
        const {photoUrl} = images[index];
        img.src = photoUrl;
        index++;

        if(index === images.length){
            index = 0;
        }

        setTimeout(()=>{
            slidingImages();
            img.style.transition=".5s"
        },2000);
  }

  document.addEventListener('DOMContentLoaded', ()=>{
    slidingImages();
    updateImage();
  })

  let header = document.querySelector('header')
  window.addEventListener('scroll', function(){
    header.classList.toggle('sticky', window.scrollY > 0)
  })


// sliding section3 images 

let image = document.querySelectorAll('.imgSlide');
let imgContainer = document.querySelector('.imgContainer');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

let currentImg = 1;
let timeout;
console.log(image.length);

next.addEventListener('click', () => {
  currentImg++;
  updateImage();
  clearTimeout(timeout);
})

prev.addEventListener('click', () => {
    currentImg--;
  updateImage();
  clearTimeout(timeout);
})


function updateImage(){
  if(currentImg > image.length){
    currentImg = 1;
  }
  else if(currentImg < 1){
    currentImg = image.length;
  }
  imgContainer.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
  timeout = setTimeout(() => {
    currentImg++;
    updateImage();
  }, 3000);
}

// imageContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;
