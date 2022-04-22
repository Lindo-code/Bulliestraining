mybutton = document.getElementById("nav3");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    nav3.style.display = "block";
    nav2.style.display = "none";
  } else {
    nav3.style.display = "none";
    nav2.style.display = "block";
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}