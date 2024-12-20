//Toggle clas active
const hamburgerMenu = document.getElementById('hamburger-menu');
const navbarNav = document.querySelector('.navbar-nav');

// Toggle menu on click
hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active'); // Toggle animation for hamburger
  navbarNav.classList.toggle('active'); // Show/hide menu
});

//klik diluar sidebar untuk keluar nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//FAQ section
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const toggle = this.querySelector(".toggle");

      // Toggle the display of the answer
      if (answer.style.display === "block") {
        answer.style.display = "none";
        toggle.textContent = "+";
      } else {
        answer.style.display = "block";
        toggle.textContent = "-";
      }
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.classList.remove("show");
        answer.classList.add("hide"); // Add hide class for transform
        toggle.textContent = "+";
      } else {
        answer.style.maxHeight = answer.scrollHeight + "rem";
        answer.classList.remove("hide"); // Remove hide class
        answer.classList.add("show"); // Add show class for transform
        toggle.textContent = "-";
      }
    });
  });
});


