mybutton = document.getElementById("Navbar3");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    Navbar3.style.display = "block";
    Nav2.style.display = "none";
  } else {
    Navbar3.style.display = "none";
    Nav2.style.display = "block";
  }
}