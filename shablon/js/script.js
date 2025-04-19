document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
const currentPage = location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
// Smooth scrolling за линковете (ако имате anchor връзки)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Табове в услуги
const tabBtns = document.querySelectorAll('.tab-btn');
tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const tabId = btn.getAttribute('data-tab');
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(tabId).classList.add('active');
    });
});
// Валидация на контактна форма
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Валидация на имейл
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Моля, въведете валиден имейл адрес!');
        return;
    }

    // Ако всичко е валидно, изпращане
    alert('Съобщението е изпратено успешно!');
    this.reset();
});
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links a');

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
});

// Анимация при скрол
window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < window.innerHeight - 100) {
            item.classList.add('animate');
        }
    });
});
// FAQ акордеон
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.classList.toggle('active');
        question.querySelector('i').classList.toggle('fa-chevron-up');
    });
});
// Анимации при скрол (може да добавите GSAP или AOS.js за по-сложни ефекти)
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});