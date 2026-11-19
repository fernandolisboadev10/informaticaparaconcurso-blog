// Run after npm run build. Requires Playwright installed outside or inside the checkout.
// BLOG_PLAYWRIGHT_MODULE can point to an existing Playwright installation.
// Optional: BLOG_BASELINE_DIST to compare the generated site's SEO and public files.
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, readdir, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.BLOG_PLAYWRIGHT_MODULE || 'playwright');
const root = process.cwd();
const dist = path.join(root, 'dist');
const screenshotDir = process.env.BLOG_SCREENSHOT_DIR;
const salesRoute = 'apostila/index.html';
const testCheckoutRoute = 'apostila/teste-pagamento/index.html';
const normalizeLineEndings = (source) => source.replaceAll('\r\n', '\n');
let passed = 0;
const failures = [];
async function check(name, run) {
  try { await run(); passed++; console.log(`PASS ${name}`); }
  catch (error) { failures.push(name); console.error(`FAIL ${name}: ${error.message}`); }
}

await check('advertising, consent, deployment and routing sources preserved', async () => {
  for (const file of ['astro.config.mjs', 'public/ads.txt', 'public/robots.txt', 'public/CNAME', 'src/components/CookieBanner.astro', '.github/workflows/deploy.yml']) {
    assert.equal(normalizeLineEndings(await readFile(path.join(root, file), 'utf8')), execFileSync('git', ['show', `HEAD:${file}`], { encoding: 'utf8' }), file);
  }
  const before = execFileSync('git', ['show', 'HEAD:src/layouts/BaseLayout.astro'], { encoding: 'utf8' });
  const after = await readFile(path.join(root, 'src/layouts/BaseLayout.astro'), 'utf8');
  const consentScript = (source) => source.match(/<script is:inline data-ads=[\s\S]*?<\/script>/)?.[0];
  assert.ok(consentScript(before));
  assert.equal(consentScript(normalizeLineEndings(after)), consentScript(before));
});

async function htmlFiles(dir, prefix = '') {
  const list = [];
  for (const item of await readdir(path.join(dir, prefix), { withFileTypes: true })) {
    const name = path.posix.join(prefix, item.name);
    if (item.isDirectory()) list.push(...await htmlFiles(dir, name));
    else if (name.endsWith('.html')) list.push(name);
  }
  return list.sort();
}

if (process.env.BLOG_BASELINE_DIST) await check('routes and SEO metadata preserved for the remaining pages', async () => {
  const baseline = process.env.BLOG_BASELINE_DIST;
  const editorialRoutes = (file) => file !== salesRoute && file !== testCheckoutRoute;
  const files = (await htmlFiles(baseline)).filter(editorialRoutes);
  assert.deepEqual((await htmlFiles(dist)).filter(editorialRoutes), files);
  const metadata = (source, blog) => [...source.matchAll(/<meta\b[^>]*>|<link\b[^>]*rel="canonical"[^>]*>|<title>[\s\S]*?<\/title>/g)]
    .map(([tag]) => tag).filter((tag) => !blog || !/(?:name="description"|property="og:description"|name="twitter:description")/.test(tag));
  for (const file of files) {
    const before = await readFile(path.join(baseline, file), 'utf8');
    const after = await readFile(path.join(dist, file), 'utf8');
    const descriptionChanged = ['blog/index.html', 'questoes/index.html', 'formulas-do-excel/index.html', 'linux-para-concursos/index.html'].includes(file);
    assert.deepEqual(metadata(after, descriptionChanged), metadata(before, descriptionChanged), file);
  }
  for (const file of ['robots.txt', 'ads.txt', 'CNAME', 'rss.xml', 'sitemap-index.xml']) {
    assert.deepEqual(await readFile(path.join(dist, file)), await readFile(path.join(baseline, file)), file);
  }
  const withoutSales = (sitemap) => sitemap.replace(
    /<url><loc>https:\/\/informaticaparaconcurso\.com\.br\/apostila\/<\/loc>[^<]*(?:<lastmod>[^<]*<\/lastmod>)?<\/url>/,
    '',
  );
  assert.equal(withoutSales(await readFile(path.join(dist, 'sitemap-0.xml'), 'utf8')), withoutSales(await readFile(path.join(baseline, 'sitemap-0.xml'), 'utf8')));
});

