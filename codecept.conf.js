const {setHeadlessWhen, setCommonPlugins} = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: 'e2e/**/*.spec.js',
  output: 'e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://127.0.0.1:8080', // Sesuai port sama yang lu pake bang
      keepBrowserState: true,
      fullPageScreenshots: true,
      waitForNavigation: ['domcontentloaded'],
      waitForAction: 1000,
      show: true,
      browser: 'chrome',
      chrome: {
        args: ['--no-sandbox'],
      },
    },
    REST: {
      endpoint: 'https://restaurant-api.dicoding.dev',
      defaultHeaders: {
        'Content-Type': 'application/json',
      },
    },
    JSONResponse: {},
  },
  bootstrap: null,
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'Faiz Akhmad Daulay', // Nama lu bang
  plugins: {
    screenshotOnFail: {
      enabled: true,
    },
  },
};
