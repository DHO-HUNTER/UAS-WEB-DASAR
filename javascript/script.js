//Toggle clas active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik diluar sidebar untuk keluar nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//FAQ section
document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(question => {
      question.addEventListener('click', function() {
          const answer = this.nextElementSibling;

          // Toggle the display of the answer
          if (answer.style.display === "block") {
              answer.style.display = "none";
          } else {
              answer.style.display = "block";
          }
      });
  });
});