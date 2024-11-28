// Toggle between login and signup forms
function toggleForm() {
  const loginSection = document.querySelector('.login-section');
  const signupSection = document.querySelector('.signup-section');
  loginSection.classList.toggle('active');
  signupSection.classList.toggle('active');
}

// Open a modal by its ID
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
}

// Close a modal by its ID
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'none';
}

// Event listeners for opening modals
document.querySelector('.cart').addEventListener('click', function() {
  openModal('wishlistModal');
});

document.querySelector('.navbar .nav-links .dropdown').addEventListener('click', function() {
  openModal('authModal');
});

// Close modal when clicking outside modal content
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
};

// Adding CSS class for dropdown menu toggle
document.querySelector('.navbar .nav-links .dropdown').addEventListener('mouseenter', function() {
  const menu = this.querySelector('.dropdown-menu');
  menu.style.display = 'block';
});
document.querySelector('.navbar .nav-links .dropdown').addEventListener('mouseleave', function() {
  const menu = this.querySelector('.dropdown-menu');
  menu.style.display = 'none';
});

// Making sure that the hamburger menu toggle works for small screens (if added)
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');
});
window.onload = function () {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("content").style.display = "block";
  }, 1500);
};
// Scroll Animation with IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Remove observer after animation
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
});

// Search Functionality
document.getElementById("search-btn").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.toLowerCase();
  alert("Search functionality coming soon! Query: " + query);
});

// Carousel Logic (Auto-scroll)
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;
setInterval(() => {
  carouselItems.forEach((item, index) => {
      item.style.display = index === currentIndex ? "block" : "none";
  });
  currentIndex = (currentIndex + 1) % carouselItems.length;
}, 3000);
