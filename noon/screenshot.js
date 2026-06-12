const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });

  const fileUrl = 'file:///C:/Users/melih/OneDrive/Masa%C3%BCst%C3%BC/CLAUDE_SITE/noon/index.html';
  await page.goto(fileUrl, { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2500);

  const dir = 'C:/Users/melih/OneDrive/Masaüstü/CLAUDE_SITE/noon/screenshots';

  // 1. Hero viewport
  await page.screenshot({ path: `${dir}/01_hero.png` });

  // 2. About section
  await page.evaluate(() => document.querySelector('#hakkimizda').scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${dir}/03_about.png` });

  // 3. Products section
  await page.evaluate(() => document.querySelector('#urunler').scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${dir}/04_products.png` });

  // 4. Sectors section
  await page.evaluate(() => document.querySelector('#sektorler').scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${dir}/05_sectors.png` });

  // 5. HORECA section
  await page.evaluate(() => document.querySelector('#horeca').scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${dir}/06_horeca.png` });

  // 6. Contact section
  await page.evaluate(() => document.querySelector('#iletisim').scrollIntoView());
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${dir}/07_contact.png` });

  // 7. Full page
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${dir}/00_fullpage.png`, fullPage: true });

  await browser.close();
  console.log('Screenshots saved.');
})();
