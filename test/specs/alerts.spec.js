import AlertsPage from '../pageobjects/alerts.page.js';
import { expect } from '@wdio/globals'

describe('JavaScript Alerts', () => {
    it('should handle JS Alert', async () => {
        await AlertsPage.open();
        await AlertsPage.triggerAlert();
        expect(await AlertsPage.resultText.getText).toContain('You successfully clicked an alert');
    });

    it('should handle JS Confirm (OK)', async () => {
        await AlertsPage.open();
        await AlertsPage.triggerConfirm(true);
        expect(await AlertsPage.resultText.getText).toContain('You clicked: Ok');
    });

    it('should handle JS Confirm (Cancel)', async () => {
        await AlertsPage.open();
        await AlertsPage.triggerConfirm(false);
        expect(await AlertsPage.resultText.getText).toContain('You clicked: Cancel');
    });

    it('should handle JS Prompt', async () => {
        await AlertsPage.open();
        const text = 'WebdriverIO Test';
        await AlertsPage.triggerPrompt(text);
        expect(await AlertsPage.resultText.getText).toContain(`You entered: ${text}`);
    });
});
