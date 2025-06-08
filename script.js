// --- Active nav link on scroll ---
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('nav ul li a');
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menu-toggle');

function setActiveLink() {
  let scrollPos = window.scrollY + navbar.offsetHeight + 50;
  sections.forEach(section => {
    if (
      scrollPos >= section.offsetTop &&
      scrollPos < section.offsetTop + section.offsetHeight
    ) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + section.id) {
          link.classList.add('active');
        }
      });
    }
  });
}
window.addEventListener('scroll', setActiveLink);

// --- Mobile menu toggle ---
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

// --- Contact form submit handler ---
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for reaching out! We will get back to you soon 😊');
  this.reset();
});

// --- Footer Year ---
document.getElementById('year').textContent = new Date().getFullYear();

// --- Optional: Card click effect ---
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });
});

// ✅ --- FAQ Toggle Section ---
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      question.classList.toggle('active');
      const answer = question.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });
});

const heading = document.querySelector('.glow');

setInterval(() => {
  heading.classList.toggle('glow');
}, 2); // blinks every second
