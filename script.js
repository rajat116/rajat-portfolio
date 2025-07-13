const roles = ["ML Engineer", "Data Scientist", "AI Researcher"];
let i = 0;

setInterval(() => {
  const textSpan = document.getElementById("animated-text");
  if (textSpan) {
    textSpan.textContent = roles[i];
    i = (i + 1) % roles.length;
  }
}, 3000);

// Toggle menu open/close
const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll spy
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveSection() {
  const scrollY = window.scrollY + window.innerHeight / 3;

  let currentSection = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");
    const href = link.getAttribute("href").slice(1);
    if (href === currentSection) {
      link.classList.add("active");
    }
  });
}

// Run on scroll and on load
window.addEventListener("scroll", updateActiveSection);
window.addEventListener("load", updateActiveSection);