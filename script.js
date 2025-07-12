const roles = ["ML Engineer", "Data Scientist", "AI Researcher"];
let i = 0;

setInterval(() => {
  const textSpan = document.getElementById("animated-text");
  if (textSpan) {
    textSpan.textContent = roles[i];
    i = (i + 1) % roles.length;
  }
}, 3000);