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
