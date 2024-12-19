// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = 'Top';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '20px';
scrollToTopButton.style.right = '20px';
scrollToTopButton.style.padding = '10px';
scrollToTopButton.style.backgroundColor = '#004d99';
scrollToTopButton.style.color = 'white';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.borderRadius = '5px';
scrollToTopButton.style.cursor = 'pointer';
scrollToTopButton.style.display = 'none';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

// Popup alert
const alertButton = document.createElement('button');
alertButton.textContent = 'Click Me';
alertButton.style.margin = '10px';
alertButton.style.padding = '10px';
alertButton.style.backgroundColor = '#28a745';
alertButton.style.color = 'white';
alertButton.style.border = 'none';
alertButton.style.borderRadius = '5px';
alertButton.style.cursor = 'pointer';
document.body.appendChild(alertButton);

alertButton.addEventListener('click', () => {
    alert('Button was clicked!');
});
