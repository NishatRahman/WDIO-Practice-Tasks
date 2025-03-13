import AddRemovePage from '../pageobjects/addRemove.page.js';

describe('Add/Remove Elements', () => {
    it('should add and remove elements correctly', async () => {
        await AddRemovePage.open();

        await AddRemovePage.addElement();
        await expect(AddRemovePage.deleteButton).toBeExisting();

        await AddRemovePage.deleteElement();
        await expect(AddRemovePage.deleteButton).not.toBeExisting();
    });
});
