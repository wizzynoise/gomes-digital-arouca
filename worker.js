// Sends the www host and the production workers.dev host to the apex.
// Any other *.workers.dev host (versioned previews) is served as-is.
const APEX = "gomesiadigital.com";
const REDIRECT_HOSTS = new Set([
  "www.gomesiadigital.com",
  "gomes-digital-arouca.sjgomesarouca.workers.dev",
]);
const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "0.0.0.0", "[::1]"]);

function bareHost(value) {
  return value.toLowerCase().replace(/:\d+$/, "").replace(/\.$/, "");
}

// Wrangler dev keeps 127.0.0.1 in the request URL. An explicit Host header
// is the public name under test. In production the URL host is already public.
function requestHost(request) {
  const urlHost = bareHost(new URL(request.url).hostname);
  const header = request.headers.get("host");
  if (header && LOCAL_HOSTS.has(urlHost)) {
    const headerHost = bareHost(header);
    if (headerHost && !LOCAL_HOSTS.has(headerHost)) return headerHost;
  }
  return urlHost;
}

function apexUrl(request) {
  const target = new URL(request.url);
  target.protocol = "https:";
  target.hostname = APEX;
  target.port = "";
  return target.toString();
}

export default {
  async fetch(request, env) {
    if (REDIRECT_HOSTS.has(requestHost(request))) {
      return Response.redirect(apexUrl(request), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
