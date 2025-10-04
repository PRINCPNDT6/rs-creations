 

const menuIcon = document.getElementById("menuIcon");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("closeBtn");

menuIcon.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeBtn.addEventListener("click", () => {
  sidebar.style.left = "-250px";
});

// Optional: click outside sidebar to close
window.addEventListener("click", (e) => {
  if (e.target === sidebar) {
    sidebar.style.left = "-250px";
  }
});


// 📦 PRODUCTS DATA
const products = [
  {
    id: 1,
    name: "Gold Necklace Set",
    fakePrice: 2999,
    price: 1999,
    discount: "40% OFF",
    img: "jewellery.png",
    details: "Elegant gold-plated necklace set for special occasions."
  },
  {
    id: 2,
    name: "Silver Earrings",
    fakePrice: 3100,
    price: 999,
    discount: "30% OFF",
    img: "jewellery.png",
    details: "Stylish silver earrings that go with any outfit."
  },
  {
    id: 3,
    name: "Diamond Ring",
    price: 4999,
    discount: "25% OFF",
    img: "https://images.unsplash.com/photo-1600185365483-26d7eaa06f44",
    details: "Shiny diamond ring with a premium finish."
  },
  {
    id: 4,
    name: "Pearl Bracelet",
    price: 1499,
    discount: "50% OFF",
    img: "https://images.unsplash.com/photo-1603808033153-38b2c1c32dc3",
    details: "Elegant pearl bracelet perfect for gifting."
  },
  {
    id: 5,
    name: "Kundan Choker",
    price: 2599,
    discount: "45% OFF",
    img: "https://images.unsplash.com/photo-1616627562971-89f261f02a5e",
    details: "Traditional Kundan choker with royal design."
  },
  // 🧡 15 aur dummy products
];

for (let i = 6; i <= 20; i++) {
  products.push({
    id: i,
    name: `Jewellery Item ${i}`,
    price: 1000 + i * 150,
    discount: "40% OFF",
    img: "https://images.unsplash.com/photo-1600180758890-6ec3b4e71c57",
    details: "Premium handcrafted jewellery."
  });
}

// 🛒 CART HANDLING
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// 💎 Display products on homepage
const productGrid = document.getElementById("productGrid");
if (productGrid) {
  products.forEach((p) => {
    const div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" onclick="openProduct(${p.id})">
      <h3>${p.name}</h3>
      <p class="fakePrice">₹${p.fakePrice}</p>
      <p class="price">₹${p.price}</p>
      <p class="discount">${p.discount}</p>
      <div class="btns">
        <button class="buy-btn" onclick="buyNow(${p.id})">Buy Now</button>
        <button class="cart-btn" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
    productGrid.appendChild(div);
  });
}

// ➕ Add to cart
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}

// 💰 Buy Now → open product detail page
function buyNow(id) {
  window.location.href = `products/product${id}.html`;
}

// 🧭 Open product details when clicking image
function openProduct(id) {
  window.location.href = `products/product${id}.html`;
}

// ⭐ FEEDBACK  
let currentSlide = 0;
const feedbackCards = document.querySelectorAll(".feedback-card");

function showFeedback(index) {
  feedbackCards.forEach((card, i) => {
    card.classList.toggle("active", i === index);
  });
}

function nextFeedback() {
  currentSlide = (currentSlide + 1) % feedbackCards.length;
  showFeedback(currentSlide);
}

function prevFeedback() {
  currentSlide = (currentSlide - 1 + feedbackCards.length) % feedbackCards.length;
  showFeedback(currentSlide);
}

showFeedback(currentSlide);
