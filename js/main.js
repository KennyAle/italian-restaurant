const menuBtn = document.querySelector('.hamburger')
const responsiveMenu = document.querySelector('.responsive-nav')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active')
    responsiveMenu.classList.toggle('is-active')
})