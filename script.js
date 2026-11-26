
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

// Mobile navigation
menuBtn.addEventListener("click", () => {
  nav.classList.toggle("active");

  menuBtn.textContent = nav.classList.contains("active")
    ? "✕"
    : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuBtn.textContent = "☰";
  });
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(event) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

console.log("NOVA Digital website loaded successfully!");

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("formStatus");

  if (!name || !email || !message) {
    status.textContent = "Please complete all fields.";
    return;
  }

  status.textContent =
    "Thank you! Your demo form works. Message sending will be connected before launch.";

  contactForm.reset();
});
