window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    document.querySelector('.detail-header').classList.add('fixed');
  } else {
    document.querySelector('.detail-header').classList.remove('fixed');
  }
}