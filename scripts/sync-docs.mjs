#!/usr/bin/env node
// Sync the canonical nervepack docs into src/content/docs/ so the site never ships
// stale docs. Runs on predev + prebuild (see package.json) and in CI before deploy.
//
// Source: NERVEPACK_DOCS_SRC (a local clone path) — default ~/Code/nervepack for
// local dev; CI checks out the public repo and points this at it.
// Output: src/content/docs/*.md (gitignored — always regenerated, never committed).

import { mkdir, readFile, writeFile, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = join(HERE, '..');
const SRC = process.env.NERVEPACK_DOCS_SRC || join(process.env.HOME || '', 'Code/nervepack');
const OUT = join(SITE_ROOT, 'src/content/docs');
const REPO = 'https://github.com/pat-browne/nervepack';

// Which canonical docs become which site pages. Order drives the docs sidebar.
const DOCS = [
  { src: 'docs/GETTING-STARTED.md', out: 'getting-started.md', title: 'Getting Started', order: 1 },
  { src: 'docs/FEATURES.md',        out: 'features.md',        title: 'Features',        order: 2 },
  { src: 'docs/ARCHITECTURE.md',    out: 'architecture.md',    title: 'Architecture',    order: 3 },
];

// Map cross-doc filename links onto the site's routes; everything else is left alone.
const LINK_MAP = {
  'docs/GETTING-STARTED.md': '/docs/getting-started/', 'GETTING-STARTED.md': '/docs/getting-started/',
  'docs/FEATURES.md': '/docs/features/', 'FEATURES.md': '/docs/features/',
  'docs/ARCHITECTURE.md': '/docs/architecture/', 'ARCHITECTURE.md': '/docs/architecture/',
};

function transform(body, srcRel) {
  let s = body;
  // strip a leading YAML frontmatter block if the source has one
  if (s.startsWith('---\n')) s = s.replace(/^---\n[\s\S]*?\n---\n/, '');
  // drop the leading H1 (the page layout renders the title)
  s = s.replace(/^#\s+.*\n+/, '');
  // [[wikilink]] -> `wikilink` (the site has no wiki graph)
  s = s.replace(/\[\[([^\]]+)\]\]/g, '`$1`');
  // rewrite known cross-doc links to site routes
  for (const [from, to] of Object.entries(LINK_MAP)) {
    s = s.split(`](${from})`).join(`](${to})`);
  }
  return s.trim() + '\n';
}

async function main() {
  if (!existsSync(SRC)) {
    console.error(`[sync-docs] source not found: ${SRC}\n` +
      `  set NERVEPACK_DOCS_SRC to a nervepack checkout (CI does this).`);
    process.exit(1);
  }
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  let n = 0;
  for (const d of DOCS) {
    const srcPath = join(SRC, d.src);
    if (!existsSync(srcPath)) { console.warn(`[sync-docs] skip (missing): ${d.src}`); continue; }
    const raw = await readFile(srcPath, 'utf8');
    const sourceUrl = `${REPO}/blob/main/${d.src}`;
    const fm = [
      '---',
      `title: ${JSON.stringify(d.title)}`,
      `order: ${d.order}`,
      `sourcePath: ${JSON.stringify(d.src)}`,
      `sourceUrl: ${JSON.stringify(sourceUrl)}`,
      '---',
      '',
    ].join('\n');
    await writeFile(join(OUT, d.out), fm + transform(raw, d.src), 'utf8');
    n++;
  }
  console.log(`[sync-docs] wrote ${n} doc(s) from ${SRC} -> src/content/docs/`);
}

main().catch((e) => { console.error(e); process.exit(1); });
