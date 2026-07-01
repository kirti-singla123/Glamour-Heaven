// Generates a golden-themed placeholder image (SVG data URI) for service
// cards that don't have a real photo yet. Swap these out once real images
// are available.

const GOLDEN_PALETTES: [string, string][] = [
  ["#C4923A", "#E2B76B"],
  ["#B9812C", "#D9A65C"],
  ["#A9762A", "#CB9A50"],
  ["#D1A048", "#F0CE8C"],
];

function wrapTitle(title: string, maxCharsPerLine = 14): string[] {
  const words = title.split(" ");
  const lines: string[] = [];
  let currentLine = "";

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    if (candidate.length > maxCharsPerLine && currentLine) {
      lines.push(currentLine);
      currentLine = word;
    } else {
      currentLine = candidate;
    }
  }
  if (currentLine) lines.push(currentLine);
  return lines;
}

export function servicePlaceholder(title: string, seed = 0): string {
  const [colorA, colorB] = GOLDEN_PALETTES[seed % GOLDEN_PALETTES.length];
  const gradientId = `g${seed}`;
  const lines = wrapTitle(title);
  const lineHeight = 34;
  const startY = 150 - ((lines.length - 1) * lineHeight) / 2;

  const tspans = lines
    .map((line, i) => `<tspan x="200" y="${startY + i * lineHeight}">${line}</tspan>`)
    .join("");

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
      <defs>
        <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${colorA}" />
          <stop offset="100%" stop-color="${colorB}" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#${gradientId})" />
      <circle cx="360" cy="30" r="70" fill="#ffffff" opacity="0.08" />
      <circle cx="30" cy="270" r="90" fill="#ffffff" opacity="0.08" />
      <text font-family="Georgia, serif" font-size="28" font-weight="bold" fill="#ffffff" text-anchor="middle">${tspans}</text>
      <text x="200" y="${startY + lines.length * lineHeight + 14}" font-family="Arial, sans-serif" font-size="13" fill="#ffffff" fill-opacity="0.85" text-anchor="middle">Image Coming Soon</text>
    </svg>
  `.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
