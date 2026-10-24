(function () {
  'use strict';
  var WA = '573172684428';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var PRODUCTOS = [
    { id: 'vaso6', nombre: 'Vaso de cartón 6 oz', pres: 'Paquete x 50 und', precio: '$4.500', linea: 'Cafetería', img: 'vaso-carton' },
    { id: 'toallaElite', nombre: 'Toalla de manos natural Elite', pres: 'Rollo x 100 m', precio: '$19.700', linea: 'Aseo', img: 'toalla-rollo' },
    { id: 'jumbo', nombre: 'Papel higiénico jumbo HD Elite', pres: 'Rollo x 250 m', precio: '$11.300', linea: 'Aseo', img: 'papel-jumbo' },
    { id: 'vaso7', nombre: 'Vaso transparente 7 oz', pres: 'Paquete x 50 und', precio: '$2.800', linea: 'Cafetería', img: 'vaso-transparente' },
    { id: 'servilleta', nombre: 'Servilleta Favorita', pres: 'Paquete x 320 und', precio: '$3.200', linea: 'Cafetería', img: 'servilletas' },
    { id: 'esponja', nombre: 'Esponja multiusos plateada', pres: 'Unidad', precio: '$2.900', linea: 'Aseo', img: 'esponja' },
    { id: 'selloRojo', nombre: 'Café Sello Rojo', pres: 'Bolsa x 500 g', precio: '$27.700', linea: 'Cafetería', img: 'cafe' },
    { id: 'aguila', nombre: 'Café Águila Roja', pres: 'Bolsa x 500 g', precio: '$27.200', linea: 'Cafetería', img: 'cafe' },
    { id: 'tapabocas', nombre: 'Tapabocas desechable blanco', pres: 'Caja x 50 und', precio: '$12.000', linea: 'Aseo', img: 'tapabocas' },
    { id: 'nitrilo', nombre: 'Guante de nitrilo azul', pres: 'Caja x 100 und', precio: '$36.000', linea: 'Aseo', img: 'guantes-nitrilo' },
    { id: 'bolsa4055', nombre: 'Bolsa negra 40 x 55', pres: 'Paquete x 10 und', precio: '$1.800', linea: 'Aseo', img: 'bolsa-basura' },
    { id: 'wypall', nombre: 'Paños WYPALL X-70 blanco', pres: 'Rollo x 88 paños', precio: '$38.500', linea: 'Aseo', img: 'panos-rollo' },
    { id: 'sharpieInd', nombre: 'Marcador industrial Sharpie', pres: 'Unidad', precio: '$2.000', linea: 'Papelería', img: 'marcador' },
    { id: 'faber', nombre: 'Marcador permanente Faber', pres: 'Unidad', precio: '$1.500', linea: 'Papelería', img: 'marcador' },
    { id: 'resmaRepro', nombre: 'Resma carta 75 g Reprograf', pres: 'Resma x 500 hojas', precio: '$16.700', linea: 'Papelería', img: 'resma' },
    { id: 'resmaEco', nombre: 'Resma carta 75 g ecológica', pres: 'Resma x 500 hojas', precio: '$18.900', linea: 'Papelería', img: 'resma' },
    { id: 'bic', nombre: 'Esfero BIC cristal negro', pres: 'Unidad', precio: '$700', linea: 'Papelería', img: 'esfero' },
    { id: 'resaltador', nombre: 'Resaltador', pres: 'Unidad, varios colores', precio: '$1.500', linea: 'Papelería', img: 'resaltador' },
    { id: 'az', nombre: 'Legajador AZ azul plastificado', pres: 'Carta u oficio', precio: '$5.200', linea: 'Papelería', img: 'legajador' },
    { id: 'folder', nombre: 'Folder colgante azul Norma', pres: 'Unidad', precio: '$900', linea: 'Papelería', img: 'folder' },
    { id: 'malla', nombre: 'Guante de malla cárnico corto', pres: 'Talla M', precio: '$540.000', linea: 'Otros', img: 'guante-malla' },
    { id: 'cuchillo', nombre: 'Cuchillo carnicero N.º 12 Tres Claveles', pres: 'Unidad', precio: '$236.000', linea: 'Otros', img: 'cuchillo' },
    { id: 'gancho', nombre: 'Gancho cárnico de desposte', pres: '15 cm', precio: '$64.000', linea: 'Otros', img: 'gancho' },
    { id: 'aceite', nombre: 'Aceite para guadaña 2 tiempos Shindaiwa', pres: 'Envase x 1/4', precio: '$438.000', linea: 'Otros', img: 'aceite' },
    { id: 'hidro', nombre: 'Hidrolavadora 1560 PSI', pres: '7 L/min · 1500 W', precio: '$304.200', linea: 'Otros', img: 'hidrolavadora' },
    { id: 'zuncho', nombre: 'Zuncho en rollo', pres: 'Rollo x 1000 m', precio: '$51.500', linea: 'Otros', img: 'zuncho' },
    { id: 'bisturi', nombre: 'Repuesto de bisturí grande', pres: 'Estuche x 10 und', precio: '$26.100', linea: 'Otros', img: 'bisturi' }
  ];
  var LINEAS = ['Todos', 'Aseo', 'Cafetería', 'Papelería', 'Otros'];
  var FAQ = [
    ['¿Emiten factura electrónica?', 'Sí. Cada entrega se factura electrónicamente y va con su remisión firmada.'],
    ['¿Trabajan con órdenes de compra?', 'Sí. Envíenos su orden de compra por correo o WhatsApp y la despachamos según lo pedido.'],
    ['¿A qué zonas entregan?', 'Entregamos en Bogotá y municipios cercanos. Si está fuera de la ciudad, escríbanos y le confirmamos.'],
    ['¿Cuánto tarda la entrega?', 'Entre 2 y 5 días hábiles después de confirmado el pedido.'],
    ['¿Qué formas de pago manejan?', 'Manejamos crédito a 30 días para empresas.'],
    ['¿Hay pedido mínimo?', 'No manejamos pedido mínimo.'],
    ['¿Cuál es el horario de atención?', 'De lunes a viernes, de 8:00 a. m. a 5:00 p. m.']
  ];

  var byId = {};
  PRODUCTOS.forEach(function (p) { byId[p.id] = p; });
  var state = { filtro: 'Todos', cart: {} };
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); };
  var PLUS = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';

  /* ---------- Pestañas con clip-path ---------- */
  function renderTabs() {
    var html = function (copy) {
      return LINEAS.map(function (l) {
        return copy
          ? '<span class="tab" style="display:inline-flex;align-items:center">' + l + '</span>'
          : '<button type="button" role="tab" class="tab" data-tab="' + l + '" aria-selected="' + (l === state.filtro) + '">' + l + '</button>';
      }).join('');
    };
    $('tabsRow').innerHTML = html(false);
    $('tabsCopy').innerHTML = html(true);
    positionClip();
  }
  function positionClip() {
    var row = $('tabsRow');
    var btn = row.querySelector('[data-tab="' + state.filtro + '"]');
    if (!btn) return;
    var r = row.getBoundingClientRect(), b = btn.getBoundingClientRect();
    var top = b.top - r.top, left = b.left - r.left;
    var right = r.width - left - b.width, bottom = r.height - top - b.height;
    $('tabsActive').style.clipPath = 'inset(' + top + 'px ' + right + 'px ' + bottom + 'px ' + left + 'px round 10px)';
  }
  function setFiltro(l) {
    state.filtro = l;
    $('tabsRow').querySelectorAll('[data-tab]').forEach(function (b) { b.setAttribute('aria-selected', b.dataset.tab === l); });
    positionClip();
    renderGrid(true);
  }

  /* ---------- Productos ---------- */
  function control(p, light) {
    var q = state.cart[p.id] || 0;
    if (!q) return '<button type="button" class="add" data-add="' + p.id + '" aria-label="Agregar ' + esc(p.nombre) + '">' + PLUS + 'Agregar</button>';
    return '<div class="step' + (light ? ' light' : '') + '"><button type="button" data-dec="' + p.id + '" aria-label="Quitar uno de ' + esc(p.nombre) + '">−</button><span class="num" aria-live="polite">' + q + '</span><button type="button" data-inc="' + p.id + '" aria-label="Agregar uno más de ' + esc(p.nombre) + '">+</button></div>';
  }
  function renderGrid(stagger) {
    var lista = state.filtro === 'Todos' ? PRODUCTOS : PRODUCTOS.filter(function (p) { return p.linea === state.filtro; });
    $('grid').innerHTML = lista.map(function (p, i) {
      var delay = stagger ? Math.min(i, 10) * 30 : 0; // 30 ms entre tarjetas, tope corto
      return '<article class="card" data-card="' + p.id + '" style="animation-delay:' + delay + 'ms' + (stagger ? '' : ';animation:none') + '">' +
        '<div class="card-img"><img src="img/' + p.img + '.svg" alt="' + esc(p.nombre) + '" loading="lazy" width="200" height="150"><span class="line">' + p.linea + '</span></div>' +
        '<div class="card-body"><h3>' + esc(p.nombre) + '</h3><span class="pres">' + esc(p.pres) + '</span>' +
        '<div class="card-foot"><span class="price num">' + p.precio + '<small>+ IVA</small></span><span data-ctl="' + p.id + '">' + control(p, false) + '</span></div></div></article>';
    }).join('');
  }
  function refreshControls(id) {
    var slot = document.querySelector('[data-ctl="' + id + '"]');
    if (slot) slot.innerHTML = control(byId[id], false);
  }

  /* ---------- Pedido ---------- */
  function count() { return Object.keys(state.cart).length; }
  function renderList() {
    var ids = Object.keys(state.cart), n = ids.length;
    $('listEmpty').hidden = n > 0;
    $('listBox').hidden = n === 0;
    $('listBox').innerHTML = ids.map(function (id) {
      var p = byId[id];
      return '<div class="list-row"><div class="thumb"><img src="img/' + p.img + '.svg" alt=""></div><div class="name">' + esc(p.nombre) + '<span>' + esc(p.pres) + ' · ' + p.precio + ' + IVA</span></div>' + control(p, true) + '</div>';
    }).join('');
    $('drawerCount').textContent = n ? '· ' + (n === 1 ? '1 producto' : n + ' productos') : '';
    var badge = $('badge'), prev = badge.textContent;
    badge.hidden = n === 0;
    badge.textContent = n;
    if (n && String(n) !== prev && !reduce.matches && badge.animate) {
      badge.animate([{ transform: 'scale(.8)' }, { transform: 'scale(1)' }], { duration: 220, easing: 'cubic-bezier(.23,1,.32,1)' });
    }
    updateLink();
  }
  function setQty(id, q) {
    var prev = state.cart[id] || 0;
    if (q <= 0) delete state.cart[id]; else state.cart[id] = q;
    if (!prev && q > 0) toast(byId[id].nombre);
    refreshControls(id);
    renderList();
  }

  /* ---------- Toast: transición interrumpible ---------- */
  var toastTimer, hideTimer;
  function toast(nombre) {
    var t = $('toast');
    $('toastName').textContent = nombre;
    clearTimeout(toastTimer); clearTimeout(hideTimer);
    if (t.hidden) {
      t.hidden = false;
      requestAnimationFrame(function () { requestAnimationFrame(function () { t.setAttribute('data-mounted', ''); }); });
    } else {
      t.setAttribute('data-mounted', '');
    }
    toastTimer = setTimeout(hideToast, 2600);
  }
  function hideToast() {
    var t = $('toast');
    t.removeAttribute('data-mounted');
    hideTimer = setTimeout(function () { t.hidden = true; }, 400);
  }
  // Pausar el temporizador si la pestaña se oculta
  document.addEventListener('visibilitychange', function () {
    if (document.hidden) clearTimeout(toastTimer);
    else if (!$('toast').hidden) toastTimer = setTimeout(hideToast, 1500);
  });

  /* ---------- Drawer ---------- */
  var lastFocus = null;
  function openDrawer() {
    lastFocus = document.activeElement;
    document.body.classList.remove('drawer-instant');
    document.body.classList.add('drawer-open');
    document.body.style.overflow = 'hidden';
    hideToast();
    setTimeout(function () { var c = $('drawer').querySelector('[data-close-drawer]'); if (c) c.focus({ preventScroll: true }); }, 60);
  }
  function closeDrawer(instant) {
    if (!document.body.classList.contains('drawer-open')) return;
    // Acciones de teclado: sin animación
    document.body.classList.toggle('drawer-instant', !!instant);
    document.body.classList.remove('drawer-open');
    document.body.style.overflow = '';
    if (lastFocus && lastFocus.focus) lastFocus.focus({ preventScroll: true });
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer(true);
  });

  /* ---------- Mensaje de WhatsApp ---------- */
  function mensaje() {
    var nombre = $('nombre').value.trim(), empresa = $('empresa').value.trim(), extra = $('extra').value.trim();
    var lineas = Object.keys(state.cart).map(function (id) { var p = byId[id]; return '• ' + state.cart[id] + ' x ' + p.nombre + ' (' + p.pres + ')'; });
    return 'Hola RCJ Suministros, quiero una cotización.' +
      (nombre ? '\nNombre: ' + nombre : '') + (empresa ? '\nEmpresa: ' + empresa : '') +
      (lineas.length ? '\n\nProductos:\n' + lineas.join('\n') : '') +
      (extra ? '\n\nOtros / comentarios:\n' + extra : '');
  }
  function updateLink() {
    var ok = $('autoriza').checked, btn = $('sendBtn');
    btn.setAttribute('aria-disabled', ok ? 'false' : 'true');
    btn.href = 'https://wa.me/' + WA + '?text=' + encodeURIComponent(mensaje());
    if (ok) $('consentError').hidden = true;
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    $('faq').innerHTML = FAQ.map(function (q, i) {
      return '<div class="qa"><button type="button" aria-expanded="false" aria-controls="ans' + i + '" data-qa>' + esc(q[0]) +
        '<span class="plus" aria-hidden="true"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0F5C4A" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg></span></button>' +
        '<div class="ans" id="ans' + i + '" role="region"><div><p>' + esc(q[1]) + '</p></div></div></div>';
    }).join('');
  }

  /* ---------- Eventos ---------- */
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-tab],[data-add],[data-inc],[data-dec],[data-open-drawer],[data-close-drawer],[data-qa],[data-go-line]');
    if (!t) return;
    if (t.dataset.tab) { setFiltro(t.dataset.tab); return; }
    if (t.hasAttribute('data-open-drawer')) { e.preventDefault(); openDrawer(); return; }
    if (t.hasAttribute('data-close-drawer')) { closeDrawer(false); return; }
    if (t.hasAttribute('data-qa')) {
      var qa = t.parentElement, open = !qa.hasAttribute('data-open');
      qa.toggleAttribute('data-open', open);
      t.setAttribute('aria-expanded', open);
      return;
    }
    if (t.dataset.goLine) {
      setFiltro(t.dataset.goLine);
      $('productos').scrollIntoView({ behavior: reduce.matches ? 'auto' : 'smooth' });
      return;
    }
    var id = t.dataset.add || t.dataset.inc || t.dataset.dec, q = state.cart[id] || 0;
    if (t.dataset.add) setQty(id, 1);
    else if (t.dataset.inc) setQty(id, q + 1);
    else setQty(id, q - 1);
  });
  $('sendBtn').addEventListener('click', function (e) {
    if (!$('autoriza').checked) { e.preventDefault(); $('consentError').hidden = false; $('autoriza').focus(); }
    else updateLink();
  });
  ['nombre', 'empresa', 'extra'].forEach(function (id) { $(id).addEventListener('input', updateLink); });
  $('autoriza').addEventListener('change', updateLink);

  /* Header: separación solo cuando hay contenido debajo */
  var header = $('header');
  var onScroll = function () { header.toggleAttribute('data-scrolled', window.scrollY > 8); };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* Revelado al hacer scroll: una sola vez */
  var revealEls = document.querySelectorAll('.reveal,.reveal-clip');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, sibs = el.parentElement ? Array.prototype.filter.call(el.parentElement.children, function (c) { return c.classList.contains('reveal'); }) : [];
        var idx = sibs.indexOf(el);
        if (idx > 0 && el.classList.contains('reveal')) el.style.transitionDelay = Math.min(idx, 4) * 60 + 'ms';
        el.setAttribute('data-visible', '');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -80px 0px', threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.setAttribute('data-visible', ''); });
  }

  window.addEventListener('resize', positionClip);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(positionClip);

  renderTabs(); renderGrid(false); renderList(); renderFaq();
})();
