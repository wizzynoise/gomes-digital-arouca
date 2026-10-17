(function () {
  if (document.getElementById('bibo-root')) return;
  var path = location.pathname;
  if (path === '/bibo' || path.indexOf('/bibo/') === 0) return;

  var KEY = 'bibo-widget';
  var WA = 'https://wa.me/message/5VB7SV74VVEKE1';
  var demo = path.indexOf('/demos/') !== -1;

  function href(code) {
    if (code === 'wa') return WA;
    if (code === 'mail') return 'mailto:sjgomesarouca@gmail.com';
    if (/^https?:/.test(code)) return code;
    if (code.charAt(0) === '#') return '/' + code;
    if (code.charAt(0) === '/') return code;
    return '/demos/' + code + '/';
  }

  var greet = demo
    ? 'Olá. Sou o Bibo, da Gomes IA Digital. Esta página é um exemplo de site.'
    : 'Olá. Sou o Bibo, assistente da Gomes IA Digital. Escolhe um assunto.';
  var topics = {
    site: ['Quero um website', 'O site simples começa nos 80 €: uma página com até 5 secções, versão para telemóvel, botões de WhatsApp e contacto, mapa e horário, título e descrição básicos, alojamento gratuito num subdomínio, 1 ronda de alterações e cerca de 7 dias depois do conteúdo. Um site maior ou uma aplicação tem orçamento próprio.', [['Preços', '#preco'], ['Exemplos', '#demos'], ['Automatizações', '#automatizacoes']]],
    exemplos: ['Ver exemplos', 'Atelier Nórd, Leonor Matos, Nexora Inventory e BRUMA Coffee são exemplos de páginas.', [['Atelier Nórd', 'atelier-nord'], ['Leonor Matos', 'leonor-matos'], ['Nexora Inventory', 'nexora'], ['BRUMA Coffee', 'bruma']]],
    portfolio: ['Ver projetos', '7Jardins - Serviços de jardinagem, SjGomes - Sistemas de som, Barbearia Leme e Mesa da Encosta.', [['7Jardins - Serviços de jardinagem', 'https://7jardins26.vercel.app'], ['Projetos', '/projetos'], ['Barbearia Leme', 'barbearia-leme'], ['Mesa da Encosta', 'mesa-da-encosta']]],
    ajuda: ['Ajuda com tecnologia em Arouca', 'Computadores, telemóveis, cópias de segurança, segurança e explicações, também para quem está a aprender. O diagnóstico é gratuito. Pagas só o tempo a resolver. A deslocação em Arouca não se cobra. No resto de Portugal, a ajuda pode ser à distância.', [['Assistência', '/servicos#assistencia'], ['WhatsApp', 'wa']]],
    custo: ['Quanto custa?', 'O site simples começa nos 80 €. Projetos maiores, aplicações e a presença online têm orçamento próprio. O domínio próprio fica cerca de 10–15 € por ano, pago por ti. Na assistência, o diagnóstico é gratuito e cobra-se só o tempo a resolver.', [['Preços', '#preco'], ['WhatsApp', 'wa']]],
    pedro: ['Falar com o Pedro', 'Podes falar com o Pedro Gomes pelo WhatsApp ou por e-mail.', [['WhatsApp', 'wa'], ['E-mail', 'mail']]]
  };
  var order = ['site', 'exemplos', 'portfolio', 'ajuda', 'custo', 'pedro', 'reset'];
  var face = '<svg class="mascot" viewBox="0 0 64 64" aria-hidden="true"><rect x="1" y="1" width="62" height="62" rx="16" fill="#f6f4eb"/><line x1="32" y1="12" x2="32" y2="3.2" stroke="#102a2b" stroke-width="2.2" stroke-linecap="round"/><circle cx="32" cy="2.8" r="3" fill="#c7f36a" stroke="#102a2b" stroke-width="1.4"/><rect x="4" y="20" width="7" height="11" rx="2" fill="#c5e9ed" stroke="#102a2b" stroke-width="1.4"/><rect x="53" y="20" width="7" height="11" rx="2" fill="#c5e9ed" stroke="#102a2b" stroke-width="1.4"/><rect x="11" y="11" width="42" height="31" rx="13" fill="#fffef9" stroke="#102a2b" stroke-width="2.1"/><g class="eye"><ellipse cx="24" cy="24.5" rx="6.3" ry="7.1" fill="#fff" stroke="#102a2b" stroke-width="1.4"/><circle cx="24.8" cy="25.6" r="2.8" fill="#102a2b"/><circle cx="26" cy="24.2" r="1.05" fill="#fffef9"/></g><g class="eye"><ellipse cx="40" cy="24.5" rx="6.3" ry="7.1" fill="#fff" stroke="#102a2b" stroke-width="1.4"/><circle cx="40.8" cy="25.6" r="2.8" fill="#102a2b"/><circle cx="42" cy="24.2" r="1.05" fill="#fffef9"/></g><path d="M27 34.6c1.6 1.7 8.4 1.7 10 0" fill="none" stroke="#102a2b" stroke-width="1.6" stroke-linecap="round"/><rect x="29" y="41.4" width="6" height="3" rx="1" fill="#102a2b"/><path d="M17 49.5h6M41 49.5h6" stroke="#102a2b" stroke-width="2.6" stroke-linecap="round"/><rect x="21" y="44" width="22" height="12" rx="4" fill="#102a2b"/><rect x="27.2" y="47.2" width="9.6" height="5.2" rx="1.6" fill="#c7f36a"/><rect x="23" y="55.4" width="6.2" height="3.8" rx="1.4" fill="#102a2b"/><rect x="34.8" y="55.4" width="6.2" height="3.8" rx="1.4" fill="#102a2b"/></svg>';

  var style = document.createElement('style');
  style.textContent = '#bibo-root{--ex:0px;--ey:0px;position:fixed;z-index:60;right:max(12px,env(safe-area-inset-right));bottom:var(--bb,calc(16px + env(safe-area-inset-bottom)));display:flex;flex-direction:column;align-items:flex-end;max-width:calc(100vw - 16px - env(safe-area-inset-left) - env(safe-area-inset-right));pointer-events:none;font-family:Arial,Helvetica,sans-serif;color:#102a2b;line-height:1.45}#bibo-root *{box-sizing:border-box}#bibo-root [hidden]{display:none!important}#bibo-root button{font:inherit;cursor:pointer;color:inherit}#bibo-root .fab,#bibo-root .panel,#bibo-root .bar{pointer-events:auto}#bibo-root :focus-visible{outline:3px solid #102a2b;outline-offset:2px}#bibo-root .fab{position:relative;display:grid;place-items:center;width:72px;height:72px;min-height:72px;padding:0;border:0;border-radius:18px;background:transparent;box-shadow:none;overflow:visible;animation:bibo-idle 3.4s ease-in-out infinite}#bibo-root .mascot{display:block;width:100%;height:100%;overflow:visible;filter:drop-shadow(0 5px 6px rgba(16,42,43,.22))}#bibo-root .eye{transform-box:fill-box;transform-origin:center;transform:translate(var(--ex),var(--ey))}#bibo-root .label{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}#bibo-root .panel{width:min(340px,100%);max-height:min(440px,calc(100dvh - var(--bb) - 12px));display:flex;flex-direction:column;background:#fffef9;border:1px solid #102a2b;border-radius:16px;box-shadow:0 12px 40px #102a2b33;overflow:hidden}#bibo-root .head{display:flex;align-items:center;gap:6px;padding:6px 6px 6px 12px;background:#102a2b;color:#f6f4eb}#bibo-root h2{flex:1;margin:0;font:700 13px/1.3 Arial,Helvetica,sans-serif;letter-spacing:0;color:#f6f4eb}#bibo-root .icon{width:44px;height:44px;border:0;border-radius:10px;background:transparent;color:#f6f4eb;font-size:22px;line-height:1}#bibo-root .head :focus-visible{outline-color:#c7f36a}#bibo-root .kicker{margin:0;padding:6px 12px 0;color:#3e5553;font-size:12px}#bibo-root .log{overflow:auto;display:flex;flex-direction:column;gap:8px;padding:12px;min-height:0}#bibo-root .msg{max-width:92%;border-radius:12px;padding:8px 10px;font-size:14px}#bibo-root .msg p{margin:0}#bibo-root .msg.b{align-self:flex-start;background:#e8ece1;border:1px solid #d8dfd9}#bibo-root .msg.u{align-self:flex-end;background:#c7f36a;color:#102a2b}#bibo-root .links{display:flex;flex-wrap:wrap;gap:6px 10px;margin-top:8px}#bibo-root .links a{color:#3f5c12;font-weight:700;text-underline-offset:2px}#bibo-root .chips{display:flex;flex-wrap:wrap;gap:6px;padding:10px 12px 12px;border-top:1px solid #d8dfd9}#bibo-root .chip{border:1px solid #102a2b;background:#fffef9;border-radius:999px;min-height:40px;padding:6px 10px;font-weight:700;font-size:13px}#bibo-root .chip:hover{background:#c7f36a}#bibo-root .bar{display:flex;align-items:center;background:#fffef9;border:1.5px solid #102a2b;border-radius:999px;padding:2px 4px 2px 8px}#bibo-root .restore{display:inline-flex;align-items:center;gap:6px;border:0;background:transparent;min-height:44px;padding:0 8px;font-weight:700}#bibo-root .restore .mascot{width:28px;height:28px}#bibo-root .sr{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}@keyframes bibo-idle{50%{transform:translateY(-3px)}}@media(max-width:600px){#bibo-root{left:calc(12px + env(safe-area-inset-left,0px));right:calc(12px + env(safe-area-inset-right,0px))}#bibo-root .panel{width:100%;max-height:min(60vh,calc(100dvh - var(--bb) - 12px))}main{padding-bottom:72px}}@media(prefers-reduced-motion:reduce){#bibo-root,#bibo-root *{transition:none;animation:none;scroll-behavior:auto}}';
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
        if (item[1] === 'wa' || /^https?:/.test(item[1])) { a.target = '_blank'; a.rel = 'noopener'; }
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
    var main = document.querySelector('main');
    if (vw <= 600) {
      var fabH = fab.getBoundingClientRect().height || 56;
      var pad = Math.max(72, Math.ceil(gap + fabH));
      if (main) main.style.paddingBottom = pad + 'px';
      var bodyPad = parseFloat(getComputedStyle(document.body).paddingBottom) || 0;
      if (bodyPad < pad) document.body.style.paddingBottom = pad + 'px';
    } else {
      if (main) main.style.paddingBottom = '';
      document.body.style.paddingBottom = '';
    }
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
  try {
    if (matchMedia('(hover: hover) and (pointer: fine)').matches && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      document.addEventListener('mousemove', function (event) {
        var rect = fab.getBoundingClientRect();
        var dx = event.clientX - (rect.left + rect.width / 2);
        var dy = event.clientY - (rect.top + rect.height / 2);
        var dist = Math.hypot(dx, dy) || 1;
        var reach = Math.min(1, dist / 140);
        fab.style.setProperty('--ex', ((dx / dist) * 2.4 * reach).toFixed(2) + 'px');
        fab.style.setProperty('--ey', ((dy / dist) * 1.8 * reach).toFixed(2) + 'px');
      });
    }
  } catch (e) {}
})();
