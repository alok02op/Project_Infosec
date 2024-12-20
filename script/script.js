// Hamburger-menu

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

// Animation after reaching on page

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

// Scrolling smoothly

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Making clicked menu active

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const logoContainer = document.querySelector(".logo-container");

  const handleNavClick = (event) => {
      navLinks.forEach(link => link.classList.remove("active"));
      event.target.classList.add("active");
  };

  navLinks.forEach(link => {
      link.addEventListener("click", handleNavClick);
  });

  logoContainer.addEventListener("click", () => {
      navLinks.forEach(link => link.classList.remove("active"));
  });
});
// ----------------------------------------------------------------------------------------