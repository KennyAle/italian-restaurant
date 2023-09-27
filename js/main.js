const menuBtn = document.querySelector('.hamburger')
const responsiveMenu = document.querySelector('.responsive-nav')

menuBtn.addEventListener('click', function() {
    menuBtn.classList.toggle('is-active')
    responsiveMenu.classList.toggle('is-active')
})

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.hidden') 
hiddenElements.forEach((el) => observer.observe(el))

const testimonies = document.querySelectorAll('.testimony');
let currentIndex = 0;

function showTestimony(index) {
    testimonies.forEach((testimony, i) => {
        if (i === index) {
            testimony.classList.add('active') 
        } else {
            testimony.classList.remove('active') 
        }
    });
}

function autoSlide() {
    showTestimony(currentIndex);
    currentIndex = (currentIndex + 1) % testimonies.length;
}

// Iniciar el slider automáticamente cada 5 segundos (5000ms)
setInterval(autoSlide, 3500);

// Mostrar el primer testimonio al cargar la página
showTestimony(currentIndex);





