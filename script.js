let trigger = document.querySelector('.nav-trigger');
let nav = document.querySelector('.side-nav');

let prevScrollpos = window.pageYOffset;
let w = window.innerWidth;

console.log(w);

document.querySelector('.nav-trigger').addEventListener('click', function() {
  nav.classList.toggle('visible');
  document.body.classList.toggle('stop-scrolling');
	trigger.classList.toggle('rotate');
	trigger.classList.toggle('trigger-fade');
});

window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").style.top = "0";
    console.log('working');
  } else {
    document.querySelector(".header").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}