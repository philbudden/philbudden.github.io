(function () {
  var burger = document.querySelector('.navbar-burger');
  var menu = document.getElementById('navbar-menu');
  if (!burger || !menu) return;

  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    burger.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('is-open', !open);
  });

  // Close menu when a link is clicked
  menu.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      burger.setAttribute('aria-expanded', 'false');
      menu.classList.remove('is-open');
    }
  });
})();
