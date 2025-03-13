import Page from './page.js';

class AddRemovePage extends Page {
    get addElementButton() { return $('button=Add Element'); }
    get deleteButton() { return $('button=Delete'); }

    async open() {
        await browser.url('/add_remove_elements/');
    }

    async addElement() {
        await this.addElementButton.click();
    }

    async deleteElement() {
        await this.deleteButton.waitForExist({ timeout: 5000 });
        await this.deleteButton.click();
    }
}

export default new AddRemovePage();
