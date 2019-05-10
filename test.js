const { remote } = require('webdriverio');

// geckodriver --port 4444 

(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/',
        capabilities: {
            browserName: 'firefox'
        }
    })

    await browser.url('https://webdriver.io');

    const title = await browser.getTitle();
    console.log(`Title was: ${title}`);

    await browser.deleteSession();
})().catch(console.log);
