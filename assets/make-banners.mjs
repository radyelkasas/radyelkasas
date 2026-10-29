// Generates banner-dark.svg and banner-light.svg (run: node assets/make-banners.mjs)
import { writeFileSync } from 'node:fs';

const themes = {
  dark: { bg1: '#0b1020', bg2: '#111a33', grid: '#1e2a4a', text: '#f5f7ff', muted: '#9aa7c7', a1: '#7c5cff', a2: '#22d3ee', chip: '#16213f', chipBorder: '#2a3a66' },
  light: { bg1: '#f7f8fc', bg2: '#eef1fb', grid: '#dfe4f3', text: '#0d1530', muted: '#55607d', a1: '#6a4cf5', a2: '#0891b2', chip: '#ffffff', chipBorder: '#d5dbee' },
};

const chips = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AI Agents'];

function banner(t) {
  let x = 64;
  const chipEls = chips.map((label) => {
    const w = label.length * 8.6 + 28;
    const el = `<g transform="translate(${x} 228)"><rect width="${w}" height="30" rx="15" fill="${t.chip}" stroke="${t.chipBorder}"/><text x="${w / 2}" y="20" text-anchor="middle" class="chip">${label}</text></g>`;
    x += w + 10;
    return el;
  }).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="300" viewBox="0 0 1200 300" role="img" aria-label="Rady Elkasas — Full-Stack Developer">
<defs>
  <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${t.bg1}"/><stop offset="1" stop-color="${t.bg2}"/></linearGradient>
  <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${t.a1}"/><stop offset="1" stop-color="${t.a2}"/></linearGradient>
  <radialGradient id="glow" cx="0.82" cy="0.35" r="0.45"><stop offset="0" stop-color="${t.a1}" stop-opacity="0.35"/><stop offset="1" stop-color="${t.a1}" stop-opacity="0"/></radialGradient>
  <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="${t.grid}" stroke-width="1"/></pattern>
  <clipPath id="r"><rect width="1200" height="300" rx="20"/></clipPath>
  <style>
    text { font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif; }
    .name { font-size: 54px; font-weight: 800; fill: ${t.text}; letter-spacing: -1px; }
    .role { font-size: 24px; font-weight: 600; fill: url(#accent); }
    .tag { font-size: 17px; fill: ${t.muted}; }
    .chip { font-size: 14px; font-weight: 600; fill: ${t.text}; }
    .code { font-family: 'SF Mono', Menlo, Consolas, monospace; font-size: 15px; fill: ${t.muted}; }
    .kw { fill: ${t.a1}; } .str { fill: ${t.a2}; }
    .cursor { animation: blink 1.1s steps(1) infinite; }
    .float { animation: float 6s ease-in-out infinite; }
    @keyframes blink { 50% { opacity: 0; } }
    @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
    @media (prefers-reduced-motion: reduce) { .cursor, .float { animation: none; } }
  </style>
</defs>
<g clip-path="url(#r)">
  <rect width="1200" height="300" fill="url(#bg)"/>
  <rect width="1200" height="300" fill="url(#grid)" opacity="0.55"/>
  <rect width="1200" height="300" fill="url(#glow)"/>
  <rect x="0" y="0" width="1200" height="4" fill="url(#accent)"/>
  <text x="64" y="100" class="name">Rady Elkasas</text>
  <text x="66" y="142" class="role">Full-Stack Developer · AI SaaS &amp; Developer Tools</text>
  <text x="66" y="182" class="tag">I build Arabic-first, production-grade web products — from idea to deploy.</text>
  ${chipEls}
  <g transform="translate(842 64)"><g class="float">
    <rect width="300" height="172" rx="14" fill="${t.chip}" stroke="${t.chipBorder}"/>
    <circle cx="22" cy="20" r="5" fill="#ff5f57"/><circle cx="40" cy="20" r="5" fill="#febc2e"/><circle cx="58" cy="20" r="5" fill="#28c840"/>
    <text x="20" y="60" class="code"><tspan class="kw">const</tspan> rady = {</text>
    <text x="36" y="84" class="code">based: <tspan class="str">'Giza, Egypt'</tspan>,</text>
    <text x="36" y="108" class="code">ships: <tspan class="str">'SaaS + LMS'</tspan>,</text>
    <text x="36" y="132" class="code">open: <tspan class="str">'freelance'</tspan>,</text>
    <text x="20" y="156" class="code">}<tspan class="cursor" fill="${t.a2}">▍</tspan></text>
  </g></g>
</g>
</svg>
`;
}

for (const [name, t] of Object.entries(themes)) {
  writeFileSync(new URL(`./banner-${name}.svg`, import.meta.url), banner(t));
}
