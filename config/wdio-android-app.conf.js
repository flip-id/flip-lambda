const {BUNDLE_ID, PLATFORM_VERSION, DEVICE_NAME, FILE_NAME} = require('./constant.conf');
const {join} = require('path');
const {config} = require('./wdio-shared.conf');

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        maxInstances: 1,
        // For W3C the appium capabilities need to have an extension prefix
        // http://appium.io/docs/en/writing-running-appium/caps/
        // This is `appium:` for all Appium Capabilities which can be found here
        'appium:deviceName': DEVICE_NAME,
        'appium:platformVersion': PLATFORM_VERSION,
        'appium:orientation': 'PORTRAIT',
        // `automationName` will be mandatory, see
        // https://github.com/appium/appium/releases/tag/v1.13.0
        'appium:automationName': 'UiAutomator2',
        // The path to the app
        'appium:app': join(process.cwd(), './apps/' + FILE_NAME),
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // 'appium:noReset': true,
        'appium:noReset': false,
        'appium:newCommandTimeout': 240,
        'appium:autoGrantPermissions': true,
        'appium:bundleId': BUNDLE_ID,
        'appium:appPackage': BUNDLE_ID,
        waitForIdleTimeout: 0,
    }
];

exports.config = config;
