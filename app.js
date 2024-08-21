document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.navbar').classList.toggle('active');
});

// Function to change navbar background color based on scroll position
function updateNavbar() {
    const navbar = document.getElementById('navbar');
    const scrollPosition = window.scrollY;

    // Adjust the scroll position threshold as needed
    if (scrollPosition > 100) { // When scrolled more than 100px
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Add scroll event listener
window.addEventListener('scroll', updateNavbar);

// Optionally, call the function on page load to set initial state
updateNavbar();
