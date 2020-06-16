// PRELOADER
let preloader = document.getElementById('preloader');

  window.onload = function loading() {
  preloader.style.display = 'block';
}

setTimeout(function(){removeLoader()}, 1000);

  removeLoader = () => {
    preloader.remove();
  }