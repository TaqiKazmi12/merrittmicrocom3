document.addEventListener("DOMContentLoaded", function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the logo image element
    const logoImg = document.getElementsByClassName('logoclicked');

    // Add a click event listener to the logo image
    logoImg.addEventListener('click', function() {
        // Redirect the user to Home.html
        window.location.href = 'Home.html';
    });
});

