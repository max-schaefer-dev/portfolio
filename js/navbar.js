$(document).ready(function () {
    $('.third-button').on('click', function () {
  
      $('.sidenav').toggleClass('close');
      $('.animated-icon3').toggleClass('open');
    });

    $('.nav-link-m').on('click', function () {
  
        $('.sidenav').toggleClass('close');
        $('.animated-icon3').toggleClass('open');
      });
});

// Scroll behaviour
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0";
  } else {
    if (window.screen.availWidth < 992) {
      document.getElementById("header").style.top = "-62px";
    } else {
      document.getElementById("header").style.top = "-88px";
    }
  }
  prevScrollpos = currentScrollPos;
}