// Navbar Fade In
var scrollFadePixels = 100;

var fadeNavbar = function (window) {
  var opacity = window.scrollTop () / scrollFadePixels;
  $ ('.navbar').css ('background-color', 'rgba(23,33,46,' + opacity + ')');
};

fadeNavbar ($ (window));

$ (window).scroll (function () {
  fadeNavbar ($ (this));
});
