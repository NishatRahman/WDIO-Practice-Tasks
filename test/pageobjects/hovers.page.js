import Page from './page.js';

class HoversPage extends Page {
    get user2Image() { return $('(//div[@class="figure"])[2]'); }
    get user2ProfileText() { return $('(//div[@class="figcaption"])[2]//h5'); }
    get user2ProfileLink() { return $('(//div[@class="figcaption"])[2]//a'); }

    async open() {
        await browser.url('/hovers');
    }

    async hoverOnUser2() {
        await this.user2Image.moveTo();
        await this.user2ProfileText.waitForDisplayed();
    }
}

export default new HoversPage();
