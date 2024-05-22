// media query menu slideOut
let media = document.querySelector(".media");
let icon = document.querySelector(".icon");

icon.onclick = function () {
  media.classList.toggle("slideout");
};


// counter up
$(document).ready(function () {
  $(".count").counterUp({
    delay: 5,
    time: 2500,
  });
});


// reveal on scroll
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }else{
      reveals[i].classList.remove('active')
    }
  }
}


// reveal on scroll for left reveal
window.addEventListener('scroll', slide);

function slide(){
  var slides = document.querySelectorAll('.slide');

  for(var i = 0; i < slides.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = slides[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      slides[i].classList.add('active');
    }else{
      slides[i].classList.remove('active')
    }
  }
}
// reveal on scroll for right reveal
window.addEventListener('scroll', slideRight);

function slideRight(){
  var slides = document.querySelectorAll('.slideRight');

  for(var i = 0; i < slides.length; i++){

    var windowheight = window.innerHeight;
    var revealtop = slides[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      slides[i].classList.add('active');
    }else{
      slides[i].classList.remove('active')
    }
  }
}
// reveals end

