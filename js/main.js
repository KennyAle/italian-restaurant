const menuBtn = document.querySelector('.hamburger')
const responsiveMenu = document.querySelector('.responsive-nav')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active')
    responsiveMenu.classList.toggle('is-active')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden') 
hiddenElements.forEach((el) => observer.observe(el))