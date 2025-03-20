import { expect } from '@wdio/globals';

import HoversPage from '../pageobjects/hovers.page.js';

describe('Hovers', () => {
    it('should display user2 details on hover', async () => {
        await HoversPage.open();
        await HoversPage.hoverOnUser2();
        expect(await HoversPage.user2ProfileText.getText()).toContain('name: user2');
        await expect(HoversPage.user2ProfileLink).toBeExisting();
    });
});
