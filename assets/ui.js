(function () {
  var reduce = false;
  try { reduce = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  var buttons = [].slice.call(document.querySelectorAll('.filter-bar button'));
  var items = [].slice.call(document.querySelectorAll('.work-card'));
  var live = document.querySelector('.works-count');
  var names = {
    todos: 'Todos',
    live: 'Sites no ar',
    app: 'Apps em desenvolvimento',
    conceito: 'Conceitos de design'
  };
  function select(btn) {
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', b === btn ? 'true' : 'false'); });
    var kind = btn.getAttribute('data-filter');
    var count = 0;
    items.forEach(function (item) {
      var show = kind === 'todos' || item.getAttribute('data-kind') === kind;
      item.hidden = !show;
      if (show) {
        count += 1;
        item.classList.add('is-shown');
      }
    });
    if (live) {
      live.textContent = names[kind] + ' · ' + count + (count === 1 ? ' trabalho' : ' trabalhos');
    }
  }
  if (buttons.length) {
    buttons.forEach(function (btn) {
      btn.addEventListener('click', function () { select(btn); });
    });
    var bar = document.querySelector('.filter-bar');
    bar.addEventListener('keydown', function (event) {
      if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
      var i = buttons.indexOf(document.activeElement);
      if (i < 0) return;
      event.preventDefault();
      var next = event.key === 'ArrowRight' ? (i + 1) % buttons.length : (i - 1 + buttons.length) % buttons.length;
      buttons[next].focus();
      select(buttons[next]);
    });
  }

  if (!reduce && 'IntersectionObserver' in window) {
    var reveal = document.querySelectorAll('.work-card, .sector-card, .offer-item');
    reveal.forEach(function (el) { el.classList.add('will-reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) entry.target.classList.add('is-shown');
      });
    }, { threshold: 0.12 });
    reveal.forEach(function (el) { io.observe(el); });
  }

  var visual = document.querySelector('.hero-visual');
  var tilt = document.querySelector('.hero-tilt');
  var fine = false;
  try { fine = matchMedia('(hover: hover) and (pointer: fine)').matches; } catch (e) {}
  if (visual && tilt && fine && !reduce) {
    var raf = 0;
    var tx = 0;
    var ty = 0;
    visual.addEventListener('mousemove', function (event) {
      var r = visual.getBoundingClientRect();
      tx = ((event.clientX - r.left) / r.width - 0.5) * 8;
      ty = ((event.clientY - r.top) / r.height - 0.5) * -6;
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        tilt.style.transform = 'rotateY(' + tx.toFixed(2) + 'deg) rotateX(' + ty.toFixed(2) + 'deg)';
      });
    });
    visual.addEventListener('mouseleave', function () {
      tilt.style.transform = '';
    });
  }
})();
