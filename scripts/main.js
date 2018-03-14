var pic = document.getElementById('zoom-photo');

pic.addEventListener('click', function () {
  if (pic.classList.contains('zoomed')) {
    pic.classList.remove('zoomed')
  } else {
    pic.classList.add('zoomed')
  }
});

document.addEventListener('click', function (event) {
  var isClickInside = pic.contains(event.target);

  if (!isClickInside && pic.classList.contains('zoomed')) {
    pic.classList.remove('zoomed');
  }
});

document.addEventListener('keyup', function (e) {
  if (pic.classList.contains('zoomed') & e.keyCode === 27) {
    pic.classList.remove('zoomed');
  }
});
