const menu = document.querySelector('.menu')
const hamburger = document.querySelector('.hamburger')
const closeIcon = document.querySelector('.close-icon')

hamburger.addEventListener('click',(e)=>{
    menu.classList.toggle('active')
})

closeIcon.addEventListener('click',(e)=>{
    menu.classList.remove('active')
})