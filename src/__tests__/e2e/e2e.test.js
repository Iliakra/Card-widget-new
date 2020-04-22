/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import puppeteer from 'puppeteer';
const {fork} = require('child_process');

jest.setTimeout(30000);
describe('click to button', () => {
    let browser = null;
    let page = null;
    let server = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        server = fork(`${__dirname}/e2e.server.js`);
        await new Promise((resolve, reject) => {
            server.on('error', () => {
                reject();
            });
            server.on('message', (message) => {
                if (message === 'ok') {
                    resolve();
                }
            });
        });        
        browser = await puppeteer.launch(
            // {
            // headless: false,
            // slowMo: 100,
            // devtools: true,
            // }
        );
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
        server.kill();
    });
 test('should remove .invisible if card-number is valid' , async () => {
        await page.goto(baseUrl);
        const form = await page.$('.form');
        const input = await page.$('#field');
        await input.type('4276010021346554');
        const submit = await page.$('.button');
        const hint = await page.$('.valid');
        submit.click();
        await page.waitForSelector('.valid', {visible: true});
    });
  test('should remove .invisible if card-number is valid' , async () => {
        await page.goto(baseUrl);
        const form = await page.$('.form');
        const input = await page.$('#field');
        await input.type('427601002134655');
        const submit = await page.$('.button');
        const hint = await page.$('.not-valid');
        submit.click();
        await page.waitForSelector('.not-valid',{visible: true});
    });
});
