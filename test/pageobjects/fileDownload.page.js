import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class FileDownloadPage {
    get downloadedFiles() {
        return $$('a[href*="download/"]');
    }

    async open() {
        await browser.url('/download');
    }

    async downloadRandomFile() {
        await browser.pause(2000);
        const files = await this.downloadedFiles;
        if (files.length === 0) {
            throw new Error('No files available for download!');
        }

        const randomIndex = Math.floor(Math.random() * files.length);
        const fileToDownload = files[randomIndex];

        const fileName = await fileToDownload.getText();
        console.log(`Downloading file: ${fileName}`);

        await fileToDownload.click();
        return fileName;
    }

    async isFileDownloaded(fileName) {
        const downloadDir = path.resolve(__dirname, '../../downloads');

        console.log(`Checking downloads folder: ${downloadDir}`);

        await browser.waitUntil(() => {
            const files = fs.readdirSync(downloadDir);
            console.log(`Files in folder: ${files}`);
            return files.some(file => file.includes(fileName));
        }, { timeout: 10000, timeoutMsg: `File ${fileName} was not downloaded!` });

        return true;
    }
}

export default new FileDownloadPage();
