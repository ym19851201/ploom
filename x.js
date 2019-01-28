const puppeteer = require('puppeteer');

(async() => {
  const browser = await puppeteer.launch({ });
  const page = await browser.newPage();
  await page.goto('https://shop.ploom.jp/products/detail/1447');
//  await page.goto('https://shop.ploom.jp/products/detail/1243');
  await page.type('#login_email', user);
  await page.type('#login_pass', pw);

  await page.click('#mypage_login__login_button > button');
  await page.waitFor('#agreement > p > input[type="checkbox"]', {timeout: 60000});

  await page.click('#agreement > p > input[type="checkbox"]');

  await page.click('#agreement > input[type="submit"]');
  await page.waitFor(3000);
  await page.waitFor('#add-cart', {timeout: 60000});
  await page.click('#add-cart');

  await page.waitFor('#btn_modal_shopping', {timeout: 60000});
  await page.click('#btn_modal_shopping');

  await page.waitFor('#order-button', {timeout: 60000});
  await page.click('#order-button');

  await page.waitFor('#btnNext2', {timeout: 60000});
  await page.click('#btnNext2');
  
  await page.screenshot({path: 'finish.png', fullPage: true});
  await browser.close();
})();
