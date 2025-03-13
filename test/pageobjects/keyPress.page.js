import Page from './page.js';

class KeyPressesPage extends Page {
    get inputField() { return $('#target'); }
    get resultText() { return $('#result'); }

    async open() {
        await browser.url('/key_presses');
    }

    async pressKey(key) {
        await this.inputField.click();
        await browser.keys(key);
    }
}

export default new KeyPressesPage();
