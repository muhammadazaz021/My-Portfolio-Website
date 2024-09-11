// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }
});

// Tab Functionality
function showTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');
    document.getElementById(tabName).style.display = 'block';
}

// Show default tab
document.addEventListener('DOMContentLoaded', () => showTab('education'));
