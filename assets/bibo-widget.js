(function () {
  if (document.getElementById('bibo-root')) return;
  var path = location.pathname;
  if (path === '/bibo' || path.indexOf('/bibo/') === 0) return;

  var KEY = 'bibo-widget';
  var WA = 'https://wa.me/message/5VB7SV74VVEKE1';
  var demo = path.indexOf('/demos/') !== -1;

  function base() {
    var p = path.replace(/\/index\.html$/i, '/').replace(/\/[^/]+\.html$/i, '/');
    if (p.slice(-1) !== '/') p += '/';
    var depth = p.split('/').filter(Boolean).length;
    return depth ? new Array(depth + 1).join('../') : '';
  }
  function href(code) {
    if (code === 'wa') return WA;
    if (code === 'mail') return 'mailto:sjgomesarouca@gmail.com';
    if (code.charAt(0) === '#') return base() + 'index.html' + code;
    return base() + 'demos/' + code + '/index.html';
  }

  var greet = demo
    ? 'Olá. Sou o Bibo, da Gomes IA Digital. Esta página é um conceito de demonstração, de um negócio fictício.'
    : 'Olá. Sou o Bibo, assistente da Gomes IA Digital. Escolhe um assunto.';
  var topics = {
    site: ['Quero um website', 'Desde 80 €: uma página com até 5 secções, versão para telemóvel, botões de WhatsApp e contacto, mapa e horário, título e descrição básicos, alojamento gratuito num subdomínio, 1 ronda de alterações e cerca de 7 dias depois do conteúdo. Fora disto, é orçamento à parte.', [['Preços', '#preco'], ['Demonstrações', '#demos']]],
    exemplos: ['Ver exemplos', 'Estes quatro sites são conceitos de demonstração, com negócios fictícios. Não são clientes reais.', [['Barbearia Leme (conceito)', 'barbearia-leme'], ['Mesa da Encosta (conceito)', 'mesa-da-encosta'], ['Casa do Vale (conceito)', 'casa-do-vale'], ['Barro e Linho (conceito)', 'barro-e-linho']]],
    ajuda: ['Ajuda com tecnologia em Arouca', 'A assistência é presencial no concelho de Arouca. O diagnóstico é gratuito e pagas só o tempo a resolver. Não há tabela de preços: o valor combina-se pelo WhatsApp.', [['Assistência', '#assistencia'], ['WhatsApp', 'wa']]],
    custo: ['Quanto custa?', 'No site só estão estes valores: website desde 80 € e domínio próprio cerca de 10–15 € por ano, pago por ti. Páginas extra, loja, marcações, textos, fotos, manutenção e revisões extra são orçamento. Para o resto, o preço é dado pelo WhatsApp.', [['Preços', '#preco'], ['WhatsApp', 'wa']]],
    pedro: ['Falar com o Pedro', 'Podes falar com o Pedro Gomes pelo WhatsApp ou por e-mail.', [['WhatsApp', 'wa'], ['E-mail', 'mail']]]
  };
  var order = ['site', 'exemplos', 'ajuda', 'custo', 'pedro', 'reset'];
  var face = '<svg class="face" width="22" height="22" viewBox="0 0 32 32" aria-hidden="true"><rect x="6" y="8" width="20" height="16" rx="5" fill="none" stroke="#22e3f0" stroke-width="1.6"/><circle cx="13" cy="16" r="2" fill="#22e3f0"/><circle cx="19" cy="16" r="2" fill="#8b5cf6"/><circle cx="16" cy="4" r="1.6" fill="#8b5cf6"/></svg>';

  var style = document.createElement('style');
  style.textContent = '#bibo-root{position:fixed;z-index:60;right:max(12px,env(safe-area-inset-right));bottom:var(--bb,calc(16px + env(safe-area-inset-bottom)));display:flex;flex-direction:column;align-items:flex-end;max-width:calc(100vw - 16px - env(safe-area-inset-left) - env(safe-area-inset-right));pointer-events:none;font-family:system-ui,sans-serif;color:#eaf2ff;line-height:1.45}#bibo-root *{box-sizing:border-box}#bibo-root [hidden]{display:none!important}#bibo-root button{font:inherit;cursor:pointer;color:inherit}#bibo-root .fab,#bibo-root .panel,#bibo-root .bar{pointer-events:auto}#bibo-root :focus-visible{outline:3px solid #22e3f0;outline-offset:2px}#bibo-root .fab{position:relative;display:inline-flex;align-items:center;gap:8px;min-height:48px;padding:8px 16px 8px 10px;border-radius:999px;border:1.5px solid #22e3f0;background:#0d1b3d;font-weight:650;font-size:15px;box-shadow:0 8px 24px #070a1a55}#bibo-root.is-demo .fab{min-height:44px;padding:6px 12px 6px 8px;font-size:13px;box-shadow:none}#bibo-root .panel{width:min(340px,100%);max-height:min(440px,calc(100dvh - var(--bb) - 12px));display:flex;flex-direction:column;background:#0d1b3d;border:1px solid #22e3f0;border-radius:16px;box-shadow:0 12px 40px #070a1a66;overflow:hidden}#bibo-root .head{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;background:#070a1a}#bibo-root h2{flex:1;margin:0;font:600 13px/1.3 system-ui,sans-serif;letter-spacing:0;color:#eaf2ff}#bibo-root .icon{width:44px;height:44px;border:0;border-radius:10px;background:transparent;font-size:22px;line-height:1}#bibo-root .kicker{margin:0;padding:6px 12px 0;color:#c9d4ea;font-size:12px}#bibo-root .log{overflow:auto;display:flex;flex-direction:column;gap:8px;padding:12px;min-height:0}#bibo-root .msg{max-width:92%;border-radius:12px;padding:8px 10px;font-size:14px}#bibo-root .msg p{margin:0}#bibo-root .msg.b{align-self:flex-start;background:#12243f;border:1px solid #8b5cf666}#bibo-root .msg.u{align-self:flex-end;background:#1a2d55}#bibo-root .links{display:flex;flex-wrap:wrap;gap:6px 10px;margin-top:8px}#bibo-root .links a{color:#d8fbff;font-weight:650;text-underline-offset:2px}#bibo-root .chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px 12px;border-top:1px solid #22e3f033}#bibo-root .chip{border:1px solid #22e3f0;background:#102848;border-radius:999px;min-height:40px;padding:6px 10px;font-weight:650;font-size:13px}#bibo-root .bar{display:flex;align-items:center;background:#0d1b3d;border:1.5px solid #8b5cf6;border-radius:999px;padding:2px 4px 2px 8px}#bibo-root .restore{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;min-height:44px;padding:0 8px;font-weight:650}#bibo-root .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@media(max-width:330px){#bibo-root .label{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#bibo-root .fab{width:52px;height:52px;padding:0;justify-content:center}}@media(prefers-reduced-motion:reduce){#bibo-root,#bibo-root *{transition:none;animation:none;scroll-behavior:auto}}';
  document.head.appendChild(style);

  function btn(cls, label, html) {
    var node = document.createElement('button');
    node.type = 'button';
    node.className = cls;
    if (label) node.setAttribute('aria-label', label);
    if (html) node.innerHTML = html;
    return node;
  }
  var host = document.createElement('div');
  host.id = 'bibo-root';
  if (demo) host.className = 'is-demo';
  var fab = btn('fab', 'Falar com o Bibo', face + '<span class="label">Falar com o Bibo</span>');
  fab.setAttribute('aria-controls', 'bibo-panel');
  var bar = document.createElement('div');
  bar.className = 'bar';
  bar.hidden = true;
  var restore = btn('restore', 'Restaurar a conversa com o Bibo', face + ' Bibo');
  var barClose = btn('icon', 'Fechar');
  barClose.textContent = '×';
  bar.appendChild(restore);
  bar.appendChild(barClose);
  var panel = document.createElement('div');
  panel.id = 'bibo-panel';
  panel.className = 'panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'true');
  panel.setAttribute('aria-labelledby', 'bibo-title');
  panel.tabIndex = -1;
  panel.hidden = true;
  var head = document.createElement('div');
  head.className = 'head';
  var title = document.createElement('h2');
  title.id = 'bibo-title';
  title.textContent = 'Bibo · Assistente da Gomes IA Digital';
  var minBtn = btn('icon', 'Minimizar');
  minBtn.textContent = '–';
  var closeBtn = btn('icon', 'Fechar');
  closeBtn.textContent = '×';
  head.appendChild(title);
  head.appendChild(minBtn);
  head.appendChild(closeBtn);
  var kicker = document.createElement('p');
  kicker.className = 'kicker';
  kicker.textContent = 'Gomes IA Digital · não é o negócio desta página.';
  if (!demo) kicker.hidden = true;
  var log = document.createElement('div');
  log.className = 'log';
  var live = document.createElement('div');
  live.className = 'sr';
  live.setAttribute('aria-live', 'polite');
  var chips = document.createElement('div');
  chips.className = 'chips';
  panel.appendChild(head);
  panel.appendChild(kicker);
  panel.appendChild(log);
  panel.appendChild(live);
  panel.appendChild(chips);
  host.appendChild(panel);
  host.appendChild(bar);
  host.appendChild(fab);
  document.body.appendChild(host);

  var state = { mode: 'closed', thread: [] };

  function load() {
    try {
      var data = JSON.parse(sessionStorage.getItem(KEY) || '');
      if (!data || typeof data !== 'object') return;
      if (data.mode === 'open' || data.mode === 'min') state.mode = data.mode;
      if (Array.isArray(data.thread)) data.thread.forEach(function (id) {
        if (topics[id] && state.thread.length < 8) state.thread.push(id);
      });
    } catch (e) {}
  }
  function save() {
    try { sessionStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }
  function bubble(kind, text, links) {
    var box = document.createElement('div');
    box.className = 'msg ' + kind;
    var p = document.createElement('p');
    p.textContent = text;
    box.appendChild(p);
    if (links) {
      var row = document.createElement('p');
      row.className = 'links';
      links.forEach(function (item) {
        var a = document.createElement('a');
        a.textContent = item[0];
        a.href = href(item[1]);
        if (item[1] === 'wa') { a.target = '_blank'; a.rel = 'noopener'; }
        row.appendChild(a);
      });
      box.appendChild(row);
    }
    log.appendChild(box);
  }
  function paint() {
    log.textContent = '';
    bubble('b', greet);
    state.thread.forEach(function (id) {
      bubble('u', topics[id][0]);
      bubble('b', topics[id][1], topics[id][2]);
    });
    chips.textContent = '';
    order.forEach(function (id) {
      var button = btn('chip');
      button.setAttribute('data-id', id);
      button.textContent = id === 'reset' ? 'Voltar ao início' : topics[id][0];
      button.addEventListener('click', function () { choose(id); });
      chips.appendChild(button);
    });
    log.scrollTop = log.scrollHeight;
  }
  function apply(focus) {
    fab.hidden = state.mode !== 'closed';
    bar.hidden = state.mode !== 'min';
    panel.hidden = state.mode !== 'open';
    fab.setAttribute('aria-expanded', state.mode === 'open' ? 'true' : 'false');
    save();
    if (focus === 'panel') panel.focus();
    else if (focus === 'fab') fab.focus();
    else if (focus === 'bar') restore.focus();
  }
  function choose(id) {
    state.thread = id === 'reset' ? [] : state.thread.concat(id);
    paint();
    live.textContent = id === 'reset' ? greet : topics[id][1];
    var back = chips.querySelector('[data-id="reset"]');
    if (back) back.focus();
    save();
  }
  function place() {
    var gap = 16, vh = innerHeight, vw = innerWidth, nodes = document.body.getElementsByTagName('*');
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (el === host || host.contains(el)) continue;
      var cs = getComputedStyle(el);
      if (cs.position !== 'fixed' || cs.display === 'none' || cs.visibility === 'hidden') continue;
      var rect = el.getBoundingClientRect();
      if (rect.width < 20 || rect.height < 16 || rect.bottom < vh - 24 || rect.top < vh * 0.45 || rect.right < vw * 0.4) continue;
      gap = Math.max(gap, Math.ceil(vh - rect.top) + 12);
    }
    host.style.setProperty('--bb', 'calc(' + gap + 'px + env(safe-area-inset-bottom, 0px))');
  }
  function onKey(event) {
    if (event.key === 'Escape' && state.mode !== 'closed') {
      event.preventDefault();
      state.mode = 'closed';
      apply('fab');
      return;
    }
    if (event.key !== 'Tab' || state.mode !== 'open') return;
    var list = Array.prototype.filter.call(panel.querySelectorAll('button, a[href]'), function (el) {
      return el.getClientRects().length > 0;
    });
    if (!list.length) return;
    var active = document.activeElement;
    var first = list[0];
    var last = list[list.length - 1];
    if (event.shiftKey && (active === first || active === panel || !panel.contains(active))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (active === last || !panel.contains(active))) {
      event.preventDefault();
      first.focus();
    }
  }

  fab.addEventListener('click', function () { state.mode = 'open'; apply('panel'); });
  restore.addEventListener('click', function () { state.mode = 'open'; apply('panel'); });
  minBtn.addEventListener('click', function () { state.mode = 'min'; apply('bar'); });
  closeBtn.addEventListener('click', function () { state.mode = 'closed'; apply('fab'); });
  barClose.addEventListener('click', function () { state.mode = 'closed'; apply('fab'); });
  document.addEventListener('keydown', onKey);
  addEventListener('resize', place);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(place);
  load();
  paint();
  place();
  apply(null);
})();
