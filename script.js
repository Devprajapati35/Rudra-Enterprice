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
const contactMessage = document.getElementById('formMessage');

if (contactForm){
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
}
//login 
// 🌟 Toggle Menu for Mobile
//const loginToggle = document.getElementById('menuToggle');
//const navLinks = document.getElementById('navLinks');

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
//let cart = [];
//const cartCount = document.getElementById("cart-count");
//const addToCartButtons = document.querySelectorAll(".add-to-cart");

//addToCartButtons.forEach(button => {
  ////button.addEventListener("click", () => {
    //const name = button.dataset.name;
    ///const price = parseInt(button.dataset.price);

    // Add item to cart array
   //// cart.push({ name, price });

    // Update cart count
    //cartCount.textContent = cart.length;

    // Optional: Confirmation
    //alert(`${name} added to cart!`);
  //});
//});


// ---- JavaScript ----
let cartCount = 0;
let cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
  cartCount++;
  cartItems.push({ name: productName, price: price });
  cartTotal += price;

  document.getElementById("cart-count").innerText = cartCount;
  renderCart();
  showPopup(productName);
}

function renderCart() {
  let cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  cartItems.forEach((item, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">X</button>
    `;
    cartList.appendChild(li);
  });

  let totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.innerText = cartTotal;
}

function removeFromCart(index) {
  cartTotal -= cartItems[index].price;
  cartItems.splice(index, 1);
  cartCount--;

  document.getElementById("cart-count").innerText = cartCount;
  renderCart();
}
{
  //document.getElementById("cart-sidebar").classList.toggle("active");
}

function toggleCart() {
  let sidebar = document.getElementById("cart-sidebar");
  if (sidebar) sidebar.classList.toggle("active");
}

// ---- Popup Function ----
function showPopup(productName) {
  let popup = document.getElementById("popup");
  popup.innerText = `✅ ${productName} Cart में Add हो गया!`;
  popup.style.display = "block";

  setTimeout(() => {
    popup.style.display = "none";
  }, 3000);
}

