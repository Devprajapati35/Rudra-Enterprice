// Toggle mobile navigation menu
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// contact us
// 🌟 Toggle Menu for Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 🌟 Contact Form Validation
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !subject || !message) {
        formMessage.textContent = "⚠️ Please fill out all fields!";
        formMessage.style.color = "red";
        return;
    }

    // Simple email check
    if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.textContent = "⚠️ Please enter a valid email address!";
        formMessage.style.color = "red";
        return;
    }

    // Success
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";

    contactForm.reset();
});

//login 
// 🌟 Toggle Menu for Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// 🌟 Login Form Validation
const loginForm = document.getElementById('loginForm');
const formMessage = document.getElementById('formMessage');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        formMessage.textContent = "⚠️ Please fill out all fields!";
        formMessage.style.color = "red";
        return;
    }

    // Simple email check
    if (!/\S+@\S+\.\S+/.test(email)) {
        formMessage.textContent = "⚠️ Please enter a valid email address!";
        formMessage.style.color = "red";
        return;
    }

    // Simple password length check
    if (password.length < 6) {
        formMessage.textContent = "⚠️ Password must be at least 6 characters!";
        formMessage.style.color = "red";
        return;
    }

    // Success
    formMessage.textContent = "✅ Login successful!";
    formMessage.style.color = "green";

    loginForm.reset();
});


// Cart logic
let cart = [];
const cartCount = document.getElementById("cart-count");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

addToCartButtons.forEach(button => {
  button.addEventListener("click", () => {
    const name = button.dataset.name;
    const price = parseInt(button.dataset.price);

    // Add item to cart array
    cart.push({ name, price });

    // Update cart count
    cartCount.textContent = cart.length;

    // Optional: Confirmation
    alert(`${name} added to cart!`);
  });
});
