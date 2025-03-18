const path = require('path');
const fs = require('fs');

exports.config = {
    runner: 'local',

    specs: [
        './test/specs/**/*.js'
    ],

    exclude: [
        // 'path/to/excluded/files'
    ],

    maxInstances: 3,

    capabilities: [{
        browserName: 'chrome',
        maxInstances: 2,
        'goog:chromeOptions': {
            args: ["--disable-popup-blocking", "--disable-features=InfiniteSessionRestore"],
            prefs: {
                "download.default_directory": path.resolve(__dirname, "downloads"),
                "download.prompt_for_download": false,
                "profile.default_content_settings.popups": 0
            },
        },
        acceptInsecureCerts: true,
        unhandledPromptBehavior: "ignore"
    },
    {
        browserName: 'firefox',
        maxInstances: 1,
        "moz:firefoxOptions": {
            prefs: {
                "dom.disable_open_during_load": false,
                "dom.allow_scripts_to_close_windows": true,
                "dom.webnotifications.enabled": false,
                "privacy.popups.showBrowserMessage": false,
                "security.fileuri.strict_origin_policy": false,
                "browser.download.dir": path.resolve(__dirname, "downloads"),
                "browser.download.folderList": 2,
                "browser.helperApps.neverAsk.saveToDisk": "application/octet-stream",
                'dom.disable_beforeunload': false,
                'dom.webdriver.enabled': false,
                'prompts.tab_modal.enabled': false
            },
        },
        acceptInsecureCerts: true,
    }
    ],

    logLevel: 'warn',

    bail: 0,

    baseUrl: 'https://the-internet.herokuapp.com/',

    waitforTimeout: 10000,
    waitforInterval: 300,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    services: [
        ['chromedriver', {
            chromedriverCustomPath: require('chromedriver').path
        }]
    ],

    framework: 'mocha',

    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }],],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    before: async function () {
        await browser.url('/');
    },

    afterTest: async function(test) {
        const dir = './screenshots';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        await browser.saveScreenshot(`${dir}/${test.title.replace(/\s+/g, '_')}.png`);
    },    
}
