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


  window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 80) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Scroll-to-Top Button logic (Appears at 75% scroll)
window.addEventListener("scroll", function () {
  const scrollBtn = document.getElementById("scrollToggleBtn");
  if (!scrollBtn) return;

  // Calculate total scrollable height
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  // Show button only when scrolled 75% or more down the page
  if (scrollPercentage >= 25) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

// Smooth Scroll to Top on click
document.getElementById("scrollToggleBtn")?.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

});