await check('sales page and offers are present in the selected placements', async () => {
  const files = await htmlFiles(dist);
  assert.ok(!files.includes(testCheckoutRoute));
  const sales = await readFile(path.join(dist, salesRoute), 'utf8');
  assert.match(sales, /id="amostra"/);
  assert.match(sales, /https:\/\/pay\.hotmart\.com\//);
  for (const [file, placement] of [
    ['index.html', 'home-trilha'],
    ['index.html', 'home-simulados'],
    ['cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/index.html', 'artigo-entre-secoes'],
    ['simulado-cebraspe-informatica/index.html', 'simulado-resultado'],
    ['questoes/index.html', 'questoes-resultado'],
  ]) {
    assert.ok((await readFile(path.join(dist, file), 'utf8')).includes(`data-slot="${placement}"`), file);
  }
  assert.doesNotMatch(await readFile(path.join(dist, '404.html'), 'utf8'), /data-banner=/);
  const sitemap = await readFile(path.join(dist, 'sitemap-0.xml'), 'utf8');
  assert.match(sitemap, /\/apostila\/<\/loc>/);
  const receipt = await readFile(path.join(dist, 'apostila/pagamento/index.html'), 'utf8');
  assert.match(receipt, /name="robots" content="noindex, follow"/);
  console.log(`  ${files.length} generated pages checked`);
});

const server = createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = path.resolve(dist, `.${pathname.endsWith('/') ? `${pathname}index.html` : pathname}`);
    if (!file.startsWith(`${dist}${path.sep}`)) { response.writeHead(403).end(); return; }
    const type = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'application/javascript', '.webp': 'image/webp', '.png': 'image/png', '.woff2': 'font/woff2' }[path.extname(file)] || 'application/octet-stream';
    response.setHeader('Content-Type', type);
    response.end(await readFile(file));
  } catch { response.writeHead(404).end('Not found'); }
});
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
try {
  browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || '/usr/bin/chromium', headless: true, args: ['--no-sandbox'] });
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, timezoneId: 'America/Sao_Paulo', reducedMotion: 'reduce' });
  // Never load ads, analytics, checkout or any external service during local validation.
  await context.route('**/*', (route) => route.request().url().startsWith(`${base}/`) ? route.continue() : route.abort());
  await context.addInitScript(() => { localStorage.setItem('cookie-consent', 'denied'); });
  const page = await context.newPage();
  page.setDefaultTimeout(6000);
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));

  await check('closed mobile menu is excluded from keyboard navigation', async () => {
    await page.goto(`${base}/`);
    await page.locator('#search-toggle').focus();
    await page.keyboard.press('Tab');
    assert.equal(await page.evaluate(() => !!document.activeElement.closest('#mobile-nav:not(.open)')), false);
    await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
    assert.equal(await page.locator('#mobile-nav').evaluate((nav) => nav.inert), false);
    await page.locator('#mobile-nav a').first().focus();
    await page.keyboard.press('Escape');
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
    assert.equal(await page.locator('#menu-toggle').evaluate((el) => el === document.activeElement), true);
  });
  await check('menu and search do not overlap; desktop resize closes mobile navigation', async () => {
    await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
    await page.getByRole('button', { name: 'Buscar no site', exact: true }).click();
    assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'), 'false');
    assert.equal(await page.locator('#search-form input').evaluate((el) => el === document.activeElement), true);
    await page.keyboard.press('Escape');
    await page.getByRole('button', { name: 'Abrir menu', exact: true }).click();
    await page.locator('#mobile-nav a').first().focus();
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.waitForFunction(() => document.getElementById('menu-toggle').getAttribute('aria-expanded') === 'false');
    assert.equal(await page.locator('.site-header .brand').evaluate((el) => el === document.activeElement), true);
  });
  await check('skip link moves keyboard focus directly to article content', async () => {
    await page.goto(`${base}/regra-3-2-1/`);
    await page.keyboard.press('Tab');
    assert.equal(await page.locator('.skip-link').evaluate((el) => el === document.activeElement), true);
    await page.keyboard.press('Enter');
    assert.equal(await page.locator('#main-content').evaluate((el) => el === document.activeElement), true);
  });
  await check('search, filters and pagination announce actual results', async () => {
    await page.goto(`${base}/blog/?q=backup`);
    const search = page.locator('#search-input');
    assert.equal(await search.inputValue(), 'backup');
    assert.ok(await page.locator('.post-item:visible').count() > 0);
    await page.locator('#filters button[data-category="Segurança"]').click();
    assert.equal(await page.locator('#filters [aria-pressed=true]').count(), 1);
    assert.equal(await page.locator('#filters [aria-pressed=true]').innerText(), 'Segurança');
    const visible = page.locator('.post-item:visible');
    for (const category of await visible.evaluateAll((items) => items.map((item) => item.dataset.category))) assert.equal(category, 'Segurança');
    await search.fill('termo-que-nao-existe-xyz');
    await page.waitForFunction(() => document.getElementById('search-status').textContent.includes('Nenhum artigo'));
    assert.equal(await page.locator('.post-item:visible').count(), 0);
    assert.equal(await page.locator('#more-wrap').isVisible(), false);
    await search.fill('');
    await page.locator('#filters button[data-category="all"]').click();
    const before = await page.locator('.post-item:visible').count();
    await page.getByRole('button', { name: 'Ver mais posts', exact: true }).click();
    assert.ok(await page.locator('.post-item:visible').count() > before);
  });
  await check('free questions and the quiz score still work', async () => {
    await page.goto(`${base}/questoes/?materia=Hardware`);
    assert.equal(await page.locator('#q-total').innerText(), '5');
    assert.equal(await page.locator('#q-grid button').count(), 5);
    assert.equal(await page.locator('#btn-restart').isVisible(), false);
    await page.locator('#q-options button').first().click();
    assert.equal(await page.locator('#q-feedback').isVisible(), true);
    assert.equal(await page.locator('#q-answered').innerText(), '1');
    assert.match(await page.locator('#q-feedback-offer').innerText(), /Hardware/);
    for (let i = 1; i < 5; i++) {
      await page.locator('#btn-next').click();
      await page.locator('#q-options button').first().click();
    }
    assert.match(await page.locator('#q-summary').innerText(), /de 5/i);
    assert.equal(await page.locator('#q-complete [data-banner-link]').getAttribute('href'), 'https://www.geradordequestoes.site/');
    await page.locator('#btn-restart').click();
    assert.equal(await page.locator('#q-answered').innerText(), '0');
    assert.equal(await page.locator('#q-complete').isVisible(), false);

    await page.goto(`${base}/simulado-vespera-concurso/`);
    await page.locator('.q-opt').first().click();
    await page.getByRole('button', { name: 'Ver resultado', exact: true }).click();
    assert.equal(await page.locator('.quiz-result').isVisible(), true);
    assert.equal(await page.locator('[data-stat="blank"]').innerText(), '39');
    assert.equal(await page.locator('.quiz-result [data-banner-link]').isVisible(), true);
  });
  await check('article offers sit before the intended sections', async () => {
    for (const route of [
      '/cebraspe-como-funciona-a-banca-e-o-que-ela-cobra-em-informatica/',
      '/concurso-policia-civil-cebraspe-informatica/',
      '/gabarito-extraoficial-pm-ma-soldado/',
      '/nocoes-de-informatica/',
      '/sistema-windows-7-10-11-para-concursos/',
      '/linux-para-concursos/',
      '/aplicativos-para-seguranca-antivirus-firewall-antispyware/',
      '/perifericos-entrada-saida-concurso/',
      '/fonte-de-alimentacao-nobreak-estabilizador-concursos/',
    ]) {
      await page.goto(`${base}${route}`);
      const offer = page.locator('.prose [data-article-offer]');
      assert.ok(await offer.evaluate((el) => el.nextElementSibling?.id === el.dataset.articleOffer), route);
    }
  });
  for (const width of [320, 390, 768, 1440]) for (const theme of ['dark', 'light']) await check(`reading and filter contrast ${width}px ${theme}`, async () => {
    await page.setViewportSize({ width, height: 900 });
    await page.evaluate((value) => localStorage.setItem('theme', value), theme);
    for (const route of ['/', '/blog/', '/category/hardware/', '/questoes/', '/regra-3-2-1/', '/sobre-nos/', '/politica-de-privacidade/']) {
      await page.goto(`${base}${route}`);
      assert.equal(await page.locator('h1').count(), 1, route);
      assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, route);
    }
    await page.goto(`${base}/blog/`);
    const contrast = await page.locator('.filter.active').evaluate((el) => {
      const style = getComputedStyle(el);
      const lum = (value) => value.match(/[\d.]+/g).slice(0, 3).map(Number).map((v) => v / 255).map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4).reduce((sum, v, i) => sum + v * [.2126, .7152, .0722][i], 0);
      const [low, high] = [lum(style.color), lum(style.backgroundColor)].sort((a, b) => a - b);
      return (high + .05) / (low + .05);
    });
    assert.ok(contrast >= 4.5, `Selected filter contrast ${contrast.toFixed(2)}:1`);
    if (screenshotDir && [390, 1440].includes(width)) {
      await mkdir(screenshotDir, { recursive: true });
      await page.screenshot({ path: path.join(screenshotDir, `blog-${width}-${theme}.png`), fullPage: true });
      await page.goto(`${base}/regra-3-2-1/`);
      await page.screenshot({ path: path.join(screenshotDir, `artigo-${width}-${theme}.png`), fullPage: true });
    }
  });
  await check('no JavaScript runtime errors on reviewed pages', async () => assert.deepEqual(errors, []));
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
console.log(`${passed} passed; ${failures.length} failed. External requests blocked; no production changes.`);
if (failures.length) process.exitCode = 1;
