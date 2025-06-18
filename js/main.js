const menuBTN = document.getElementById('menu-btn')
const navbar = document.querySelector('.navbar')

menuBTN.addEventListener('click',()=>{
  navbar.classList.toggle('open')
})