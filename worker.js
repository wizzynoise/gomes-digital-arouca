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

// html_handling "auto-trailing-slash" 307s /file.html to /file.
// Google fetches this verification file at the .html URL and expects 200.
const VERIFY_HTML = "/googlef7be4e9e08c807ca.html";
const VERIFY_LINE = "google-site-verification: googlef7be4e9e08c807ca.html\n";

async function googleVerification(request, env) {
  const assetUrl = new URL(request.url);
  assetUrl.pathname = "/googlef7be4e9e08c807ca";
  assetUrl.search = "";
  const headers = new Headers({
    "content-type": "text/html; charset=utf-8",
    "x-content-type-options": "nosniff",
  });
  let body = VERIFY_LINE;
  try {
    const asset = await env.ASSETS.fetch(new Request(assetUrl, { method: "GET" }));
    if (asset.status === 200) {
      const text = await asset.text();
      if (text.startsWith("google-site-verification:")) body = text.endsWith("\n") ? text : text + "\n";
    }
  } catch {
    // The literal line still answers 200 if the asset fetch fails.
  }
  if (request.method === "HEAD") return new Response(null, { status: 200, headers });
  return new Response(body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    if (REDIRECT_HOSTS.has(requestHost(request))) {
      return Response.redirect(apexUrl(request), 301);
    }
    if (new URL(request.url).pathname === VERIFY_HTML) {
      return googleVerification(request, env);
    }
    return env.ASSETS.fetch(request);
  },
};
