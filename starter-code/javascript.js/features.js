
// mobile nav
const hamburger = document.querySelector(".hamburger");
const hamOne = document.querySelector(".ham-one");
const hamTwo = document.querySelector(".ham-two");
const navLinks = document.querySelector(".nav-links");
const navButton = document.querySelector(".nav-btn");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
  navLinks.classList.toggle("show");
  navButton.classList.toggle("show");
  hamOne.classList.toggle("show");
  hamTwo.classList.toggle("show");
  overlay.classList.toggle("show");
});
// logo
const logo = document.querySelectorAll(".logo");
for(var i=0; i<logo.length; i++){
  logo[i].addEventListener("click",()=>{
location.href="../index.html";
  });
}
