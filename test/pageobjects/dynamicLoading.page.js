import Page from './page.js';

class DynamicLoadingPage extends Page {
    get example2Link() { return $('=Example 2: Element rendered after the fact'); }
    get startButton() { return $('button=Start'); }
    get helloWorldText() { return $('#finish h4'); }

    async open() {
        await browser.url('/dynamic_loading');
    }

    async clickExample2() {
        await this.example2Link.click();
    }

    async startLoading() {
        await this.startButton.click();
    }

    async waitForHelloWorld() {
        await this.helloWorldText.waitForDisplayed({ timeout: 7000 });
    }
}

export default new DynamicLoadingPage();
