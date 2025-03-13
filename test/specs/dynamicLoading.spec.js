import DynamicLoadingPage from '../pageobjects/dynamicLoading.page.js';

describe('Dynamic Loading', () => {
    it('should load Hello World message after clicking Start', async () => {
        await DynamicLoadingPage.open();
        await DynamicLoadingPage.clickExample2();
        await DynamicLoadingPage.startLoading();
        await DynamicLoadingPage.waitForHelloWorld();
        await expect(DynamicLoadingPage.helloWorldText).toHaveText('Hello World!');
    });
});
