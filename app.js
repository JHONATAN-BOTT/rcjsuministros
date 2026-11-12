(function () {
  'use strict';
  var WA = '573172684428';
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  var PRODUCTOS = [
    {"id": "cafe-aguila", "nombre": "Café Águila Roja x 500 g", "pres": "Café molido tradicional, rinde para toda la jornada.", "precio": "$28.500", "iva": 5, "linea": "Cafetería", "img": "cafe-aguila"},
    {"id": "instacrem", "nombre": "Instacrem x 100 sobres", "pres": "Crema no láctea en sobres individuales para café.", "precio": "$17.850", "iva": 19, "linea": "Cafetería", "img": "instacrem"},
    {"id": "azucar-sobres", "nombre": "Azúcar en sobres x 200", "pres": "Sobres stick de 5 g, prácticos e higiénicos.", "precio": "$7.150", "iva": 5, "linea": "Cafetería", "img": "azucar-sobres"},
    {"id": "aromatica-jaibel-100", "nombre": "Aromática Jaibel surtida x 100", "pres": "Sabores frutales surtidos en bolsita individual.", "precio": "$44.000", "iva": 19, "linea": "Cafetería", "img": "aromatica-jaibel-100"},
    {"id": "aromatica-panela", "nombre": "Aromática Doña Panelita x 50", "pres": "Aromática de panela surtida Jaibel.", "precio": "$11.900", "iva": 5, "linea": "Cafetería", "img": "aromatica-panela"},
    {"id": "aromatica-teresita", "nombre": "Aromática Teresita canela x 20", "pres": "Infusión de canela en caja de 20 bolsitas.", "precio": "$9.550", "iva": 19, "linea": "Cafetería", "img": "aromatica-teresita"},
    {"id": "te-hindu", "nombre": "Té Hindú original x 100", "pres": "Té negro clásico en bolsitas.", "precio": "$32.550", "iva": 19, "linea": "Cafetería", "img": "te-hindu"},
    {"id": "mezcladores", "nombre": "Mezcladores de madera x 500", "pres": "Palitos de madera para revolver bebidas.", "precio": "$4.000", "iva": 19, "linea": "Cafetería", "img": "mezcladores"},
    {"id": "vaso-7oz", "nombre": "Vaso de cartón 7 oz x 50", "pres": "Vaso blanco para bebidas calientes.", "precio": "$5.150", "iva": 19, "linea": "Cafetería", "img": "vaso-7oz"},
    {"id": "vaso-6oz", "nombre": "Vaso de cartón 6 oz x 50", "pres": "Ideal para tinto y aromática.", "precio": "$4.650", "iva": 19, "linea": "Cafetería", "img": "vaso-6oz"},
    {"id": "plato-icopor", "nombre": "Plato de icopor 15,5 x 20", "pres": "Plato desechable resistente para refrigerios.", "precio": "$3.450", "iva": 19, "linea": "Cafetería", "img": "plato-icopor"},
    {"id": "servilleta-elite", "nombre": "Servilleta Elite cóctel x 200", "pres": "Servilleta blanca para cafetería.", "precio": "$6.500", "iva": 19, "linea": "Cafetería", "img": "servilleta-elite"},
    {"id": "servilleta-favorita", "nombre": "Servilleta Favorita partida x 320", "pres": "Paquete económico de alto rendimiento.", "precio": "$4.300", "iva": 19, "linea": "Cafetería", "img": "servilleta-favorita"},
    {"id": "hipoclorito", "nombre": "Blanqueador Blanquitex Berhlan x 3800 ml", "pres": "Blanquea y desinfecta pisos, baños y cocinas.", "precio": "$9.900", "iva": 19, "linea": "Aseo", "img": "hipoclorito"},
    {"id": "blanqueador-sc", "nombre": "Blanqueador sin cloro Full Fresh", "pres": "Blanquea y desinfecta sin olor a cloro.", "precio": "$20.150", "iva": 19, "linea": "Aseo", "img": "blanqueador-sc"},
    {"id": "desinfectante-fuller", "nombre": "Limpiador desinfectante Full Fresh x 3785 ml", "pres": "Aromas surtidos: cereza, citrus y más.", "precio": "$13.850", "iva": 19, "linea": "Aseo", "img": "desinfectante-fuller"},
    {"id": "fabuloso", "nombre": "Fabuloso x 5000 ml", "pres": "Limpiador multiusos con aroma duradero.", "precio": "$38.100", "iva": 19, "linea": "Aseo", "img": "fabuloso"},
    {"id": "jabon-manos", "nombre": "Jabón líquido para manos Full Fresh x 3785 ml", "pres": "Garrafa para recargar dispensadores.", "precio": "$21.800", "iva": 19, "linea": "Aseo", "img": "jabon-manos"},
    {"id": "jabon-multiusos", "nombre": "Jabón multiusos Full Fresh x 3785 ml", "pres": "Limpieza general de pisos y superficies.", "precio": "$27.700", "iva": 19, "linea": "Aseo", "img": "jabon-multiusos"},
    {"id": "lavaloza", "nombre": "Lavaloza líquido Full Fresh x 2000 ml", "pres": "Aroma limón, corta la grasa.", "precio": "$17.800", "iva": 19, "linea": "Aseo", "img": "lavaloza"},
    {"id": "desengrasante", "nombre": "Desengrasante multisuperficies Full Fresh", "pres": "Remueve grasa en cocinas y equipos.", "precio": "$33.100", "iva": 19, "linea": "Aseo", "img": "desengrasante"},
    {"id": "shampoo-alfombra", "nombre": "Shampoo alfombras y tapizados Full Fresh", "pres": "Limpia alfombras y tapetes sin dañar la fibra.", "precio": "$28.450", "iva": 19, "linea": "Aseo", "img": "shampoo-alfombra"},
    {"id": "alcohol", "nombre": "Alcohol antiséptico x 3700 ml", "pres": "Desinfección de manos y superficies.", "precio": "$42.900", "iva": 5, "linea": "Aseo", "img": "alcohol"},
    {"id": "glade-aceite", "nombre": "Ambientador Glade en aceite x 3", "pres": "Repuestos de aceite, aromas surtidos.", "precio": "$32.550", "iva": 19, "linea": "Aseo", "img": "glade-aceite"},
    {"id": "pato-tanque", "nombre": "Pato tanque discos activos", "pres": "Limpia y perfuma el sanitario con cada descarga.", "precio": "$13.750", "iva": 19, "linea": "Aseo", "img": "pato-tanque"},
    {"id": "jumbo-scott", "nombre": "Papel higiénico jumbo Scott x 250 m", "pres": "Rollo institucional doble hoja.", "precio": "$19.100", "iva": 19, "linea": "Aseo", "img": "jumbo-scott"},
    {"id": "jumbo-nube", "nombre": "Papel higiénico jumbo Nube x 250 m", "pres": "Opción económica doble hoja.", "precio": "$11.050", "iva": 19, "linea": "Aseo", "img": "jumbo-nube"},
    {"id": "suplex", "nombre": "Papel higiénico Suplex (rollo)", "pres": "Precio por rollo. Doble hoja.", "precio": "$3.000", "iva": 19, "linea": "Aseo", "img": "suplex"},
    {"id": "toalla-manos", "nombre": "Toalla de manos Scott natural x 28", "pres": "Toalla en Z para dispensador.", "precio": "$7.700", "iva": 19, "linea": "Aseo", "img": "toalla-manos"},
    {"id": "faciales", "nombre": "Pañuelos faciales Familia (caja)", "pres": "Caja de pañuelos suaves.", "precio": "$4.400", "iva": 19, "linea": "Aseo", "img": "faciales"},
    {"id": "panos-humedos", "nombre": "Paños húmedos Huggies x 80", "pres": "Limpieza práctica e higiénica de manos.", "precio": "$12.400", "iva": 19, "linea": "Aseo", "img": "panos-humedos"},
    {"id": "bolsa-negra-70x90", "nombre": "Bolsa negra 70 x 90 x 10", "pres": "Bolsa grande calibre resistente.", "precio": "$4.350", "iva": 19, "linea": "Aseo", "img": "bolsa-negra-70x90"},
    {"id": "bolsa-verde", "nombre": "Bolsa verde 70 x 90 x 6", "pres": "Para residuos orgánicos según código de colores.", "precio": "$3.800", "iva": 19, "linea": "Aseo", "img": "bolsa-verde"},
    {"id": "bolsa-blanca", "nombre": "Bolsa blanca 100 x 120 x 5", "pres": "Extra grande para canecas de 55 galones.", "precio": "$9.400", "iva": 19, "linea": "Aseo", "img": "bolsa-blanca"},
    {"id": "bolsa-negra-40x55", "nombre": "Bolsa negra papelera x 10", "pres": "Tamaño papelera para oficina y baño.", "precio": "$1.900", "iva": 19, "linea": "Aseo", "img": "bolsa-negra-40x55"},
    {"id": "bolsa-hermetica", "nombre": "Bolsa con cierre hermético (unidad)", "pres": "Precio por bolsa. Para alimentos y documentos.", "precio": "$130", "iva": 19, "linea": "Aseo", "img": "bolsa-hermetica"},
    {"id": "escoba-suave", "nombre": "Escoba suave Fuller", "pres": "Barre polvo fino en pisos lisos.", "precio": "$10.200", "iva": 19, "linea": "Aseo", "img": "escoba-suave"},
    {"id": "escoba-dura", "nombre": "Escoba dura Fuller", "pres": "Ideal para patios y zonas exteriores.", "precio": "$9.450", "iva": 19, "linea": "Aseo", "img": "escoba-dura"},
    {"id": "escoba-plana", "nombre": "Escoba plana 38 cm Trapisol", "pres": "Base ancha para áreas amplias.", "precio": "$7.450", "iva": 19, "linea": "Aseo", "img": "escoba-plana"},
    {"id": "trapeador", "nombre": "Trapeador 1200 g Trapisol", "pres": "Mecha de algodón con acople, sin palo.", "precio": "$10.900", "iva": 19, "linea": "Aseo", "img": "trapeador"},
    {"id": "palo", "nombre": "Palo de escoba 1,40 m", "pres": "Colores surtidos, rosca universal.", "precio": "$6.650", "iva": 19, "linea": "Aseo", "img": "palo"},
    {"id": "recogedor", "nombre": "Recogedor plástico con banda", "pres": "Borde de caucho que no deja residuos.", "precio": "$4.700", "iva": 19, "linea": "Aseo", "img": "recogedor"},
    {"id": "mopa", "nombre": "Brillador mopa 82 cm Fuller", "pres": "Para brillar y recoger polvo en grandes áreas.", "precio": "$72.200", "iva": 19, "linea": "Aseo", "img": "mopa"},
    {"id": "limpion", "nombre": "Limpión microfibra 40 x 40 x 5", "pres": "Absorbe y no deja pelusa.", "precio": "$23.750", "iva": 19, "linea": "Aseo", "img": "limpion"},
    {"id": "esponja", "nombre": "Esponja Iris doble uso", "pres": "Colores surtidos, cara abrasiva.", "precio": "$3.300", "iva": 19, "linea": "Aseo", "img": "esponja"},
    {"id": "bayetilla", "nombre": "Bayetilla blanca x metro", "pres": "Tela absorbente para limpieza.", "precio": "$8.200", "iva": 19, "linea": "Aseo", "img": "bayetilla"},
    {"id": "papelera", "nombre": "Papelera vaivén 10 L", "pres": "Tapa vaivén para baños y oficinas.", "precio": "$18.150", "iva": 19, "linea": "Aseo", "img": "papelera"},
    {"id": "atomizador", "nombre": "Atomizador con pistola", "pres": "Para diluir y aplicar productos.", "precio": "$2.600", "iva": 19, "linea": "Aseo", "img": "atomizador"},
    {"id": "guante-nitrilo-azul", "nombre": "Guante de nitrilo azul x 100", "pres": "Caja x 100, tallas S, M y L.", "precio": "$37.800", "iva": 19, "linea": "Aseo", "img": "guante-nitrilo-azul"},
    {"id": "guante-nitrilo-negro", "nombre": "Guante de nitrilo negro x 100", "pres": "Mayor resistencia, talla M.", "precio": "$31.400", "iva": 19, "linea": "Aseo", "img": "guante-nitrilo-negro"},
    {"id": "guante-eterna", "nombre": "Guante Eterna calibre 25", "pres": "Guante de caucho para aseo, tallas 8 y 9.", "precio": "$5.350", "iva": 19, "linea": "Aseo", "img": "guante-eterna"},
    {"id": "tapabocas", "nombre": "Tapabocas desechable x 50", "pres": "Triple capa, uso desechable.", "precio": "$12.600", "iva": 19, "linea": "Aseo", "img": "tapabocas"},
    {"id": "resma", "nombre": "Resma carta 75 g Cartoprint", "pres": "500 hojas blancas para impresión.", "precio": "$17.650", "iva": 19, "linea": "Papelería", "img": "resma"},
    {"id": "postit", "nombre": "Notas adhesivas neón 654", "pres": "Notas adhesivas de colores.", "precio": "$3.100", "iva": 19, "linea": "Papelería", "img": "postit"},
    {"id": "cinta-pegante", "nombre": "Cinta pegante transparente 12 mm x 40 m", "pres": "Transparente, uso general.", "precio": "$1.250", "iva": 19, "linea": "Papelería", "img": "cinta-pegante"},
    {"id": "cinta-enmascarar", "nombre": "Cinta de enmascarar 18 mm", "pres": "Para marcar, rotular y sellar.", "precio": "$3.700", "iva": 19, "linea": "Papelería", "img": "cinta-enmascarar"},
    {"id": "esfero-gel", "nombre": "Esfero gel negro Norma (unidad)", "pres": "Precio por unidad. Escritura suave.", "precio": "$550", "iva": 19, "linea": "Papelería", "img": "esfero-gel"},
    {"id": "cosedora", "nombre": "Cosedora Tritón 20 hojas", "pres": "Metálica, de escritorio.", "precio": "$13.450", "iva": 19, "linea": "Papelería", "img": "cosedora"},
    {"id": "archivador", "nombre": "Archivador fuelle carta", "pres": "Polipropileno de 13 bolsillos.", "precio": "$13.650", "iva": 19, "linea": "Papelería", "img": "archivador"},
    {"id": "zuncho", "nombre": "Zuncho rollo x 3000 m", "pres": "Para embalaje y despachos.", "precio": "$54.100", "iva": 19, "linea": "Papelería", "img": "zuncho"},
    {"id": "malla", "nombre": "Guante de malla cárnico corto", "pres": "Talla M", "precio": "$540.000", "iva": 19, "linea": "Otros", "img": "malla"},
    {"id": "cuchillo", "nombre": "Cuchillo carnicero N.º 12 Tres Claveles", "pres": "Unidad", "precio": "$236.000", "iva": 19, "linea": "Otros", "img": "cuchillo"},
    {"id": "gancho", "nombre": "Gancho cárnico de desposte", "pres": "15 cm", "precio": "$64.000", "iva": 19, "linea": "Otros", "img": "gancho"},
    {"id": "aceite", "nombre": "Aceite para guadaña 2 tiempos Shindaiwa", "pres": "Envase x 1/4", "precio": "$438.000", "iva": 19, "linea": "Otros", "img": "aceite"},
    {"id": "hidro", "nombre": "Hidrolavadora 1560 PSI", "pres": "7 L/min · 1500 W", "precio": "$304.200", "iva": 19, "linea": "Otros", "img": "hidro"},
    {"id": "bisturi", "nombre": "Repuesto de bisturí grande", "pres": "Estuche x 10 und", "precio": "$26.100", "iva": 19, "linea": "Otros", "img": "bisturi"},
    {"id": "selloRojo", "nombre": "Café Sello Rojo", "pres": "Bolsa x 500 g", "precio": "$27.700", "iva": 5, "linea": "Cafetería", "img": "selloRojo"},
    {"id": "vasoTrans", "nombre": "Vaso transparente 7 oz", "pres": "Paquete x 50 und", "precio": "$2.800", "iva": 19, "linea": "Cafetería", "img": "vasoTrans"},
    {"id": "toallaElite", "nombre": "Toalla de manos natural Elite", "pres": "Rollo x 100 m", "precio": "$19.700", "iva": 19, "linea": "Aseo", "img": "toallaElite"},
    {"id": "wypall", "nombre": "Paños WYPALL X-70 blanco", "pres": "Rollo x 88 paños", "precio": "$38.500", "iva": 19, "linea": "Aseo", "img": "wypall"},
    {"id": "sharpieInd", "nombre": "Marcador industrial Sharpie", "pres": "Unidad", "precio": "$2.000", "iva": 19, "linea": "Papelería", "img": "sharpieInd"},
    {"id": "faber", "nombre": "Marcador permanente Faber", "pres": "Unidad", "precio": "$1.500", "iva": 19, "linea": "Papelería", "img": "faber"},
    {"id": "bic", "nombre": "Esfero BIC cristal negro", "pres": "Unidad", "precio": "$700", "iva": 19, "linea": "Papelería", "img": "bic"},
    {"id": "resaltador", "nombre": "Resaltador", "pres": "Unidad, varios colores", "precio": "$1.500", "iva": 19, "linea": "Papelería", "img": "resaltador"},
    {"id": "az", "nombre": "Legajador AZ azul plastificado", "pres": "Carta u oficio", "precio": "$5.200", "iva": 19, "linea": "Papelería", "img": "az"},
    {"id": "folder", "nombre": "Folder colgante azul Norma", "pres": "Unidad", "precio": "$900", "iva": 19, "linea": "Papelería", "img": "folder"}
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
        '<div class="card-img"><img src="img/p/' + p.img + '.jpg" alt="' + esc(p.nombre) + '" loading="lazy" width="200" height="150"><span class="line">' + p.linea + '</span></div>' +
        '<div class="card-body"><h3>' + esc(p.nombre) + '</h3><span class="pres">' + esc(p.pres) + '</span>' +
        '<div class="card-foot"><span class="price num">' + p.precio + '<small>+ IVA ' + p.iva + '%</small></span><span data-ctl="' + p.id + '">' + control(p, false) + '</span></div></div></article>';
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
      return '<div class="list-row"><div class="thumb"><img src="img/p/' + p.img + '.jpg" alt=""></div><div class="name">' + esc(p.nombre) + '<span>' + esc(p.pres) + ' · ' + p.precio + ' + IVA ' + p.iva + '%</span></div>' + control(p, true) + '</div>';
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
