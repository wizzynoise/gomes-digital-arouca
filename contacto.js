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
