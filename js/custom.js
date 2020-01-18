// SCROLL BUTTON
scroll = document.getElementById("topBtn");
topBtn.addEventListener('click', topFunction);


window.onscroll = function() {showScroll()};

function showScroll() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// PRELOADER
let preloader = document.getElementById('preloader');

  window.onload = function loading() {
  preloader.style.display = 'block';
}

setTimeout(function(){removeLoader()}, 1000);

  removeLoader = () => {
    preloader.remove();
  }
