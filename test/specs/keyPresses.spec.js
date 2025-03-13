import KeyPressesPage from '../pageobjects/keyPress.page.js';
import { expect } from '@wdio/globals'

describe('Key Presses', () => {
    it('should display the correct message when a key is pressed', async () => {
        await KeyPressesPage.open();
        await KeyPressesPage.pressKey('Backspace');

        expect(await KeyPressesPage.resultText.getText()).toContain('You entered: BACK_SPACE');
    });
});
