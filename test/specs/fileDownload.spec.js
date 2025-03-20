import FileDownloadPage from '../pageobjects/fileDownload.page.js';

describe('File Download Test', () => {
    it('should download a random file and verify it exists', async () => {
        await FileDownloadPage.open();
        const downloadedFileName = await FileDownloadPage.downloadRandomFile();
        const fileExists = await FileDownloadPage.isFileDownloaded(downloadedFileName);

        expect(fileExists).toBeTruthy();
    });
});
