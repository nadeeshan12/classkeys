// Check for saved dark mode preference
const darkMode = localStorage.getItem('darkMode');

// Dark mode preferences
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Initial state
if (darkMode === 'enabled') {
    body.setAttribute('data-theme', 'dark');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('darkMode', null);
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('darkMode', 'enabled');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});