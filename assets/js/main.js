/* ============================================================
   GREENFIELD DIGITAL – Basis-Interaktionen
   Gehört zur CI-Foundation. Seiten-spezifische Skripte bitte in
   ein eigenes <script> der jeweiligen Seite, nicht hierher.
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Navigation: Schatten beim Scrollen ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Burger-Menü (mobil) ---------- */
  var burger = document.getElementById('burger');
  var navLinks = document.getElementById('navLinks');
  if (burger && navLinks) {
    burger.addEventListener('click', function () {
      var open = navLinks.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
      burger.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    /* Menü schließen, wenn ein Link geklickt wird */
    navLinks.addEventListener('click', function (e) {
      var link = e.target.closest('a');
      if (!link) return;
      var parentDrop = link.closest('.has-drop');
      var isMobile = window.matchMedia('(max-width: 820px)').matches;
      /* Auf mobil öffnet der Eltern-Link erst das Untermenü */
      if (isMobile && parentDrop && link.parentElement === parentDrop && !parentDrop.classList.contains('open')) {
        e.preventDefault();
        parentDrop.classList.add('open');
        return;
      }
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  }

  /* ---------- Scroll-Reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- Zähler-Animation ---------- */
  function animateCount(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    var useSep = el.getAttribute('data-sep') === '.';
    var duration = 1600;
    var start = null;

    function format(n) {
      return useSep ? n.toLocaleString('de-DE') : String(n);
    }
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      /* ease-out */
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = format(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(entry.target);
          cio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (el) { cio.observe(el); });
  } else {
    counters.forEach(function (el) {
      el.textContent = parseInt(el.getAttribute('data-count'), 10).toLocaleString('de-DE');
    });
  }

  /* ---------- Orbit: Hover/Fokus tauscht den Text in der Mitte ---------- */
  var orbitText = document.getElementById('orbitText');
  if (orbitText) {
    var orbitDefault = orbitText.textContent;
    document.querySelectorAll('.orbit-item').forEach(function (item) {
      function show() { orbitText.textContent = item.getAttribute('data-text') || orbitDefault; }
      function hide() { orbitText.textContent = orbitDefault; }
      item.addEventListener('mouseenter', show);
      item.addEventListener('focus', show);
      item.addEventListener('mouseleave', hide);
      item.addEventListener('blur', hide);
    });
  }

  /* ---------- Karte: sanfter 3D-Tilt bei Mausbewegung ---------- */
  var fineMotion = window.matchMedia('(pointer: fine)').matches &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (fineMotion) {
    document.querySelectorAll('.map-visual').forEach(function (vis) {
      var tilt = document.createElement('div');
      tilt.className = 'map-tilt';
      while (vis.firstChild) tilt.appendChild(vis.firstChild);
      vis.appendChild(tilt);
      vis.addEventListener('mousemove', function (e) {
        var r = vis.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        tilt.style.transform = 'rotateY(' + (x * 6) + 'deg) rotateX(' + (-y * 6) + 'deg)';
      });
      vis.addEventListener('mouseleave', function () {
        tilt.style.transform = 'none';
      });
    });
  }

  /* ---------- Phone-Mockups: Animation starten, sobald sichtbar ---------- */
  var phones = document.querySelectorAll('.phone-mock');
  if (phones.length && 'IntersectionObserver' in window) {
    var pio = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('play');
          pio.unobserve(entry.target);
        }
      });
    }, { threshold: 0.35 });
    phones.forEach(function (p) { pio.observe(p); });
  } else {
    phones.forEach(function (p) { p.classList.add('play'); });
  }

  /* ---------- Formulare (alle mit data-webhook) ----------
     Jedes Formular mit data-webhook="https://hook.eu1.make.com/…" wird
     als JSON an Make gesendet. Erfolgs-Box: nächstes .form-success-Element
     im selben Container. Pflichtfelder über required-Attribute. */
  document.querySelectorAll('form[data-webhook]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Honeypot: Bots füllen das versteckte Feld */
      var hp = form.querySelector('input[name="website"]');
      if (hp && hp.value) return;

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      /* Felder generisch einsammeln; Checkbox-Gruppen werden verbunden */
      var payload = {};
      var fd = new FormData(form);
      fd.forEach(function (value, key) {
        if (key === 'website') return;
        var v = String(value).trim();
        if (payload[key]) {
          payload[key] = payload[key] + ', ' + v;
        } else {
          payload[key] = v;
        }
      });
      payload.seite = document.title;
      payload.url = window.location.href;
      payload.zeit = new Date().toLocaleString('de-DE');

      var submitBtn = form.querySelector('[type="submit"]');
      var originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Wird gesendet…';
      }

      fetch(form.getAttribute('data-webhook'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Webhook-Fehler ' + res.status);
          var box = form.parentElement.querySelector('.form-success');
          form.hidden = true;
          if (box) {
            box.hidden = false;
            box.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        })
        .catch(function () {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalLabel;
          }
          alert('Das hat leider nicht geklappt. Bitte versuch es noch einmal oder schreib uns direkt an hello@greenfield-digital.de');
        });
    });
  });
})();
