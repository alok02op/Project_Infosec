const menuButton=document.querySelector(".hamburger");
const navbar=document.querySelector(".navbar-nav");

menuButton.addEventListener('click', () => {
    navbar.classList.toggle('hamburger-active');
    menuButton.classList.toggle('hamburger-active');
});

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) && !menuButton.contains(event.target)) {
        navbar.classList.remove('hamburger-active'); 
        menuButton.classList.remove('hamburger-active'); 
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    const animatedSections = document.querySelectorAll(".animate");
    animatedSections.forEach((section) => observer.observe(section));
});

function clearForm(form) {
  setTimeout(() => {form.reset();}, 100);
}