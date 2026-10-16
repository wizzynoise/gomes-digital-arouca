import worker from "../worker.js";

const seen = [];
const env = {
  ASSETS: {
    fetch(request) {
      seen.push(new URL(request.url).href);
      return new Response("asset", { status: 200, headers: { "x-asset": "1" } });
    },
  },
};

function check(name, ok, detail) {
  if (!ok) {
    console.error("FAIL", name, detail || "");
    process.exitCode = 1;
    return;
  }
  console.log("ok", name);
}

const cases = [
  {
    name: "www keeps path and query",
    url: "https://www.gomesiadigital.com/demos/casa-do-vale/?lang=pt&x=1",
    status: 301,
    location: "https://gomesiadigital.com/demos/casa-do-vale/?lang=pt&x=1",
    assets: false,
  },
  {
    name: "www with a port keeps path and query",
    url: "https://www.gomesiadigital.com:8443/bibo/",
    status: 301,
    location: "https://gomesiadigital.com/bibo/",
    assets: false,
  },
  {
    name: "production workers.dev host redirects",
    url: "https://gomes-digital-arouca.sjgomesarouca.workers.dev/politica-privacidade?from=old",
    status: 301,
    location: "https://gomesiadigital.com/politica-privacidade?from=old",
    assets: false,
  },
  {
    name: "Host header on local wrangler URL redirects www",
    url: "http://127.0.0.1:8787/demos/barbearia-leme/?q=2",
    host: "www.gomesiadigital.com",
    status: 301,
    location: "https://gomesiadigital.com/demos/barbearia-leme/?q=2",
    assets: false,
  },
  {
    name: "Host header redirects the production workers.dev name",
    url: "http://localhost:8787/sitemap.xml",
    host: "gomes-digital-arouca.sjgomesarouca.workers.dev",
    status: 301,
    location: "https://gomesiadigital.com/sitemap.xml",
    assets: false,
  },
  {
    name: "apex is served",
    url: "https://gomesiadigital.com/",
    status: 200,
    assets: true,
  },
  {
    name: "versioned preview is served",
    url: "https://abc123-gomes-digital-arouca.sjgomesarouca.workers.dev/bibo/?preview=1",
    status: 200,
    assets: true,
  },
  {
    name: "another workers.dev host is served",
    url: "https://preview.example.workers.dev/robots.txt",
    status: 200,
    assets: true,
  },
  {
    name: "local wrangler host without a public Host is served",
    url: "http://127.0.0.1:8787/",
    status: 200,
    assets: true,
  },
];

for (const item of cases) {
  seen.length = 0;
  const headers = item.host ? { host: item.host } : undefined;
  const response = await worker.fetch(new Request(item.url, { headers }), env);
  check(item.name + " status", response.status === item.status, response.status);
  if (item.location) {
    check(item.name + " location", response.headers.get("location") === item.location, response.headers.get("location"));
  }
  check(item.name + " assets", item.assets ? seen.length === 1 && seen[0] === item.url : seen.length === 0, seen.join(","));
}

if (process.exitCode) process.exit(process.exitCode);
console.log("all redirect cases passed");
