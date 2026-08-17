
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function navInStyle() {
  const page = document.getElementsByClassName("page");
  setTimeout(() => {
    location.assign("/index.html");
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const navToggler = document.querySelector(".navbar-toggler");
  const navCollapse = document.getElementById("navbarContent");

  // 1. Mobile Menu Blur Trigger
  if (navToggler && navbar) {
    navToggler.addEventListener("click", function () {
      // If page is at top, toggle 'scrolled' class when mobile menu opens/closes
      if (window.scrollY <= 80) {
        // Toggle after short delay so Bootstrap collapse state updates
        setTimeout(() => {
          const isExpanded = navToggler.getAttribute("aria-expanded") === "true";
          if (isExpanded) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        }, 50);
      }
    });
  }

  // 2. Existing Scroll Logic (preserves menu blur state if expanded at top)
  window.addEventListener("scroll", function () {
    const isExpanded = navToggler && navToggler.getAttribute("aria-expanded") === "true";

    if (window.scrollY > 80 || isExpanded) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Scroll-to-Top Button Logic
    const scrollBtn = document.getElementById("scrollToggleBtn");
    if (!scrollBtn) return;

    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / scrollHeight) * 100;

    if (scrollPercentage >= 5) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Smooth Scroll to Top
  document.getElementById("scrollToggleBtn")?.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});