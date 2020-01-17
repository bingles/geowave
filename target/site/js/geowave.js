// Navbar Fade In
var scrollFadePixels = 20;

var fadeNavbar = function (window) {
  var opacity = window.scrollTop () / scrollFadePixels;
  $ ('.navbar').css ('background-color', 'rgba(23,33,46,' + opacity + ')');
};

fadeNavbar ($ (window));

$ (window).scroll (function () {
  fadeNavbar ($ (this));
});

// Page Preloader Animation
const preloader = document.querySelector ('.preloader');

const fadeEffect = setInterval (() => {
  // if we don't set opacity 1 in CSS, then   //it will be equaled to "", that's why we   // check it
  if (!preloader.style.opacity) {
    preloader.style.opacity = 1;
  }
  if (preloader.style.opacity > 0) {
    preloader.style.opacity -= 0.1;
  } else {
    preloader.style.display = 'none';
  }
}, 150);

window.addEventListener ('load', fadeEffect);
