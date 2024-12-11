// JavaScript for Carousel, Accordion, and Form Validation

// Carousel functionality
let currentSlide = 0;
const items = document.querySelectorAll('.carousel-item');
const totalSlides = items.length;

function showSlide(index) {
    items.forEach((item, i) => {
        item.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Automatically move to next slide every 3 seconds
showSlide(currentSlide);

// Accordion functionality
const accordionButtons = document.querySelectorAll('.accordion-button');
accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = (content.style.display === 'block') ? 'none' : 'block';
    });
});

// Form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(event) {
    let valid = true;
    form.querySelectorAll('input, textarea').forEach(field => {
        if (!field.value) {
            valid = false;
            alert('Please fill in all fields');
        }
    });

    if (!valid) event.preventDefault(); // Prevent form submission if not valid
});
document.querySelector('.dropdown-btn').addEventListener('click', function () {
    const content = document.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
});

const accordions = document.querySelectorAll('.accordion-button');
accordions.forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});

