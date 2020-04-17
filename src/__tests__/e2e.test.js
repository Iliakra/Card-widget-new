import puppeteer from 'puppeteer';

jest.setTimeout(30000);
describe('card-widget form', () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:9000';
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false,
            slowMo: 100,
            devtools: true,
        });
        page = await browser.newPage();
    });
    afterAll(async () => {
        await browser.close();
    });
    describe('card-widget form', () => {
        test('should remove .invisible if card-number is valid' , async () => {
            await page.goto(baseUrl);
            const form = await page.$('.form');
            const input = await page.$('#field');
            await input.type('4276380100560254');
            const submit = await page.$('.button');
            const hint = await page.$('.valid');
            submit.click();
            await page.waitForSelector('.visible');
        })
    })
});
