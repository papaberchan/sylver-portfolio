// Small JS: nav toggle + form demo
document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("nav-toggle");
const mainNav = document.getElementById("main-nav");
navToggle &&
  navToggle.addEventListener("click", () => {
    if (mainNav.style.display === "flex") {
      mainNav.style.display = "none";
    } else {
      mainNav.style.display = "flex";
      mainNav.style.flexDirection = "column";
      mainNav.style.gap = "1rem";
    }
  });

function contactFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  // Minimal demo behaviour: open mailto with message contents
  const name = data.get("name") || "";
  const email = data.get("email") || "";
  const message = data.get("message") || "";
  const subject = encodeURIComponent("Portfolio contact from " + name);
  const body = encodeURIComponent(
    "From: " + name + " (" + email + ")\n\n" + message
  );
  window.location.href = `mailto:sylvercool13@gmail.com?subject=${subject}&body=${body}`;
  return false;
}

// Simple keyboard accessibility for nav toggle
navToggle &&
  navToggle.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") navToggle.click();
  });
