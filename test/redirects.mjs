import { readFileSync } from "node:fs";
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
  {
    name: "www verification file redirects to the apex html URL",
    url: "https://www.gomesiadigital.com/googlef7be4e9e08c807ca.html",
    status: 301,
    location: "https://gomesiadigital.com/googlef7be4e9e08c807ca.html",
    assets: false,
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

const VERIFY_LINE = "google-site-verification: googlef7be4e9e08c807ca.html\n";
const verifyFile = readFileSync(new URL("../googlef7be4e9e08c807ca.html", import.meta.url), "utf8");
check("verification file is the single Google line", verifyFile === VERIFY_LINE, JSON.stringify(verifyFile));

const sitemap = readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
check("sitemap omits the verification file", !sitemap.includes("googlef7be4e9e08c807ca"));

seen.length = 0;
const verify = await worker.fetch(new Request("https://gomesiadigital.com/googlef7be4e9e08c807ca.html"), env);
check("apex verification html status", verify.status === 200, verify.status);
check("apex verification html has no location", verify.headers.get("location") == null, verify.headers.get("location"));
check("apex verification html body", (await verify.text()) === VERIFY_LINE);
check(
  "apex verification html reads the extensionless asset",
  seen.length === 1 && seen[0] === "https://gomesiadigital.com/googlef7be4e9e08c807ca",
  seen.join(","),
);

seen.length = 0;
const redirectingAssets = {
  ASSETS: {
    fetch(request) {
      seen.push(new URL(request.url).href);
      return Response.redirect("https://gomesiadigital.com/googlef7be4e9e08c807ca", 307);
    },
  },
};
const forced = await worker.fetch(
  new Request("https://gomesiadigital.com/googlef7be4e9e08c807ca.html?check=1"),
  redirectingAssets,
);
check("verification html stays 200 when assets would 307", forced.status === 200, forced.status);
check("verification html drops the asset redirect", forced.headers.get("location") == null);
check("verification html fallback body", (await forced.text()) === VERIFY_LINE);

const head = await worker.fetch(
  new Request("https://gomesiadigital.com/googlef7be4e9e08c807ca.html", { method: "HEAD" }),
  env,
);
check("verification html HEAD is 200", head.status === 200 && (await head.text()) === "", head.status);

if (process.exitCode) process.exit(process.exitCode);
console.log("all redirect cases passed");
