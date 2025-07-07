const roles = ["Data Scientist", "ML Engineer", "AI Researcher"];
let i = 0;

setInterval(() => {
  document.getElementById("animated-text").textContent = roles[i];
  i = (i + 1) % roles.length;
}, 3000);