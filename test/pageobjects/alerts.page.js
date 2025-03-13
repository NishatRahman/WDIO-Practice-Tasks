import Page from './page.js';

class AlertsPage extends Page {
    get jsAlertButton() { return $('button=Click for JS Alert'); }
    get jsConfirmButton() { return $('button=Click for JS Confirm'); }
    get jsPromptButton() { return $('button=Click for JS Prompt'); }
    get resultText() { return $('#result'); }

    async open() {
        await browser.url('/javascript_alerts');
    }

    async triggerAlert() {
        await this.jsAlertButton.click();
        await browser.pause(3000);
        try {
            const alertText = await browser.getAlertText();
            console.log("Alert is open with text:", alertText);
            await browser.pause(3000);
            await browser.acceptAlert();
        } catch (error) {
            console.log("No alert detected.");
        }
    }

    async triggerConfirm(accept = true) {
        await browser.pause(3000);
        await this.jsConfirmButton.click();
        await browser.pause(3000);
        if (accept) {
            await browser.acceptAlert();
        } else {
            await browser.dismissAlert();
        }
    }

    async triggerPrompt(text) {
        await browser.pause(3000);
        await this.jsPromptButton.click();
        await browser.pause(3000);
        await browser.sendAlertText(text);
        await browser.acceptAlert();
    }
}

export default new AlertsPage();
