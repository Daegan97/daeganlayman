// The desk lamp is the site's light and dark mode, and it stays how the visitor left it.
(function () {
  var saved = null, root = document.documentElement;
  try { saved = localStorage.getItem('lamp'); } catch (e) {}
  var night = saved ? saved === 'night' : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.lamp = night ? 'night' : 'day';
  addEventListener('DOMContentLoaded', function () {
    var b = document.getElementById('lamp');
    function label() { b.textContent = night ? 'Lamp off' : 'Lamp on'; }
    label();
    b.addEventListener('click', function () {
      night = !night; root.dataset.lamp = night ? 'night' : 'day'; label();
      try { localStorage.setItem('lamp', night ? 'night' : 'day'); } catch (e) {}
    });
  });
})();
