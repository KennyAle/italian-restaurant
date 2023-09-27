// Select the menu button and the responsive menu by their CSS classes
const menuBtn = document.querySelector('.hamburger')
const responsiveMenu = document.querySelector('.responsive-nav')

// Event listener to the menu button
menuBtn.addEventListener('click', function() {
    // Toggle the 'is-active' class on the menu button
    menuBtn.classList.toggle('is-active')
    responsiveMenu.classList.toggle('is-active')
})

// Create an IntersectionObserver to handle elements with the class '.hidden'
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Check if the observed element is intersecting the viewport
        if(entry.isIntersecting){
            // Add the 'show' class to make the element visible
            entry.target.classList.add('show')
        } else {
            // Remove the 'show' class to hide the element
            entry.target.classList.remove('show')
        }
    })
})

// Select all elements with the class '.hidden'
const hiddenElements = document.querySelectorAll('.hidden') 
// Observe each hidden element using the IntersectionObserver
hiddenElements.forEach((el) => observer.observe(el))

// Select all elements with the class '.testimony'
const testimonies = document.querySelectorAll('.testimony');
// Initialize the currentIndex to 0
let currentIndex = 0;

// Function to show a specific testimony by index
function showTestimony(index) {
    testimonies.forEach((testimony, i) => {
        if (i === index) {
            // Add the 'active' class to show the current testimony
            testimony.classList.add('active') 
        } else {
            // Remove the 'active' class from other testimonies
            testimony.classList.remove('active') 
        }
    });
}

// Function to auto-slide through testimonies
function autoSlide() {
    showTestimony(currentIndex)
    // Update the currentIndex to the next testimony (looping back to 0 if at the end)
    currentIndex = (currentIndex + 1) % testimonies.length
}

// Set an interval to automatically slide testimonies every 3.5 seconds
setInterval(autoSlide, 3500)

// Show the initial testimony
showTestimony(currentIndex)





