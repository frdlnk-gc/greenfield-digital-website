/* ============================================================
   GREENFIELD DIGITAL – Basis-Interaktionen
   Gehört zur CI-Foundation. Seiten-spezifische Skripte bitte in
   ein eigenes <script> der jeweiligen Seite, nicht hierher.
   ============================================================ */

(function () {
  'use strict';

  /* Ziel-Webhook für das Anfrage-Formular (Make → Slack #gd-anfragen) */
  var ANFRAGE_WEBHOOK = 'https://hook.eu1.make.com/dpi3yxzn8knq3wimr36vg9hg64oz5l7h';

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

  /* ---------- Anfrage-Formular ---------- */
  var form = document.getElementById('anfrageForm');
  var successBox = document.getElementById('formSuccess');
  var submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Honeypot: Bots füllen das versteckte Feld */
      var hp = form.querySelector('input[name="website"]');
      if (hp && hp.value) return;

      /* Native Validierung nutzen */
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var chips = Array.prototype.slice
        .call(form.querySelectorAll('input[name="herausforderung"]:checked'))
        .map(function (c) { return c.value; });

      var payload = {
        name: form.querySelector('#f-name').value.trim(),
        unternehmen: form.querySelector('#f-unternehmen').value.trim(),
        email: form.querySelector('#f-email').value.trim(),
        telefon: form.querySelector('#f-telefon').value.trim(),
        herausforderung: chips.join(', '),
        nachricht: form.querySelector('#f-nachricht').value.trim(),
        seite: document.title,
        url: window.location.href,
        zeit: new Date().toLocaleString('de-DE')
      };

      submitBtn.disabled = true;
      submitBtn.textContent = 'Wird gesendet…';

      fetch(ANFRAGE_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
        .then(function (res) {
          if (!res.ok) throw new Error('Webhook-Fehler ' + res.status);
          form.hidden = true;
          successBox.hidden = false;
          successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        })
        .catch(function () {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Kostenlose Beratung anfragen';
          alert('Das hat leider nicht geklappt. Bitte versuch es noch einmal oder schreib uns direkt an hello@greenfield-digital.de');
        });
    });
  }
})();
