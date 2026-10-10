/* Gomes Digital Arouca — contacto
   Cole aqui a ligação curta do WhatsApp Business, quando a tiver.
   Começa por https://wa.me/message/
   Deixe as aspas vazias até lá. Os botões passam a usar essa ligação.
   Enquanto estiver vazio, o endereço é montado só no clique, a partir de partes.
*/
var WHATSAPP_SHORT_LINK = "";

(function () {
  var MENSAGEM = "Olá, Pedro. Preciso de ajuda com tecnologia em casa e gostava de um diagnóstico rápido. Obrigado.";

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

  var reduzido = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduzido && "IntersectionObserver" in window) {
    var blocos = document.querySelectorAll(".revelar");
    var i;
    for (i = 0; i < blocos.length; i++) blocos[i].classList.add("preparar");
    var io = new IntersectionObserver(function (entradas) {
      var j;
      for (j = 0; j < entradas.length; j++) {
        if (!entradas[j].isIntersecting) continue;
        entradas[j].target.classList.add("visivel");
        io.unobserve(entradas[j].target);
      }
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    for (i = 0; i < blocos.length; i++) io.observe(blocos[i]);
  }
})();
