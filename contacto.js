/* Gomes Digital — contacto
   Cole aqui a ligação curta do WhatsApp Business, quando a tiver.
   Começa por https://wa.me/message/
   Deixe as aspas vazias até lá. Os botões passam a usar essa ligação.
   Enquanto estiver vazio, o endereço é montado só no clique, a partir de partes.
*/
var WHATSAPP_SHORT_LINK = "";

(function () {
  var MENSAGEM = "Olá. Preciso de ajuda com tecnologia e gostava de um diagnóstico rápido. Obrigado.";

  function numero() {
    var aoContrario = ["400", "764", "439", "153"].join("");
    return aoContrario.split("").reverse().join("");
  }

  function destino() {
    var curto = String(WHATSAPP_SHORT_LINK || "").replace(/^\s+|\s+$/g, "");
    if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//i.test(curto)) return curto;
    return "https://wa.me/" + numero() + "?text=" + encodeURIComponent(MENSAGEM);
  }

  document.addEventListener("click", function (evento) {
    var el = evento.target;
    var botao = null;
    while (el && el !== document) {
      if (el.getAttribute && el.getAttribute("data-whatsapp") != null) {
        botao = el;
        break;
      }
      el = el.parentNode;
    }
    if (!botao) return;
    evento.preventDefault();
    window.open(destino(), "_blank", "noopener,noreferrer");
  });
})();

(function () {
  var zona = document.querySelector(".carrossel");
  if (!zona) return;
  var reduzido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var botoes = document.querySelectorAll("[data-carrossel]");

  function passo() {
    var cartao = zona.querySelector(".destaque");
    if (!cartao) return zona.clientWidth * 0.8;
    var pista = zona.querySelector(".carrossel-pista");
    var estilo = pista ? window.getComputedStyle(pista) : null;
    var folga = estilo ? parseFloat(estilo.columnGap || estilo.gap || "16") : 16;
    if (!folga) folga = 16;
    return cartao.getBoundingClientRect().width + folga;
  }

  function mover(dir) {
    zona.scrollBy({ left: dir * passo(), behavior: reduzido ? "auto" : "smooth" });
  }

  function limites() {
    var max = zona.scrollWidth - zona.clientWidth - 4;
    var i;
    for (i = 0; i < botoes.length; i++) {
      var dir = Number(botoes[i].getAttribute("data-carrossel"));
      if (dir < 0) botoes[i].disabled = zona.scrollLeft <= 4;
      if (dir > 0) botoes[i].disabled = zona.scrollLeft >= max;
    }
  }

  var i;
  for (i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener("click", function () {
      mover(Number(this.getAttribute("data-carrossel")) || 1);
    });
  }

  zona.addEventListener("keydown", function (evento) {
    if (evento.key === "ArrowRight") { mover(1); evento.preventDefault(); }
    if (evento.key === "ArrowLeft") { mover(-1); evento.preventDefault(); }
  });
  zona.addEventListener("scroll", limites);
  window.addEventListener("resize", limites);
  limites();
})();
